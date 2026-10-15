import * as React from "react";
import { cn } from "@/lib/utils";

interface ArchitecturalGridProps {
  className?: string;
  columns?: number;
}

export function ArchitecturalGrid({
  className,
  columns = 8,
}: ArchitecturalGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 flex w-full justify-between overflow-hidden opacity-30 select-none",
        className
      )}
    >
      {Array.from({ length: columns + 1 }).map((_, i) => (
        <div
          key={i}
          className="h-full w-px bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent"
        />
      ))}
    </div>
  );
}
