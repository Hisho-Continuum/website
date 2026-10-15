"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TheGapBridgeProps {
  className?: string;
  leftLabel?: string;
  rightLabel?: string;
}

export function TheGapBridge({
  className,
  leftLabel = "Your business",
  rightLabel = "More possible",
}: TheGapBridgeProps) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-between gap-3 pt-6 select-none",
        className
      )}
    >
      {/* Left state badge */}
      <div className="z-10 shrink-0 rounded-lg border border-[#2A2A2D] bg-[#0E0E10] px-4 py-2 text-xs font-medium tracking-tight text-[#FAFAFA]/90 transition-colors hover:border-white/30">
        {leftLabel}
      </div>

      {/* The Gap - Thin orange connecting line motif */}
      <div className="relative flex flex-1 items-center px-1">
        <div className="h-[2px] w-full bg-[#FF5100]/30">
          <motion.div
            className="h-full bg-[#FF5100]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        {/* Subtle pulsing indicator in middle */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1">
          <span className="flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5100] opacity-40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#FF5100]" />
          </span>
        </div>
      </div>

      {/* Right state badge */}
      <div className="z-10 shrink-0 rounded-lg bg-white px-4 py-2 text-xs font-semibold tracking-tight text-[#060607] shadow-sm transition-transform hover:scale-[1.02]">
        {rightLabel}
      </div>
    </div>
  );
}
