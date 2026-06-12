import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { CardSkeleton, PageHeaderSkeleton } from "./shared/ui/SkeletonLayouts";

function DefaultPending() {
  return (
    <main className="min-h-screen">
      <PageHeaderSkeleton />
      <section className="py-4">
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
          {["s1", "s2", "s3", "s4", "s5", "s6"].map((id) => (
            <li
              key={id}
              className="h-full"
            >
              <CardSkeleton />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPendingComponent: DefaultPending,
    defaultPendingMs: 0,
    defaultPendingMinMs: 300,
  });
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
