# Migration Plan: Next.js → TanStack Start

This plan is grounded in [TanStack Start docs](https://tanstack.com/start/latest/docs/framework/react/getting-started) and [TanStack Router docs](https://tanstack.com/router/latest/docs/framework/react/overview).

---

## Strategy: Incremental Framework Swap

**Keep all** `features/`, `shared/`, `public/`, configs. **Replace only** the framework layer.

---

## Phase 1: Package Changes

### Remove

```bash
bun remove next @next/bundle-analyzer eslint-config-next @tailwindcss/postcss postcss autoprefixer
```

### Install

```bash
bun add @tanstack/react-router @tanstack/react-start @tanstack/react-query
bun add -D @tanstack/router-plugin @vitejs/plugin-react vite tailwindcss @tailwindcss/vite
```

The `@tailwindcss/vite` Vite plugin replaces the PostCSS approach. `tailwindcss` v4 stays.

### Final `package.json` scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "start": "vite start",
    "typecheck": "tsc --noEmit",
    "lint": "eslint ."
  }
}
```

---

## Phase 2: New TanStack Start Files

These are the required files per the [TanStack Start build-from-scratch guide](https://tanstack.com/start/v0/docs/framework/react/build-from-scratch) — none exist yet.

### File: `app.config.ts`

Replaces `next.config.ts`. Uses `defineConfig` from TanStack Start.

```ts
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      tsconfigPaths({ projects: ["./tsconfig.json"] }),
    ],
  },
  server: {
    // Remove for static export, keep for SSR
    preset: "node-server",
  },
});
```

Tailwind v4 uses the `@tailwindcss/vite` plugin. The `tsconfigPaths` plugin preserves `@/` path aliases.

### File: `src/router.tsx`

```ts
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
  });
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
```

### File: `src/ssr.tsx`

```ts
import { createStartHandler, defaultStreamHandler } from "@tanstack/start/server";
import { getRouterManifest } from "@tanstack/start/router-manifest";

export default createStartHandler({
  createRouter: () => import("#tanstack-router-entry"),
  getRouterManifest,
})(defaultStreamHandler);
```

### File: `src/client.tsx`

```ts
/// <reference types="vinxi/types/client" />
import { StartClient } from "@tanstack/start";
import { hydrateRoot } from "react-dom/client";
import { getRouter } from "./router";

const router = getRouter();

