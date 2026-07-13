# TanStack CLI Workflow: Start App with Auth, Database, Styling & Deployment

All commands and structures below are from [tanstack.com/cli/latest/docs](https://tanstack.com/cli/latest/docs) and [tanstack.com/start/latest/docs](https://tanstack.com/start/latest/docs).

---

## 1. Discover what's available

```bash
# List all add-ons with machine-readable JSON
npx @tanstack/cli create --list-add-ons --framework React --json
```

Output (schema from `cli` repo at `packages/cli/skills/query-docs-library-metadata/references/discovery-command-output-schemas.md`):

```json
[
  { "id": "clerk", "name": "Clerk", "category": "auth", "exclusive": ["auth"] },
  { "id": "drizzle", "name": "Drizzle", "category": "orm", "exclusive": ["orm"] },
  { "id": "prisma", "name": "Prisma", "category": "orm", "exclusive": ["orm"] },
  { "id": "tanstack-query", "name": "TanStack Query", "category": "data-fetching" },
  { "id": "tanstack-form", "name": "TanStack Form", "category": "form" }
]
```

```bash
# Inspect add-on details (dependencies, options, conflicts)
npx @tanstack/cli create --addon-details clerk --framework React --json
```

```bash
# Search docs for specific patterns
npx @tanstack/cli search-docs "server functions" --library start --framework react --json

# Fetch a specific doc page
npx @tanstack/cli doc query framework/react/getting-started --json

# Discover ecosystem partners by category
npx @tanstack/cli ecosystem --category database --json
```

---

## 2. Visual stack planning via the Builder

URL: **<https://tanstack.com/builder>**

The Builder is a web UI that lets you:

1. Select TanStack libraries (Router, Query, Form, Table, Virtual)
2. Choose partner integrations (Clerk, Drizzle, Prisma, Neon, Supabase)
3. Pick deployment target (Netlify, Vercel, Cloudflare, Docker)
4. Preview the generated stack brief
5. Export a **CLI-ready command** or **stack decision record**

The Builder produces a `.tanstack.json` manifest:

```json
{
  "version": 1,
  "projectName": "deutsch-lernen",
  "framework": "react",
  "mode": "file-router",
  "typescript": true,
  "tailwind": true,
  "packageManager": "bun",
  "chosenAddOns": ["clerk", "drizzle", "tanstack-query", "tanstack-form"]
}
```

This manifest is the single source of truth. Both the CLI and `tanstack add` read it.

---

## 3. Scaffold a new TanStack Start app with add-ons

```bash
# Full-stack Start app with auth (Clerk), database (Drizzle), Query, and Form
npx @tanstack/cli create deutsch-lernen \
  --add-ons clerk,drizzle,tanstack-query,tanstack-form \
  --package-manager bun \
  --framework React \
  -y
```

What this generates (from CLI docs):

```text
deutsch-lernen/
├── src/
│   ├── routes/
│   │   ├── __root.tsx          # Root layout with HeadContent, Outlet, Scripts
│   │   ├── index.tsx           # Home page with server function demo
│   │   └── demo/               # Add-on demo routes
│   │       ├── clerk/          # Auth demo pages (login, profile)
│   │       └── drizzle/        # DB demo pages (CRUD examples)
│   ├── integrations/
│   │   ├── clerk.tsx           # Clerk provider + middleware
│   │   └── drizzle.ts          # DB client setup
│   ├── router.tsx              # createRouter() factory
│   ├── ssr.tsx                 # SSR handler with createStartHandler
│   └── client.tsx              # Client entry point for hydration
│   └── client.tsx              # Client entry point for hydration
├── app.config.ts               # defineConfig() with Vite plugins
├── .tanstack.json              # CLI project manifest
├── .env.example                # API keys for Clerk, Drizzle
└── package.json                # Dependencies merged from all add-ons
```

**Generated `app.config.ts`** (TanStack Start Vite plugin config):

```ts
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**Generated root route `src/routes/__root.tsx`** (from `build-from-scratch.md`):

```tsx
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Deutsch Lernen" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="de">
      <head><HeadContent /></head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
```

---

## 4. Adding to an existing project

If the project already exists with `.tanstack.json`:

```bash
# Add Clerk auth to existing project
npx @tanstack/cli add clerk

# Add Drizzle ORM
npx @tanstack/cli add drizzle

# Add multiple at once
npx @tanstack/cli add tanstack-query tanstack-form

# Force install even if conflicts detected
npx @tanstack/cli add clerk --forced
```

Each `tanstack add` call:

1. Reads `.tanstack.json` for framework/mode context
2. Resolves dependencies and exclusivity (can't have Clerk + Auth0)
3. Writes integration code to `src/integrations/`
4. Creates demo routes in `src/routes/demo/`
5. Merges dependencies into `package.json`
6. Injects providers (wraps root layout)
7. Appends env vars to `.env.example`

---

## 5. Add-on-specific conventions

### Auth (Clerk)

Add-on generates `src/integrations/clerk.tsx`:

```tsx
import { ClerkProvider } from "@clerk/tanstack-start";
import type { ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}
```

Middlewares are added for route protection using TanStack Router's `beforeLoad`:

```ts
// src/routes/dashboard.tsx
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async ({ context }) => {
    const { user } = context.auth;
    if (!user) throw redirect({ to: "/sign-in" });
  },
});
```

### Database (Drizzle)

Add-on generates `src/integrations/drizzle.ts`:

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);
```

