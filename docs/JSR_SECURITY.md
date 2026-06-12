# JSR & Deno Security Integration Guide

Integrating your project with the **JavaScript Registry (JSR)** and **Deno** enhances security, ensures transparency,
and prevents common supply-chain attacks. This document details how JSR secures your development and deployment
workflows, how to utilize secure sandboxing, and how to configure a tokenless publishing pipeline using OIDC.

---

## 1. Core Security Benefits of JSR

JSR introduces several mechanisms that address security issues inherent in traditional package registries:

### A. TypeScript First & Source Code Transparency

Unlike npm, where packages are pre-compiled and often obfuscated or minified prior to upload, JSR enforces **publishing
source code directly** (TypeScript).

- **Auditability:** Developers and security scanners can read the raw TypeScript code exactly as it was written. This
  prevents attackers from injecting malicious payloads into compiled build artifacts.
- **Local Compilation:** Deno fetches the TS files directly from the registry and compiles them locally on the
  developer's machine or target environment, ensuring full transparency.

### B. No-Token Publishing (OIDC Provenance)

To publish packages to traditional registries, developers typically store highly privileged static API tokens in their
CI/CD systems. If a secret is leaked, attackers can publish malicious versions of your packages.

- **Cryptographic Signatures:** JSR connects directly with **GitHub Actions** via **OpenID Connect (OIDC)**.
- **Short-lived Identity:** When your release action runs, GitHub generates a short-lived OIDC token verifying the run's
  repository and workflow. JSR validates this identity to authorize publishing.
- **Verifiable Provenance:** JSR uses **Sigstore** to sign the package cryptographically, generating verifiable
  provenance. Consumers can verify the package was compiled and published by the authorized GitHub repository workflow.

---

## 2. Setting Up Verifiable OIDC Publishing

To configure tokenless publishing for `@deutsch-lernen/shared` (or your custom scope), follow these steps:

1. **Register a JSR Scope & Package:**
   - Go to [jsr.io](https://jsr.io) and log in using GitHub.
   - Create a scope matching your username/organization (e.g., `@username`).
   - Add a new package under your scope (e.g., `shared`).

2. **Link GitHub Repository:**
   - In your JSR package settings, link your GitHub repository (`Omar-Akhji/Deutch-Lernen`).

3. **Add a GitHub Actions Workflow:**
   - Create a file at `.github/workflows/publish.yml` with the following configuration. The `id-token: write` permission
     is crucial to allow OIDC token generation:

```yaml
name: Publish to JSR

on:
  push:
    tags:
      - "v*" # Trigger on version tags (e.g. v1.0.0)

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write # CRITICAL: Required for OIDC identity verification

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Deno Environment
        uses: denoland/setup-deno@v2
        with:
          deno-version: v2.x

      - name: Publish Package
        run: deno publish
```

When you push a tag, Deno will automatically authenticate with JSR via GitHub's OIDC and securely sign and publish your
library with zero static secrets.

---

## 3. Threat Mitigation and Runtime Sandboxing

### A. Fine-Grained Permissions

Because you are running the project using **Deno**, you can enforce exact security scopes compared to the unrestrained
access of standard Node.js:

- **Network Isolation:** If a dependency goes rogue, Deno blocks outbound connections unless explicitly allowed via
  `--allow-net`.
- **File Access Control:** Restrict filesystem read/write privileges using `--allow-read` and `--allow-write`.
- **Shell Script Sandbox:** JSR packages are built to be runtime-agnostic and do not execute raw bash post-install
  hooks, which are a major vector for NPM malware.

### B. Consuming JSR Safely in Next.js

Next.js projects run inside Deno via npm compatibility mode. To consume JSR packages securely:

1. Use the JSR npm registry bridge by configuring `@jsr:registry=https://npm.jsr.io` in `.npmrc`.
2. Install packages via your terminal: `npx jsr add @std/fmt`
3. Import verified JSR packages directly into your code:

   ```typescript
   import { format } from "@jsr/std__fmt/bytes";
   ```
