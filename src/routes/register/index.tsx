import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "../../features/auth/ui/AuthCard";
import { AuthSkeleton } from "../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/register/")({
  head: () => ({
    meta: [
      { title: "Registrieren | Deutsch Lernen" },
      {
        name: "description",
        content:
          "Erstelle ein kostenloses Konto bei Deutsch Lernen, um deine Vokabel- und Grammatikfortschritte zu speichern.",
      },
    ],
  }),
  pendingComponent: () => <AuthSkeleton />,
  component: RegisterPage,
});

function RegisterPage() {
  return <AuthCard defaultView="signup" />;
}