hydrateRoot(document, <StartClient router={router} />);
```

### File: `vite.config.ts` (if not using `app.config.ts`)

```ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});
```

**Critical**: `tanstackStart()` must come before `viteReact()` per [Start core docs](https://github.com/TanStack/router/blob/main/packages/start-client-core/skills/start-core/SKILL.md).

---

## Phase 3: Route File Migration

### Mapping Table

| Next.js | TanStack Start | Notes |
|---------|---------------|-------|
| `app/layout.tsx` | `src/routes/__root.tsx` | Root layout with `HeadContent`, `Outlet`, `Scripts` |
| `app/page.tsx` | `src/routes/index.tsx` | Home page |
| `app/loading.tsx` | Root route `pendingComponent` | Global loading state |
| `app/error.tsx` | Root route `errorComponent` | Global error boundary |
| `app/not-found.tsx` | Root route `notFoundComponent` | 404 page |
| `app/vokabeln/page.tsx` | `src/routes/vokabeln/index.tsx` | Vocabulary index |
| `app/vokabeln/[id]/page.tsx` | `src/routes/vokabeln/$id/index.tsx` | `$id` = dynamic param |
| `app/vokabeln/[id]/[topicId]/page.tsx` | `src/routes/vokabeln/$id/$topicId/index.tsx` | Nested dynamic |
| `app/vokabeln/loading.tsx` | `vokabeln` route `pendingComponent` | Per-route loading |
| `app/vokabeln/error.tsx` | `vokabeln` route `errorComponent` | Per-route error |
| `app/grammatik/page.tsx` | `src/routes/grammatik/index.tsx` | Grammar index |
| `app/grammatik/[section]/[topicId]/page.tsx` | `src/routes/grammatik/$section/$topicId/index.tsx` | Grammar detail |
| `app/grammatik/loading.tsx` | `grammatik` route `pendingComponent` | |
| `app/grammatik/error.tsx` | `grammatik` route `errorComponent` | |
| `app/pruefung/page.tsx` | `src/routes/pruefung/index.tsx` | Exam training index |
| `app/pruefung/[level]/page.tsx` | `src/routes/pruefung/$level/index.tsx` | Level detail |
| `app/pruefung/[level]/[module]/page.tsx` | `src/routes/pruefung/$level/$module/index.tsx` | Module study |
| `app/pruefung/[level]/modelltests/page.tsx` | `src/routes/pruefung/$level/modelltests/index.tsx` | Model tests |
| `app/pruefung/loading.tsx` | `pruefung` route `pendingComponent` | |
| `app/pruefung/error.tsx` | `pruefung` route `errorComponent` | |
| `app/quiz/[level]/[skill]/[testId]/page.tsx` | `src/routes/quiz/$level/$skill/$testId/index.tsx` | Quiz engine |
| `app/quiz/error.tsx` | `quiz` route `errorComponent` | |
| `app/themen/page.tsx` | `src/routes/themen/index.tsx` | Essay topics |
| `app/themen/loading.tsx` | `themen` route `pendingComponent` | |
| `app/login/page.tsx` | `src/routes/login/index.tsx` | Sign-in |
| `app/register/page.tsx` | `src/routes/register/index.tsx` | Sign-up |

### Root Layout: Before/After

**Before** (`app/layout.tsx` — Next.js):

```tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextScript from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = { title: "Deutsch Lernen" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`no-js ${poppins.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

**After** (`src/routes/__root.tsx` — TanStack Router):

```tsx
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../../app/globals.css";
import { Footer } from "../../shared/ui/Footer.tsx";
import { Navigation } from "../../shared/ui/Navigation.tsx";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Deutsch Lernen" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="de" className="no-js" style={{ "--font-poppins": "Poppins, system-ui, sans-serif" }}>
      <head><HeadContent /></head>
      <body>
        <Navigation />
        <Outlet />
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
```

### Index Route: Before/After

**Before** (`app/page.tsx` — Next.js):

```tsx
import type { Metadata } from "next";
import { BookOpen, GraduationCap, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Deutsch Lernen | Deine Plattform für Erfolg",
  description: "Lerne Deutsch effektiv...",
};

export default function Home() {
  return <main>{/* ... */}</main>;
}
```

**After** (`src/routes/index.tsx` — TanStack Router):

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, GraduationCap, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deutsch Lernen | Deine Plattform für Erfolg" },
      { name: "description", content: "Lerne Deutsch effektiv..." },
    ],
  }),
  component: Home,
});

function Home() {
  return <main>{/* same JSX, unchanged */}</main>;
}
```

### Dynamic Route: Before/After

**Before** (`app/vokabeln/[id]/page.tsx` — Next.js):

```tsx
import type { Metadata } from "next";
import Link from "next/link";

interface PageProperties { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  const { data } = await getVocabList();
  return data.map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({ params }: PageProperties): Promise<Metadata> {
  const { id } = await params;
  const { data: item } = await getVocabById(id);
  return { title: item ? `${item.german} - Vokabeln` : "Vokabel Lektion" };
}

export default async function Page({ params }: PageProperties) {
  const { id } = await params;
  const { data: item } = await getVocabById(id);
  return <main>{/* uses next/link */}</main>;
}
```

**After** (`src/routes/vokabeln/$id/index.tsx` — TanStack Router):

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { getVocabById, getVocabList } from "../../../features/vocabulary/api/services.ts";

export const Route = createFileRoute("/vokabeln/$id")({
  staticData: () => getVocabList().then(({ data }) =>
    data.map((item) => ({ params: { id: String(item.id) } }))
  ),
  loader: async ({ params: { id } }) => {
    const { data: item } = await getVocabById(id);
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData.item ? `${loaderData.item.german} - Vokabeln` : "Vokabel Lektion" },
    ],
  }),
  component: VokabelnDetail,
});

