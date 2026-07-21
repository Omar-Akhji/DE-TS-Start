import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { SocialButton } from "./SocialButton.tsx";

const DEMO_EMAIL = "lerner@deutschlernen.de";
const DEMO_PASSWORD = "passwort123";

function notConfigured(provider: string) {
  alert(`${provider} Anmeldung wird in der Laravel-Integration konfiguriert.`);
}

interface SignInFormProps {
  onToggleView: (target: "signin" | "signup") => void;
  isPending: boolean;
  startTransition: (callback: () => void) => void;
}

export function SignInForm({ onToggleView, isPending, startTransition }: SignInFormProps) {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    startTransition(() => {
      void (async () => {
        // Simulate authentication pending state
        await new Promise((resolve) => setTimeout(resolve, 1200));
        alert(`Erfolgreich angemeldet als ${formData.email}! (Simulierte Anmeldung)`);
        if (typeof location !== "undefined") {
          location.assign("/");
        }
      })();
    });
  };

  const handleDemoLogin = () => {
    setFormData({ email: DEMO_EMAIL, password: DEMO_PASSWORD, rememberMe: false });
    setError(null);

    startTransition(() => {
      void (async () => {
        await new Promise((resolve) => setTimeout(resolve, 800));
        alert("Erfolgreich mit dem Demo-Konto angemeldet!");
        if (typeof location !== "undefined") {
          location.assign("/");
        }
      })();
    });
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="flex h-125 flex-col justify-between md:h-118.75"
    >
      <div className="flex flex-col gap-4">
        <div className="hidden flex-col md:flex">
          <h3 className="font-display text-lg font-bold tracking-tight text-white">Anmelden</h3>
          <p className="mt-1 text-[12px] text-text-muted">
            Noch kein Konto?{" "}
            <button
              type="button"
              onClick={() => onToggleView("signup")}
              disabled={isPending}
              className="font-bold text-orange transition-colors hover:text-yellow hover:underline focus:outline-none"
            >
              Konto erstellen
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
            htmlFor="signin-email"
            className="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
          >
            E-Mail-Adresse
          </label>
          <div className="relative mt-1">
            <input
              id="signin-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="beispiel@domain.de"
              value={formData.email}
              onChange={(e) => setFormData((previous) => ({ ...previous, email: e.target.value }))}
              disabled={isPending}
              className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm text-white placeholder-text-muted/50 transition-colors duration-300 hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
            />
            <Mail className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-text-muted transition-colors duration-300 group-focus-within:text-orange" />
          </div>
        </div>

        {/* Password */}
        <div className="group flex flex-col gap-1 text-left">
          <div className="flex items-center justify-between">
            <label
              htmlFor="signin-password"
              className="text-xs font-bold tracking-wider text-text-muted uppercase select-none"
            >
              Passwort
            </label>
            <button
              type="button"
              onClick={() => notConfigured("Passwort zurücksetzen")}
              tabIndex={-1}
              className="cursor-pointer border-none bg-transparent p-0 text-xs font-bold text-orange/80 transition-colors hover:text-orange focus:outline-none"
            >
              Vergessen?
            </button>
          </div>
          <div className="relative mt-1">
            <input
              id="signin-password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              placeholder="••••••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData((previous) => ({ ...previous, password: e.target.value }))
              }
              disabled={isPending}
              className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/25 px-4 pr-10 font-sans text-sm tracking-widest text-white placeholder-text-muted/50 transition-colors duration-300 placeholder:tracking-normal hover:border-slate-700/85 hover:bg-slate-950/30 focus:border-orange focus:bg-slate-950/45 focus:ring-4 focus:ring-orange/10 focus:outline-none"
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

        {/* Remember Me + Try Demo */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex cursor-pointer items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) =>
                setFormData((previous) => ({ ...previous, rememberMe: e.target.checked }))
              }
              disabled={isPending}
              className="peer size-4 cursor-pointer rounded-sm border-slate-800 bg-slate-950/20 accent-orange checked:border-orange checked:bg-orange"
            />
            <span className="text-xs font-medium text-text-muted transition-colors peer-checked:text-white">
              Angemeldet bleiben
            </span>
          </label>
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={isPending}
            className="text-xs font-bold text-orange transition-colors hover:text-yellow focus:outline-none disabled:opacity-60"
          >
            Demo testen
          </button>
        </div>
      </div>

      {/* Bottom: submit + divider + social */}
      <div className="mt-4 flex flex-col gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="h-11 w-full cursor-pointer rounded-xl bg-linear-to-r from-yellow to-orange text-sm font-extrabold tracking-widest text-black uppercase shadow-lg shadow-orange/10 transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:shadow-orange/25 hover:brightness-110 focus:ring-2 focus:ring-orange focus:outline-none active:scale-[0.98]"
        >
          {isPending ? "Melde an..." : "Anmelden"}
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
          Mit deiner Anmeldung stimmst du unseren Nutzungsbedingungen und Datenschutzbestimmungen
          zu.
        </p>
      </div>
    </form>
  );
}
