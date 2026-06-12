import type { ElementType, ReactNode } from "react";
import { cn } from "../lib/utilities.ts";

interface GlassCardProperties {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "nav";
  noBlur?: boolean;
  rounded?: "2xl" | "3xl";
  ref?: React.Ref<HTMLElement>;
}

/**
 * Standardized Glass Aesthetic Container.
 * Uses oklch-based glass variables from globals.css.
 */
export const GlassCard = ({
  children,
  className,
  as: Component = "div",
  noBlur = false,
  rounded = "3xl",
  ref,
}: GlassCardProperties) => {
  const ComponentTag = Component as ElementType;

  return (
    <ComponentTag
      ref={ref}
      className={cn(
        "overflow-hidden border border-(--glass-border) bg-card shadow-sm",
        rounded === "3xl" ? "rounded-3xl" : "rounded-2xl",
        !noBlur && "backdrop-blur-(--glass-blur)",
        className,
      )}
    >
      {children}
    </ComponentTag>
  );
};
