import { useEffect, useState, useTransition } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, UserCheck, UserPlus } from "lucide-react";
import { cn } from "../../../shared/lib/utilities.ts";
import { SignInForm } from "./SignInForm.tsx";
import { SignUpForm } from "./SignUpForm.tsx";

interface AuthCardProps {
  defaultView: "signin" | "signup";
}

export function AuthCard({ defaultView }: AuthCardProps) {
  const [view, setView] = useState<"signin" | "signup">(defaultView);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (typeof history !== "undefined") {
      history.replaceState(null, "", view === "signin" ? "/login" : "/register");
    }
  }, [view]);

  const toggleView = (target: "signin" | "signup") => {
    setView(() => target);
  };

  return (
    <div className="relative flex min-h-dvh items-center justify-center px-4 py-6 md:px-6 md:py-0">
      {/* Decorative ambient glows using theme colors */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 size-72 rounded-full bg-yellow/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 size-72 rounded-full bg-orange/10 blur-[120px]" />

      {/* Back-to-home button */}
      <Link
        to="/"
        aria-label="Zurück zur Startseite"
        className="absolute top-6 left-6 z-50 flex size-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950/40 text-text-muted shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-orange/30 hover:bg-orange/10 hover:text-orange focus:ring-2 focus:ring-orange focus:outline-none"
      >
        <ChevronLeft className="size-5" />
      </Link>

      <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-card shadow-2xl shadow-orange/5 backdrop-blur-(--glass-blur) transition-all duration-500 md:max-w-4xl md:flex-row">
        {/* PANEL 1: Left navigation menu (desktop/tablet) */}
        <nav
          aria-label="Auth Ansichtsauswahl"
          className="relative hidden w-36 shrink-0 flex-col items-center justify-between border-r border-slate-800/50 bg-slate-950/10 py-8 md:flex"
        >
          {/* Logo */}
          <div className="relative size-12 transition-transform duration-500 select-none hover:rotate-12">
            <img
              src="/logo.svg"
              alt="Deutsch Lernen Logo"
              className="size-full object-contain"
            />
          </div>

          {/* Vertical tabs with sliding accent indicator */}
          <div className="relative w-full">
            <div
              aria-hidden
              className="ease-out-back absolute left-0 h-20 w-1 rounded-r-md bg-linear-to-b from-yellow to-orange transition-transform duration-400"
              style={{ transform: view === "signin" ? "translateY(0px)" : "translateY(96px)" }}
            />

            <ul className="flex w-full flex-col gap-4">
              <li>
                <button
                  type="button"
                  onClick={() => toggleView("signin")}
                  disabled={isPending}
                  aria-pressed={view === "signin"}
                  className={cn(
                    "flex h-20 w-full flex-col items-center justify-center gap-2 border-0 bg-transparent text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed",
                    view === "signin" ? "text-orange" : "text-text-muted hover:text-white",
                  )}
                >
                  <UserCheck className="size-5" />
                  <span>Anmelden</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => toggleView("signup")}
                  disabled={isPending}
                  aria-pressed={view === "signup"}
                  className={cn(
                    "flex h-20 w-full flex-col items-center justify-center gap-2 border-0 bg-transparent text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed",
                    view === "signup" ? "text-orange" : "text-text-muted hover:text-white",
                  )}
                >
                  <UserPlus className="size-5" />
                  <span>Registrieren</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="text-[10px] font-semibold tracking-wider text-text-muted/50 select-none">
            v1.0.0
          </div>
        </nav>

        {/* PANEL 2: Central showcase banner */}
        <div className="relative z-10 -my-6 hidden w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl bg-linear-to-br from-yellow to-orange text-slate-950 shadow-xl shadow-orange/15 md:flex">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full bg-white/10 blur-xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-12 size-56 rounded-full bg-white/15 blur-2xl"
          />

          <div
            className="ease-out-back absolute inset-0 flex flex-col transition-transform duration-500"
            style={{ transform: view === "signin" ? "translateY(0)" : "translateY(-100%)" }}
          >
            {/* Sign-in art */}
            <div className="flex h-full w-full shrink-0 flex-col justify-between px-8 pt-12 pb-10 text-left">
              <div>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-800 uppercase">
                  Deutsch Lernen
                </span>
                <h2 className="font-display mt-2 text-2xl leading-tight font-extrabold tracking-tight text-slate-950">
                  Willkommen zurück.
                </h2>
                <p className="mt-2 text-xs leading-relaxed font-semibold text-slate-900">
                  Meistere die deutsche Sprache. Übe Vokabeln, verstehe Grammatik und bereite dich
                  erfolgreich auf Zertifikate vor.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-65 transition-transform duration-500 select-none hover:scale-105">
                <img
                  src="/signin.svg"
                  alt="Anmelden Illustration"
                  width={260}
                  height={195}
                  className="w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>

            {/* Sign-up art */}
            <div className="flex h-full w-full shrink-0 flex-col justify-between px-8 pt-12 pb-10 text-left">
              <div>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-800 uppercase">
                  Jetzt starten
                </span>
                <h2 className="font-display mt-2 text-2xl leading-tight font-extrabold tracking-tight text-slate-950">
                  Lerne mit Erfolg.
                </h2>
                <p className="mt-2 text-xs leading-relaxed font-semibold text-slate-900">
                  Erstelle ein kostenloses Konto, um deinen Lernfortschritt zu speichern und
                  personalisierte Übungen freizuschalten.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-65 transition-transform duration-500 select-none hover:scale-105">
                <img
                  src="/signup.svg"
                  alt="Registrieren Illustration"
                  width={260}
                  height={195}
                  className="w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 3: Active form */}
        <div className="relative flex flex-1 flex-col justify-start px-6 pt-5 pb-9 md:px-8 md:pt-6 md:pb-10 lg:px-10 lg:pt-6 lg:pb-12">
          {/* Mobile header (visible below md) */}
          <div className="mb-6 flex flex-col items-center text-center md:hidden">
            <div className="relative mb-3 size-12 transition-transform duration-500 hover:rotate-12">
              <img
                src="/logo.svg"
                alt="Deutsch Lernen logo"
                className="size-full object-contain"
              />
            </div>
            <h1 className="font-display text-xl font-bold text-white">Deutsch Lernen</h1>
            <p className="mt-1 text-xs text-text-muted">Deine umfassende Deutsch-Lernplattform.</p>

            {/* Pill switcher */}
            <div className="mt-6 flex w-full max-w-70 rounded-full border border-slate-800/60 bg-slate-950/30 p-1">
              <button
                type="button"
                onClick={() => toggleView("signin")}
                disabled={isPending}
                className={cn(
                  "flex-1 rounded-full py-2 text-xs font-bold transition-all duration-300 focus:outline-none disabled:opacity-60",
                  view === "signin" ?
                    "bg-linear-to-r from-yellow to-orange text-black shadow-xs"
                  : "text-text-muted hover:text-white",
                )}
              >
                Anmelden
              </button>
              <button
                type="button"
                onClick={() => toggleView("signup")}
                disabled={isPending}
                className={cn(
                  "flex-1 rounded-full py-2 text-xs font-bold transition-all duration-300 focus:outline-none disabled:opacity-60",
                  view === "signup" ?
                    "bg-linear-to-r from-yellow to-orange text-black shadow-xs"
                  : "text-text-muted hover:text-white",
                )}
              >
                Registrieren
              </button>
            </div>
          </div>

          {/* Form switcher */}
          <div className="relative w-full">
            {/* SIGN IN VIEW */}
            <div
              className={cn(
                "ease-out-back w-full transition-all duration-400",
                view === "signin" ?
                  "pointer-events-auto relative scale-100 opacity-100"
                : "pointer-events-none absolute inset-0 scale-95 opacity-0 select-none",
              )}
              aria-hidden={view !== "signin"}
            >
              <SignInForm
                onToggleView={toggleView}
                isPending={isPending}
                startTransition={startTransition}
              />
            </div>

            {/* SIGN UP VIEW */}
            <div
              className={cn(
                "ease-out-back w-full transition-all duration-400",
                view === "signup" ?
                  "pointer-events-auto relative scale-100 opacity-100"
                : "pointer-events-none absolute inset-0 scale-95 opacity-0 select-none",
              )}
              aria-hidden={view !== "signup"}
            >
              <SignUpForm
                onToggleView={toggleView}
                isPending={isPending}
                startTransition={startTransition}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