function VokabelnDetail() {
  const { item } = Route.useLoaderData();
  // same JSX, Link from @tanstack/react-router
  if (!item) return <div>not found</div>;
  return <main>{/* ... */}</main>;
}
```

### Navigation Component: Before/After

**Before** (`shared/ui/Navigation.tsx`):

```tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <Link href="/vokabeln" className={pathname === "/vokabeln" ? "active" : ""}>
      Vokabeln
    </Link>
  );
}
```

**After** — TanStack Router:

```tsx
import { Link, useLocation } from "@tanstack/react-router";

export function Navigation() {
  const { pathname } = useLocation();
  return (
    <Link to="/vokabeln" className={pathname === "/vokabeln" ? "active" : ""}>
      Vokabeln
    </Link>
  );
}
```

Key differences: `to="/vokabeln"` instead of `href="/vokabeln"`, `useLocation()` instead of `usePathname()`. Type-safe routes are automatic — no `Route` type needed.

---

## Phase 4: Pattern Replacements

### `<head>` metadata

| Next.js | TanStack Router |
|---------|-----------------|
| `export const metadata: Metadata = { title }` | Route `head: () => ({ meta: [{ title }] })` |
| `generateMetadata({ params })` returning `Metadata` | Route `head: ({ loaderData }) => ({ meta: [...] })` |
| `layout.tsx` `metadata` | Root route `head` |

### Link component

| Next.js | TanStack Router |
|---------|-----------------|
| `import Link from "next/link"` | `import { Link } from "@tanstack/react-router"` |
| `<Link href="/path">` | `<Link to="/path">` |
| `import type { Route } from "next"` | Remove — built-in typed routes from `routeTree.gen.ts` |

### Navigation hooks

| Next.js | TanStack Router |
|---------|-----------------|
| `usePathname()` | `useLocation().pathname` |
| `useRouter()` (from `next/navigation`) | `useRouter()` (from `@tanstack/react-router`) |
| `useRouter().push()` | `useRouter().navigate({ to: "/path" })` |

### Loading & Error states

| Next.js | TanStack Router equivalent |
|---------|---------------------------|
| `loading.tsx` file | Route option `pendingComponent` |
| `error.tsx` file (`"use client"`, `error, reset` props) | Route option `errorComponent` |
| `not-found.tsx` file | Root route `notFoundComponent` |

Route definition with pending/error:

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vokabeln")({
  component: VokabelnPage,
  pendingComponent: Loading,         // was loading.tsx
  errorComponent: VokabelnError,    // was error.tsx
});
```

### Static generation

| Next.js | TanStack Router |
|---------|-----------------|
| `generateStaticParams()` returning `{ param: val }[]` | Route option `staticData` returning `{ params: { param: val } }[]` |

### Font loading

| Next.js | TanStack Router |
|---------|-----------------|
| `import { Poppins } from "next/font/google"` | `<link>` in root route `head.links` or CSS `@import` |

### Script

| Next.js | TanStack Router |
|---------|-----------------|
| `next/script` | Regular `<script>` in root layout body |

### Route typed params

| Next.js | TanStack Router |
|---------|-----------------|
| `params: Promise<{ id: string }>` (async) | `params: { id: string }` (sync — from route path) |

---

## Phase 5: Directories to Remove

After migration, these are unused:

```
app/              → all routes moved to src/routes/
next.config.ts    → replaced by app.config.ts
postcss.config.mjs → Tailwind v4 now via Vite plugin
.eslintrc*       → eslint.config.mjs stays (works with Vite)
```

These **stay** (no changes needed):

```
features/        → all domain modules
shared/          → all UI and lib code
public/          → same behavior
eslint.config.mjs → works with any framework
prettier.config.mjs → works with any framework
stylelint.config.mjs → works with any framework
tsconfig.json    → small adjustments (remove next plugin, add vite types)
```

---

## Phase 6: tsconfig.json Updates

