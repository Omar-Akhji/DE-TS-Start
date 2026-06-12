import { Suspense, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { ScrollTrigger } from "../lib/gsap.ts";

/**
 * Utility component to refresh ScrollTrigger on route changes.
 * Essential for SPA client-side routing as page transitions don't trigger a full reload,
 * often leading to incorrect scroll trigger positions if the new page has a different height.
 */
function GsapRefreshInner() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
}

export function GsapRefresh() {
  return (
    <Suspense fallback={null}>
      <GsapRefreshInner />
    </Suspense>
  );
}
