import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Centralized GSAP configuration for the entire application.
 * Ensures plugins are registered only once and handles client-side safety.
 */
if (typeof document !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Global ScrollTrigger defaults
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize", // Standard events
  });
}

export * from "gsap";

export { ScrollTrigger } from "gsap/ScrollTrigger";
export { default } from "gsap";
