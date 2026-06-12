import { GlassCard } from "./GlassCard.tsx";
import { Skeleton } from "./Skeleton.tsx";

/**
 * Standard Card Skeleton that matches CardBody structure
 * (Gradient figure + category badge + subtitle + title + description + stats row)
 */
export function CardSkeleton({ variant = "default" }: { variant?: "default" | "large" }) {
  return (
    <article className="h-full">
      <div className="relative z-1 flex h-full w-full flex-col overflow-hidden rounded-3xl p-4 shadow-xl ring-1 ring-black/5">
        {/* Gradient figure area */}
        <div className="aspect-video w-full overflow-hidden rounded-2xl">
          <Skeleton className="h-full w-full bg-white/5" />
        </div>

        <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
          {/* Category badge + subtitle */}
          <div className="mbe-3 flex items-center gap-2">
            <Skeleton className="h-7 w-20 rounded-full bg-white/10" />
            <Skeleton className="h-4 w-16 bg-white/5" />
          </div>

          {/* Title */}
          <Skeleton className={`mb-2 ${variant === "large" ? "h-8" : "h-7"} w-3/4 bg-white/8`} />

          {/* Description lines */}
          <Skeleton className="mbe-1 h-4 w-full bg-white/5" />
          <Skeleton className="mbe-4 h-4 w-2/3 bg-white/5" />

          {/* Stats row if large variant */}
          {variant === "large" ?
            <div className="mbs-auto flex gap-8 border-bs border-white/10 pbs-4">
              <div className="flex flex-col gap-1">
                <Skeleton className="h-7 w-12 bg-white/10" />
                <Skeleton className="h-3 w-16 bg-white/5" />
              </div>
              <div className="flex flex-col gap-1">
                <Skeleton className="h-7 w-12 bg-white/10" />
                <Skeleton className="h-3 w-16 bg-white/5" />
              </div>
            </div>
          : null}
        </div>
      </div>
    </article>
  );
}

/**
 * Centered Hero Skeleton used in dynamic detail pages
 */
export function HeroSkeleton() {
  return (
    <div className="relative mbe-12 overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl md:p-12">
      <div className="flex flex-col items-center">
        {/* Category Badge Placeholder */}
        <div className="mbe-4">
          <Skeleton className="h-10 w-28 rounded-full bg-white/10" />
        </div>

        {/* Title Placeholder */}
        <Skeleton className="mbe-4 h-10 w-3/4 bg-white/15 md:h-12" />

        {/* Description Placeholder */}
        <Skeleton className="h-6 w-full bg-white/5 md:w-2/3" />

        {/* Stats Row */}
        <div className="mbs-8 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-24 bg-white/10" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-20 bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Section Header (Circle Icon + Title)
 */
export function SectionHeaderSkeleton() {
  return (
    <div className="mbe-8 flex items-center gap-4">
      <Skeleton className="size-12 rounded-full border-[3px] border-white/10 bg-white/5" />
      <Skeleton className="h-8 w-52 bg-white/8" />
    </div>
  );
}

const ROW_IDS = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10"];
const COL_IDS = ["c1", "c2", "c3", "c4", "c5", "c6"];

/**
 * Vocabulary Table Skeleton (3 columns)
 */
export function TableSkeleton({
  columns = 4,
  rows = 5,
  noWrapper = false,
}: {
  columns?: number;
  rows?: number;
  noWrapper?: boolean;
}) {
  const content = (
    <div className="w-full border-collapse">
      {/* Header Row */}
      <div className="flex border-b border-white/10 p-2 @md:px-4 @md:py-3">
        {COL_IDS.slice(0, columns).map((id) => (
          <Skeleton
            key={id}
            className="h-4 flex-1 bg-white/10"
            style={{ marginLeft: id === "c1" ? 0 : "1rem" }}
          />
        ))}
      </div>
      {/* Body Rows */}
      {ROW_IDS.slice(0, rows).map((rowId) => (
        <div
          key={rowId}
          className="flex border-b border-white/5 px-2 py-3 @md:px-4 @md:py-4"
        >
          {COL_IDS.slice(0, columns).map((colId) => (
            <Skeleton
              key={`${rowId}-${colId}`}
              className="h-6 flex-1 bg-white/5"
              style={{ marginLeft: colId === "c1" ? 0 : "1rem" }}
            />
          ))}
        </div>
      ))}
    </div>
  );

  if (noWrapper) {
    return <div className="overflow-x-auto">{content}</div>;
  }

  return (
    <GlassCard className="@container">
      <div className="overflow-x-auto p-4">{content}</div>
    </GlassCard>
  );
}

export function SectionCardSkeleton() {
  return (
    <div className="mbe-16">
      <div className="mbe-8 flex items-center gap-3">
        <Skeleton className="size-12 rounded-full bg-white/10" />
        <Skeleton className="h-8 w-48 bg-white/10" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {["sc1", "sc2", "sc3"].map((id) => (
          <CardSkeleton key={id} />
        ))}
      </div>
    </div>
  );
}

/**
 * Themen Section Skeleton matching ThemenSection structure
 */
export function ThemenSkeleton() {
  return (
    <main className="min-h-screen space-y-16 py-8">
      <header className="mx-auto max-w-2xl space-y-4 text-center">
        <Skeleton className="mx-auto h-10 w-64 bg-white/10" />
        <Skeleton className="mx-auto h-8 w-full max-w-lg bg-white/5" />
      </header>
      <nav className="rounded-2xl border border-white/5 bg-zinc-950/50 p-4">
        <div className="flex flex-wrap justify-center gap-2">
          {["n1", "n2", "n3", "n4", "n5"].map((id) => (
            <Skeleton
              key={id}
              className="h-10 w-32 rounded-full bg-white/5"
            />
          ))}
        </div>
      </nav>
      {["s1", "s2", "s3"].map((sid) => (
        <section
          key={sid}
          className="mb-16"
        >
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
            {["c1", "c2", "c3"].map((cid) => (
              <CardSkeleton key={cid} />
            ))}
          </div>
        </section>
      ))}
      <aside className="rounded-3xl border border-amber-500/20 bg-linear-to-br from-yellow/20 to-orange/20 p-8">
        <Skeleton className="mb-6 h-8 w-56 bg-white/10" />
        <div className="grid gap-4 md:grid-cols-2">
          {["t1", "t2", "t3", "t4"].map((id) => (
            <Skeleton
              key={id}
              className="h-4 w-full bg-white/5"
            />
          ))}
        </div>
      </aside>
    </main>
  );
}

/**
 * Modernized Page Header Skeleton for landing pages
 */
export function PageHeaderSkeleton() {
  return (
    <header className="mbe-12 text-center">
      {/* Title & Icon */}
      <div className="mbe-4 flex items-center justify-center gap-3 tablet:gap-4">
        <Skeleton className="size-12 shrink-0 rounded-full border-[3px] border-white/10 bg-white/5 tablet:size-14" />
        <Skeleton className="h-9 w-64 bg-white/10 tablet:h-12 tablet:w-80" />
      </div>

      {/* Separator Line */}
      <div className="mx-auto mbe-6 h-1 w-24 overflow-hidden rounded-full">
        <Skeleton className="h-full w-full bg-white/15" />
      </div>

      {/* Description Badge */}
      <div className="flex justify-center">
        <Skeleton className="h-10 w-full max-w-[320px] rounded-full bg-white/5 tablet:max-w-120" />
      </div>
    </header>
  );
}

/**
 * Skeleton for the Home Landing page
 */
export function HomeSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mbe-16">
        <HeroSkeleton />
      </header>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {["card-1", "card-2", "card-3"].map((id) => (
          <CardSkeleton key={id} />
        ))}
      </div>
      <section className="mbs-20">
        <HeroSkeleton />
      </section>
    </div>
  );
}

