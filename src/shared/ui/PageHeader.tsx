import type { LucideIcon } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll.tsx";

interface PageHeaderProperties {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export function PageHeader({ icon: Icon, title, subtitle }: PageHeaderProperties) {
  return (
    <header className="mb-12 text-center">
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-4 flex items-center justify-center gap-3 text-3xl tablet:gap-4 tablet:text-4xl">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-14">
            <Icon
              className="size-6 tablet:size-7"
              strokeWidth={2}
            />
          </span>
          <span className="title-gradient">{title}</span>
        </h1>
      </AnimateOnScroll>
      <AnimateOnScroll
        animation="zoom-in"
        delay={150}
      >
        <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-linear-to-r from-yellow to-orange shadow-lg shadow-yellow/20" />
      </AnimateOnScroll>
      {subtitle ?
        <AnimateOnScroll
          animation="fade-up"
          delay={100}
        >
          <p className="mx-auto max-w-fit rounded-full border-2 border-solid border-white/10 bg-white/5 px-6 py-2 text-base text-text-muted tablet:text-lg">
            {subtitle}
          </p>
        </AnimateOnScroll>
      : null}
    </header>
  );
}
