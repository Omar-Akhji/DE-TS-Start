import type { ReactNode } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll.tsx";

interface HeroProperties {
  title: string;
  description: string;
  category?: string;
  example?: string;
  badge?: string;
  gradient?: string;
  variant?: "default" | "glass";
  stats?: { label: string; value: ReactNode; icon?: ReactNode }[];
}

export function Hero({
  title,
  description,
  category,
  example,
  badge,
  gradient,
  variant = "default",
  stats,
}: HeroProperties) {
  const Content = (
    <div className={gradient ? "max-inline-3xl" : "text-center"}>
      <AnimateOnScroll
        animation="fade-up"
        delay={100}
      >
        <div
          className={`mbe-4 flex flex-wrap items-center gap-3 ${gradient ? "" : "justify-center"}`}
        >
          {category ?
            <span
              className={`inline-block rounded-full px-6 py-2 font-bold ${
                gradient ?
                  "bg-black/20 text-xs text-white tablet:text-sm"
                : "bg-linear-to-br from-yellow to-orange text-lg text-black shadow-lg shadow-yellow/20 tablet:text-xl"
              }`}
            >
              {category}
            </span>
          : null}
          {badge ?
            <span
              className={`inline-block rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm tablet:text-sm ${
                gradient ? "bg-white/20 text-white" : "bg-mist-900/50 text-mist-500"
              }`}
            >
              {badge}
            </span>
          : null}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation="blur-in"
        delay={300}
        duration={1000}
      >
        <h1
          className={`-my-2 mbe-2 py-2 text-3xl font-bold text-shadow-sm tablet:text-4xl laptop:text-5xl ${
            gradient ?
              "text-white drop-shadow-[0_2px_10px_black/20]"
            : "bg-linear-to-br from-white to-slate-200 bg-clip-text text-transparent"
          }`}
        >
          {title}
        </h1>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation="fade-up"
        delay={500}
      >
        <p
          className={`m-0 text-base tablet:text-lg laptop:text-xl ${gradient ? "text-white/90" : "text-mist-500"}`}
        >
          {description}
        </p>
      </AnimateOnScroll>

      {example ?
        <AnimateOnScroll
          animation="fade-in"
          delay={500}
        >
          <p className="mbs-4 text-base text-white/80">
            <em>{example}</em>
          </p>
        </AnimateOnScroll>
      : null}

      {stats ?
        <AnimateOnScroll
          animation="fade-up"
          delay={700}
        >
          <dl className="mbs-8 flex flex-wrap justify-center gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="m-0 flex items-center gap-2 text-sm text-mist-500 tablet:text-lg">
                  {stat.icon ?
                    <span className="flex size-5 items-center justify-center tablet:size-6">
                      {stat.icon}
                    </span>
                  : null}
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimateOnScroll>
      : null}
    </div>
  );

  return (
    <AnimateOnScroll
      animation="fade-in"
      duration={1000}
      className={`relative mbe-12 overflow-hidden rounded-3xl p-8 shadow-2xl tablet:p-12 ${
        !gradient || variant === "glass" ? "border border-(--glass-border) bg-card" : ""
      }`}
      style={gradient && variant !== "glass" ? { background: gradient } : {}}
    >
      {Content}
    </AnimateOnScroll>
  );
}