Server functions use it directly (no ORM-specific middleware):

```ts
import { createServerFn } from "@tanstack/react-start";
import { db } from "~/integrations/drizzle";
import { vocabulary } from "~/db/schema";

const getWords = createServerFn({ method: "GET" }).handler(async () => {
  return db.select().from(vocabulary);
});
```

### TanStack Query

Add-on injects a `<QueryClientProvider>` in the root layout and provides `router.invalidate()` integration so mutations auto-refetch.

### TanStack Form

No provider injection — the add-on generates a `src/integrations/form.ts` export with a `useAppForm()` hook pre-configured with your schema validator (Zod by default).

### Styling (Tailwind v4)

CLI always includes Tailwind via `@tailwindcss/vite` plugin. The `postcss.config.mjs` or Vite plugin handles it. No deprecated `--tailwind` flag needed — it's always on.

---

## 6. Deployment add-ons

```bash
# Discover deployment targets
npx @tanstack/cli create --list-add-ons --framework React --json | Where-Object category -eq "deployment"
```

Deployment add-ons generate target-specific config:

| Add-on | Generated files |
|--------|----------------|
| `netlify` | `netlify.toml`, `src/server.ts` with Netlify handler |
| `vercel` | `vercel.json`, build preset in `app.config.ts` |
| `cloudflare` | `wrangler.toml`, `src/server.ts` with CF handler |
| `docker` | `Dockerfile`, `.dockerignore` |

**Generated `app.config.ts` with deployment target:**

```ts
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    preset: "netlify",  // or "vercel", "cloudflare-pages", "node-server"
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
```

---

## 7. Doc-grounded best practices (not generic assumptions)

| Concern | TanStack doc source | CLI behavior |
|---------|--------------------|--------------|
| Plugin order | `build-from-scratch.md`: `tanstackStart()` must come before `react()` | Generated `app.config.ts` enforces this |
| Router factory | `build-from-scratch.md`: `createRouter({ routeTree, scrollRestoration })` | Generated `src/router.tsx` uses this shape |
| SSR handler | `server-options.md`: `createStartHandler({ createRouter, getRouterManifest })(defaultStreamHandler)` | Generated `src/ssr.tsx` |
| Server functions | `build-from-scratch.md`: `createServerFn({ method: "GET" }).handler(...)` | Demo routes use this pattern |
| Auth middleware | `clerk` add-on: `beforeLoad` guard with `redirect` | Generated route guards |
| Tailwind v4 | `build-from-scratch.md`: `@tailwindcss/vite` plugin | Always included, no PostCSS config needed |

---

## 8. Full CI/CD pipeline example

```yaml
# .github/workflows/tanstack.yml
name: TanStack Start CI/CD
on:
  push:
    branches: [main]
  pull_request:
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest
      - run: bun install
      - run: bun run build
      - run: bun run check:all
```

```dockerfile
# Dockerfile (from `docker` add-on)
FROM oven/bun:latest
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build
CMD ["bun", "run", "start"]
```

---

## Summary

| Tool | Purpose |
|------|---------|
| `tanstack create` | Scaffold new Start app with add-ons |
| `tanstack add` | Add integrations to existing project |
| `tanstack create --list-add-ons` | Discover all available add-ons |
| `tanstack search-docs` | Query docs by library/topic |
| `tanstack doc` | Fetch specific doc page content |
| `tanstack libraries` | List TanStack packages with versions |
| `tanstack ecosystem` | Discover partners (Neon, Supabase, etc.) |
| `tanstack.com/builder` | Visual stack selection → export CLI command |
| `.tanstack.json` | Project manifest (source of truth for add/init) |