Remove the Next.js plugin, add Vite types:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["vite/client"],
    "paths": { "@/*": ["./src/*"] }
  },
  "plugins": [],        // was [{ "name": "next" }]
  "include": ["src/**/*", "vite-env.d.ts"]
}
```

---

## Phase 7: Tailwind v4 with Vite

`globals.css` stays identical. The import mechanism changes:

**Before** (PostCSS): `@tailwindcss/postcss` in `postcss.config.mjs`
**After** (Vite): `@tailwindcss/vite` plugin in `app.config.ts`

The `@import "tailwindcss"` in `globals.css` works with both.

---

## Phase 8: Path Alias (`@/`)

Vite needs `vite-tsconfig-paths` to resolve `@/`:

```ts
// app.config.ts
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths({ projects: ["./tsconfig.json"] })],
  },
});
```

Update `tsconfig.json` paths to point to `./src/*`:

```json
{
  "paths": { "@/*": ["./src/*"] }
}
```

---

## Phase 9: Overall File Manifest

### Files to create (new)

```
app.config.ts
src/router.tsx
src/ssr.tsx
src/client.tsx
vite-env.d.ts
```

### Files to move + rename

```
app/layout.tsx                → src/routes/__root.tsx
app/page.tsx                  → src/routes/index.tsx
app/loading.tsx               → merged into root route pendingComponent
app/error.tsx                 → merged into root route errorComponent
app/not-found.tsx             → merged into root route notFoundComponent
app/vokabeln/page.tsx         → src/routes/vokabeln/index.tsx
app/vokabeln/[id]/page.tsx    → src/routes/vokabeln/$id/index.tsx
app/vokabeln/[id]/[topicId]/page.tsx → src/routes/vokabeln/$id/$topicId/index.tsx
app/vokabeln/loading.tsx      → removed (route pendingComponent)
app/vokabeln/error.tsx        → removed (route errorComponent)
app/grammatik/page.tsx        → src/routes/grammatik/index.tsx
app/grammatik/[section]/[topicId]/page.tsx → src/routes/grammatik/$section/$topicId/index.tsx
app/grammatik/loading.tsx     → removed
app/grammatik/error.tsx       → removed
app/pruefung/page.tsx         → src/routes/pruefung/index.tsx
app/pruefung/[level]/page.tsx → src/routes/pruefung/$level/index.tsx
app/pruefung/[level]/[module]/page.tsx → src/routes/pruefung/$level/$module/index.tsx
app/pruefung/[level]/modelltests/page.tsx → src/routes/pruefung/$level/modelltests/index.tsx
app/pruefung/loading.tsx      → removed
app/pruefung/error.tsx        → removed
app/quiz/[level]/[skill]/[testId]/page.tsx → src/routes/quiz/$level/$skill/$testId/index.tsx
app/quiz/error.tsx            → removed
app/themen/page.tsx           → src/routes/themen/index.tsx
app/themen/loading.tsx        → removed
app/login/page.tsx            → src/routes/login/index.tsx
app/register/page.tsx         → src/routes/register/index.tsx
```

### Files to delete

```
next.config.ts
postcss.config.mjs
next-env.d.ts
app/                           (whole directory after moving all content)
```

### Files to keep unchanged

```
features/                      (all modules)
shared/                        (all components, lib, model)
public/                        (static assets)
eslint.config.mjs
prettier.config.mjs
stylelint.config.mjs
globals.css                    (stays at app/ or moves to src/)
```

---

## Summary of API Replacements

| Next.js | TanStack |
|---------|----------|
| `next/link` → `Link` | `@tanstack/react-router` → `Link` |
| `next/navigation` → `usePathname` | `@tanstack/react-router` → `useLocation().pathname` |
| `next/navigation` → `useRouter` | `@tanstack/react-router` → `useRouter` |
| `next/font/google` → `Poppins` | `globals.css` → `@import url(...)` |
| `next/script` | Regular `<script>` tag |
| `next` → `Metadata` type | Route `head()` method |
| `next` → `Route` type | Built-in, remove import |
| `page.tsx` convention | `index.tsx` convention |
| `layout.tsx` | `__root.tsx` |
| `loading.tsx` file | `pendingComponent` option |
| `error.tsx` file | `errorComponent` option |
| `not-found.tsx` file | `notFoundComponent` option |
| `generateStaticParams` | `staticData` option |
| `generateMetadata` | `head()` option |
| `params: Promise<{...}>` | `params: {...}` (sync) |
| `next.config.ts` | `app.config.ts` |
| `@tailwindcss/postcss` | `@tailwindcss/vite` |
