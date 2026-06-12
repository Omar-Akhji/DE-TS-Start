import { useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { useGSAP } from "@gsap/react";
import { twMerge } from "tailwind-merge";
import gsap from "../lib/gsap.ts";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "zoom-in"
  | "zoom-out"
  | "fade-left"
  | "fade-right"
  | "blur-in";

interface AnimationConfig {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
}

function getAnimationConfig(animation: AnimationType): AnimationConfig {
  switch (animation) {
    case "fade-up": {
      return { from: { y: 48 }, to: { y: 0 } };
    }
    case "fade-down": {
      return { from: { y: -48 }, to: { y: 0 } };
    }
    case "fade-in": {
      return { from: {}, to: {} };
    }
    case "zoom-in": {
      return { from: { scale: 0.95 }, to: { scale: 1 } };
    }
    case "zoom-out": {
      return { from: { scale: 1.05 }, to: { scale: 1 } };
    }
    case "fade-left": {
      return { from: { x: 48 }, to: { x: 0 } };
    }
    case "fade-right": {
      return { from: { x: -48 }, to: { x: 0 } };
    }
    case "blur-in": {
      return { from: { filter: "blur(12px)", scale: 0.95 }, to: { scale: 1 } };
    }
  }
}

interface AnimateOnScrollProperties<T extends ElementType> {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  as?: T;
  repeat?: boolean;
}

export function AnimateOnScroll<T extends ElementType = "div">({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  as,
  repeat = false,
  ...properties
}: AnimateOnScrollProperties<T>
  & Omit<ComponentPropsWithoutRef<T>, keyof AnimateOnScrollProperties<T>>) {
  const reference = useRef<Element>(null);

  useGSAP(
    () => {
      const element = reference.current;
      if (!element) return;

      gsap.set(element, { opacity: 0, visibility: "hidden" });

      const { from: configFrom, to: configTo } = getAnimationConfig(animation);

      const baseFrom: gsap.TweenVars = { opacity: 0, visibility: "visible", ...configFrom };
      const baseTo: gsap.TweenVars = { opacity: 1, clearProps: "filter,willChange", ...configTo };

      gsap.fromTo(element, baseFrom, {
        ...baseTo,
        duration: duration / 1000,
        delay: delay / 1000,
        ease: "power3.out",
        onStart: () => {
          gsap.set(element, { willChange: "transform, opacity, filter" });
        },
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: repeat ? "play none none reverse" : "play none none none",
          once: !repeat,
        },
      });
    },
    { scope: reference, dependencies: [animation, delay, duration, repeat] },
  );

  const Component = as ?? "div";

  return (
    <Component
      ref={reference as React.RefObject<HTMLDivElement>}
      className={twMerge("animate-on-scroll", className)}
      {...properties}
    >
      {children}
    </Component>
  );
}
