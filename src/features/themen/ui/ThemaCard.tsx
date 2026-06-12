import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "../../../shared/lib/gsap.ts";
import { getCategoryClasses } from "../lib/category-config.ts";
import type { Thema } from "../model/types.ts";

interface ThemaCardProperties {
  thema: Thema;
}

export function ThemaCard({ thema }: ThemaCardProperties) {
  const [activeTab, setActiveTab] = useState<"pro" | "con" | "text">(
    thema.isTextOnly ? "text" : "pro",
  );
  const tabsReference = useRef<HTMLDivElement>(null);
  const indicatorReference = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (thema.isTextOnly) return;

      const activeButton = tabsReference.current?.querySelector(
        `button[data-active="true"]`,
      ) as HTMLElement | null;

      if (activeButton && indicatorReference.current) {
        gsap.to(indicatorReference.current, {
          x: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
          backgroundColor: activeTab === "pro" ? "#10b981" : "#ef4444", // emerald-500, red-500
          duration: 0.4,
          ease: "power2.out",
          opacity: 1,
        });
      }

      // Staggered animation for content list items
      if (contentRef.current) {
        const listItems = contentRef.current.querySelectorAll("li");

        if (listItems.length > 0) {
          gsap.fromTo(
            listItems,
            { opacity: 0, x: -15 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.1,
              duration: 0.4,
              ease: "power2.out",
              clearProps: "all",
            },
          );
        } else {
          // Fallback for text-only content
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          );
        }
      }
    },
    { dependencies: [activeTab], scope: tabsReference },
  );

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5">
      <div className="mbe-4 flex items-start justify-between">
        <div>
          <span
            className={`mbe-2 inline-block rounded-full px-2.5 pbs-0.5 pbe-0.5 text-xs font-semibold tracking-wider uppercase ${getCategoryClasses(
              thema.cat,
            )}`}
          >
            {thema.cat}
          </span>
          <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-amber-400 tablet:text-base">
            {thema.label}
          </h3>
        </div>
      </div>

      <div
        ref={tabsReference}
        className="relative mb-4 flex gap-1 rounded-full bg-black/20 p-1"
      >
        {thema.isTextOnly ? null : (
          <>
            {/* Sliding Indicator */}
            <div
              ref={indicatorReference}
              className="absolute inset-y-1 left-0 z-0 rounded-full opacity-0 shadow-lg"
              style={{ pointerEvents: "none" }}
            />

            <button
              type="button"
              onClick={() => setActiveTab("pro")}
              data-active={activeTab === "pro"}
              className={`relative z-10 flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 tablet:text-sm ${
                activeTab === "pro" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Vorteile
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("con")}
              data-active={activeTab === "con"}
              className={`relative z-10 flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 tablet:text-sm ${
                activeTab === "con" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Nachteile
            </button>
          </>
        )}
        {thema.isTextOnly ?
          <button
            type="button"
            className="flex-1 rounded-full bg-amber-500 px-3 py-1.5 text-xs font-medium text-white tablet:text-sm"
          >
            Mustertext
          </button>
        : null}
      </div>

      <div
        ref={contentRef}
        className="min-h-30"
      >
        {activeTab === "pro" && thema.pro ?
          <ul className="space-y-3">
            {thema.pro.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-xs leading-relaxed text-zinc-300 tablet:text-sm"
              >
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                {point}
              </li>
            ))}
          </ul>
        : null}
        {activeTab === "con" && thema.con ?
          <ul className="space-y-3">
            {thema.con.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-xs leading-relaxed text-zinc-300 tablet:text-sm"
              >
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-red-500" />
                {point}
              </li>
            ))}
          </ul>
        : null}
        {(activeTab === "text" || thema.isTextOnly) && thema.text ?
          <p className="border-l-2 border-amber-500/30 py-1 pl-4 text-xs leading-relaxed text-zinc-300 italic tablet:text-sm">
            &quot;{thema.text}&quot;
          </p>
        : null}
      </div>

      <div className="mbs-6 flex justify-end border-bs border-white/5 pbs-4 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="font-mono text-[10px] text-zinc-500 uppercase">
          Zertifikat B1 Topic #{thema.id}
        </span>
      </div>
    </div>
  );
}
