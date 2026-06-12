import { useEffect } from "react";

interface ErrorViewProperties {
  error: Error & { digest?: string };
  reset: () => void;
  title: string;
  errorLabel?: string;
  fallbackMessage?: string;
}

export function ErrorView({
  error,
  reset,
  title,
  errorLabel = "Error",
  fallbackMessage = "Ein unerwarteter Fehler ist aufgetreten.",
}: ErrorViewProperties) {
  useEffect(() => {
    console.error(`${errorLabel}:`, error);
  }, [error, errorLabel]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="rounded-3xl border border-white/10 bg-card p-8 shadow-2xl backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-semibold text-white">{title}</h2>
        <p className="mb-6 text-text-muted">{error.message || fallbackMessage}</p>
        <button
          type="button"
          onClick={reset}
          className="btn-primary"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
