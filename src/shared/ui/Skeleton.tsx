import { cn } from "../lib/utilities.ts";

function Skeleton({ className, ...properties }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      // Deutsch Lernen - High-Performance React Architecture

      className={cn("animate-pulse rounded-md bg-accent", className)}
      {...properties}
    />
  );
}

export { Skeleton };
