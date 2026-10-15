"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisualPattern() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl select-none pt-4 pb-4">
      {/* 2-Column Staggered Image Grid with Refined Rounded Architectural Framing */}
      <div className="relative grid grid-cols-12 gap-5 items-start">
        {/* Left / Upper Image Card (Card 1) - Slightly rounded corners & bigger aspect */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-6 relative aspect-[3/3.8] rounded-2xl overflow-hidden border border-white/15 bg-[#141416] shadow-2xl group"
        >
          <Image
            src="/images/hero-growth-leader.jpg"
            alt="Business founder ascending toward scale"
            fill
            priority
            sizes="(max-width: 768px) 50vw, 360px"
            className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Right / Lower Staggered Image Card (Card 2) - Slightly rounded corners & bigger aspect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-6 relative aspect-[3/4.2] mt-10 sm:mt-14 rounded-2xl overflow-hidden border border-white/15 bg-[#121214] shadow-2xl group"
        >
          <Image
            src="/images/hero-growth-tower.jpg"
            alt="Architectural tower soaring upward signifying vertical scale"
            fill
            priority
            sizes="(max-width: 768px) 50vw, 360px"
            className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Metric Card (Top Right, overlapping Card 1 and Card 2) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -top-3 right-0 sm:right-6 z-30 rounded-xl border border-[#2A2A2D] bg-[#0E0E10]/95 p-3.5 sm:p-4 shadow-2xl backdrop-blur-md min-w-[140px] sm:min-w-[170px]"
        >
          <p className="text-[10px] sm:text-[11px] font-medium text-[#8A8A8E]">
            Scale Output
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
              3.8x
            </span>
            <span className="text-[10px] font-semibold text-[#FF5100]">
              growth
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 border-t border-white/5 pt-1.5 text-[9px] text-[#8A8A8E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5100]" />
            <span>Verified hisho builds</span>
          </div>
        </motion.div>

        {/* Circular Badge on Bottom Right of Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="absolute -bottom-3 right-0 sm:right-2 z-30 flex h-20 w-20 sm:h-22 sm:w-22 flex-col items-center justify-center rounded-full border-2 border-white/20 bg-[#0E0E10] text-center shadow-2xl p-2"
        >
          <div className="absolute inset-1 rounded-full border border-dashed border-[#FF5100]/40" />
          <span className="relative text-xs sm:text-sm font-black text-white">
            100%
          </span>
          <span className="relative text-[9px] font-bold text-[#FF5100] tracking-tight uppercase">
            Built to Scale
          </span>
        </motion.div>
      </div>
    </div>
  );
}
