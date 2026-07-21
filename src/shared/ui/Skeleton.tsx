import { cn } from "../lib/utilities.ts";

function Skeleton({ className, ...properties }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-md bg-white/5 before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/8 before:to-transparent before:animate-shimmer",
        className
      )}
      {...properties}
    />
  );
}

export { Skeleton };
