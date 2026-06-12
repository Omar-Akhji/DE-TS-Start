import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "../../features/auth/ui/AuthCard";
import { AuthSkeleton } from "../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/login/")({
  head: () => ({
    meta: [
      { title: "Anmelden | Deutsch Lernen" },
      {
        name: "description",
        content:
          "Melde dich bei Deutsch Lernen an, um deinen Lernfortschritt bei Vokabeln, Grammatik und Prüfungen zu speichern.",
      },
    ],
  }),
  pendingComponent: () => <AuthSkeleton />,
  component: LoginPage,
});

function LoginPage() {
  return <AuthCard defaultView="signin" />;
}
