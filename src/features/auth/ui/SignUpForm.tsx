import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { SocialButton } from "./SocialButton.tsx";

function notConfigured(provider: string) {
  alert(`${provider} Anmeldung wird in der Laravel-Integration konfiguriert.`);
}

interface SignUpFormProps {
  onToggleView: (target: "signin" | "signup") => void;
  isPending: boolean;
  startTransition: (callback: () => void) => void;
}

export function SignUpForm({ onToggleView, isPending, startTransition }: SignUpFormProps) {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Die Passwörter stimmen nicht überein.");
      return;
    }

    startTransition(() => {
      void (async () => {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        alert(`Konto für ${formData.email} wurde erfolgreich erstellt! (Simulierte Registrierung)`);
        if (typeof location !== "undefined") {
          location.href = "/";
        }
      })();
    });
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="flex h-125 flex-col justify-between md:h-118.75"
    >
      <div className="flex flex-col gap-4">
        <div className="hidden flex-col md:flex">
          <h3 className="font-display text-lg font-bold tracking-tight text-white">Registrieren</h3>
          <p className="mt-1 text-[12px] text-text-muted">
            Bereits ein Konto?{" "}
            <button
              type="button"
              onClick={() => onToggleView("signin")}
              disabled={isPending}
              className="font-bold text-orange transition-colors hover:text-yellow hover:underline focus:outline-none"
            >
              Anmelden
            </button>
          </p>
        </div>

        {error ?
          <div
            role="alert"
            className="animate-fade-in rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs leading-normal font-bold text-red-500"
          >
            {error}
          </div>
        : null}

        {/* Email */}
        <div className="group flex flex-col gap-1 text-left">
          <label
            htmlFor="signup-email"
            className="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
          >
            E-Mail-Adresse
          </label>
          <div className="relative mt-1">
            <input
              id="signup-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="beispiel@domain.de"
              value={formData.email}
              onChange={(e) => setFormData((previous) => ({ ...previous, email: e.target.value }))}
              disabled={isPending}
              className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm text-white placeholder-text-muted/50 transition-all duration-300 hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
            />
            <Mail className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-text-muted transition-colors duration-300 group-focus-within:text-orange" />
          </div>
        </div>

        {/* Password */}
        <div className="group flex flex-col gap-1 text-left">
          <label
            htmlFor="signup-password"
            className="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
          >
            Passwort
          </label>
          <div className="relative mt-1">
            <input
              id="signup-password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              minLength={8}
              placeholder="Mindestens 8 Zeichen"
              value={formData.password}
              onChange={(e) =>
                setFormData((previous) => ({ ...previous, password: e.target.value }))
              }
              disabled={isPending}
              className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm tracking-widest text-white placeholder-text-muted/50 transition-all duration-300 placeholder:tracking-normal hover:border-slate-700/80 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              disabled={isPending}
              aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
              className="absolute top-1/2 right-3.5 -translate-y-1/2 text-text-muted transition-colors duration-300 hover:text-orange focus:outline-none"
            >
              {showPassword ?
                <EyeOff className="size-4" />
              : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div className="group flex flex-col gap-1 text-left">
          <label
            htmlFor="signup-confirm"
            className="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
          >
            Passwort bestätigen
          </label>
          <div className="relative mt-1">
            <input
              id="signup-confirm"
              name="password_confirmation"
              type="password"
              required
              autoComplete="new-password"
              minLength={8}
              placeholder="Passwort wiederholen"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData((previous) => ({ ...previous, confirmPassword: e.target.value }))
              }
              disabled={isPending}
              className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm tracking-widest text-white placeholder-text-muted/50 transition-all duration-300 placeholder:tracking-normal hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
            />
            <Lock className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-text-muted" />
          </div>
        </div>
      </div>

      {/* Bottom: submit + divider + social */}
      <div className="mt-4 flex flex-col gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="h-11 w-full cursor-pointer rounded-xl bg-linear-to-r from-yellow to-orange text-sm font-extrabold tracking-widest text-black uppercase shadow-lg shadow-orange/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange/25 hover:brightness-110 focus:ring-2 focus:ring-orange focus:outline-none active:scale-[0.98]"
        >
          {isPending ? "Erstelle..." : "Registrieren"}
        </button>

        <div className="relative my-0.5 flex items-center justify-center">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden
          >
            <div className="w-full border-t border-slate-800/60" />
          </div>
          <span className="relative bg-[#1a1c29] px-3 text-[10px] font-bold tracking-widest text-text-muted/70 uppercase select-none">
            oder weiter mit
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SocialButton
            provider="Google"
            onClick={() => notConfigured("Google")}
            disabled={isPending}
          />
          <SocialButton
            provider="Microsoft"
            onClick={() => notConfigured("Microsoft")}
            disabled={isPending}
          />
        </div>

        <p className="text-center text-[10px] leading-relaxed text-text-muted/70 select-none">
          Mit deiner Registrierung stimmst du unseren Nutzungsbedingungen und
          Datenschutzbestimmungen zu.
        </p>
      </div>
    </form>
  );
}
