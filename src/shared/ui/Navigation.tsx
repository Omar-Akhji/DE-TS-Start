import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "@tanstack/react-router";
import gsap from "../lib/gsap.ts";
import { BackButton } from "./BackButton.tsx";
import { GlassCard } from "./GlassCard.tsx";

export function Navigation() {
  const { pathname } = useLocation();
  const navReference = useRef<HTMLElement>(null);
  const indicatorReference = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  useGSAP(
    () => {
      const activeLink = navReference.current?.querySelector(
        'a[aria-current="page"]',
      ) as HTMLElement | null;

      if (activeLink && indicatorReference.current) {
        // Smoothly animate the indicator to the active link's position and width
        gsap.to(indicatorReference.current, {
          x: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,
        });
      }
    },
    { dependencies: [pathname], scope: navReference },
  );

  return (
    <header className="relative mbe-4">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-2 pbs-2 pbe-2 min-block-17.5 mobile:px-8 mobile:pbs-8 mobile:pbe-8 mobile:min-block-25">
        {/* Left Side: Back Button */}
        <div className="shrink-0">
          {(
            pathname !== "/vokabeln"
            && pathname !== "/grammatik"
            && pathname !== "/pruefung"
            && pathname !== "/"
          ) ?
            <BackButton />
          : null}
        </div>

        {/* Right Side: Navigation Menu */}
        <GlassCard
          as="nav"
          ref={navReference}
          className="relative inline-flex flex-wrap justify-center gap-1 rounded-full px-1.5 pbs-1.5 pbe-1.5 mobile:gap-2 mobile:px-2 mobile:pbs-2 mobile:pbe-2"
          aria-label="Main navigation"
        >
          {/* Sliding Indicator */}
          <div
            ref={indicatorReference}
            className="absolute inset-y-1.5 left-0 z-0 rounded-full bg-linear-to-br from-yellow to-orange opacity-0 shadow-lg shadow-yellow/20 mobile:inset-y-2"
            style={{ pointerEvents: "none" }}
          />

          {(
            [
              { to: "/vokabeln", label: "Vokabeln" },
              { to: "/grammatik", label: "Grammatik" },
              { to: "/pruefung", label: "Prüfung" },
              { to: "/login", label: "Anmelden" },
            ] as { to: string; label: string }[]
          ).map(({ to, label }) => {
            const isActiveRoute = isActive(to);
            return (
              <Link
                key={to}
                to={to}
                className={`relative z-10 rounded-full px-4 pbs-1.5 pbe-1.5 text-sm font-semibold transition-colors duration-200 tablet:px-6 tablet:pbs-2 tablet:pbe-2 tablet:text-base ${
                  isActiveRoute ? "text-black" : "text-mist-500 hover:text-white"
                }`}
                aria-current={isActiveRoute ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </GlassCard>
      </div>
    </header>
  );
}