/**
 * Skeleton for the Authentication Card (Login/Register)
 */
export function AuthSkeleton() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-6 md:px-6 md:py-0">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 size-72 rounded-full bg-yellow/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 size-72 rounded-full bg-orange/5 blur-[120px]" />

      {/* Back button */}
      <div className="absolute top-6 left-6 z-50 flex size-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950/40 text-text-muted backdrop-blur-md">
        <Skeleton className="size-4 rounded-sm bg-white/10" />
      </div>

      <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-card shadow-2xl backdrop-blur-(--glass-blur) md:max-w-4xl md:flex-row">
        {/* Left Nav Panel Skeleton */}
        <div className="hidden w-36 shrink-0 flex-col items-center justify-between border-r border-slate-800/50 bg-slate-950/10 py-8 md:flex">
          <Skeleton className="size-12 rounded-full bg-white/10" />
          <div className="w-full space-y-4 px-4">
            <Skeleton className="h-10 w-full bg-white/5" />
            <Skeleton className="h-10 w-full bg-white/5" />
          </div>
          <Skeleton className="h-3 w-10 bg-white/5" />
        </div>

        {/* Central Showcase Art Banner Skeleton */}
        <div className="hidden w-[320px] shrink-0 flex-col bg-linear-to-br from-yellow/20 to-orange/20 p-8 md:flex">
          <Skeleton className="h-4 w-24 bg-white/10" />
          <Skeleton className="mt-4 h-8 w-3/4 bg-white/10" />
          <Skeleton className="mt-2 h-4 w-full bg-white/5" />
          <Skeleton className="mt-2 h-4 w-5/6 bg-white/5" />
          <div className="mx-auto mt-auto h-40 w-48 rounded-xl bg-white/5" />
        </div>

        {/* Right Form Panel Skeleton */}
        <div className="flex flex-1 flex-col justify-center px-6 py-8 md:px-10">
          <Skeleton className="mb-2 h-7 w-28 bg-white/10" />
          <Skeleton className="mb-8 h-4 w-48 bg-white/5" />
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 bg-white/10" />
              <Skeleton className="h-11 w-full rounded-xl bg-white/5" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 bg-white/10" />
              <Skeleton className="h-11 w-full rounded-xl bg-white/5" />
            </div>
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-32 bg-white/5" />
              <Skeleton className="h-4 w-20 bg-white/5" />
            </div>
            <Skeleton className="h-11 w-full rounded-xl bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
