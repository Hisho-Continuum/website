"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FieldGuideMockupProps {
  className?: string;
}

export function FieldGuideMockup({ className }: FieldGuideMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative w-full max-w-[340px] select-none transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]",
        className
      )}
    >
      {/* Ambient orange glow behind book */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[#FF5100]/15 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Realistic Book Mockup Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[-16px_20px_50px_rgba(0,0,0,0.8),0_20px_60px_rgba(0,0,0,0.9)]">
        <Image
          src="/images/field-guide-cover.jpg"
          alt="The Missing Pieces - A Field Guide to Scaling Real Businesses by hisho."
          fill
          priority
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

