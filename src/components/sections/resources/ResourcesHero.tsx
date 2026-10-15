"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArchitecturalGrid } from "@/components/ui/ArchitecturalGrid";

export function ResourcesHero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#060607] pt-14 pb-28 sm:pt-20 sm:pb-36 lg:pt-28 lg:pb-44 min-h-[75vh]">
      <ArchitecturalGrid columns={10} className="opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="select-none font-sans"
          >
            <span className="text-outline-thin block text-6xl sm:text-7xl lg:text-[100px] font-extralight tracking-tight leading-[0.9]">
              The founder&apos;s
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-[100px] font-black tracking-tight text-white leading-[0.9] mt-2">
              library<span className="text-[#FF5100]">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-[#FAFAFA]/80"
          >
            Rigorous thinking, operational manuals, and architectural frameworks
            developed inside scaling businesses. Free from fluff and filler.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
