import { createFileRoute } from "@tanstack/react-router";
import { getThemen } from "../../features/themen/api/services";
import { ThemenSection } from "../../features/themen/ui/ThemenSection";
import { AnimateOnScroll } from "../../shared/ui/AnimateOnScroll";
import { ThemenSkeleton } from "../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/themen/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async () => {
    const { data: themen } = await getThemen();
    return { themen };
  },
  head: () => ({
    meta: [
      { title: "B1 Themen - Deutsch Lernen" },
      {
        name: "description",
        content:
          "58 B1 Sprechen und Schreiben Themen mit Pro- und Contra-Argumenten zur Prüfungsvorbereitung.",
      },
    ],
  }),
  pendingComponent: () => <ThemenSkeleton />,
  component: ThemenPage,
});

function ThemenPage() {
  const { themen } = Route.useLoaderData();

  return (
    <AnimateOnScroll
      as="main"
      animation="fade-up"
    >
      <ThemenSection initialThemen={themen} />
    </AnimateOnScroll>
  );
}
