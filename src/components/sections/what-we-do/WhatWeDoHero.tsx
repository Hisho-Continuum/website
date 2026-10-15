"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArchitecturalGrid } from "@/components/ui/ArchitecturalGrid";

interface WhatWeDoHeroProps {
  onOpenPlan?: () => void;
}

export function WhatWeDoHero({ onOpenPlan }: WhatWeDoHeroProps) {
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
              What we
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-[100px] font-black tracking-tight text-white leading-[0.9] mt-2">
              build<span className="text-[#FF5100]">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-[#FAFAFA]/80"
          >
            We don&apos;t supply superficial decks or theoretical advice. We build the
            actual systems, including software, brand, and operations, and train your team
            to run them with total autonomy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5100] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-black/40 transition-all duration-300 hover:bg-[#E04800] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get your growth plan</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="#pillars"
              className="text-sm font-semibold tracking-tight text-[#FAFAFA] hover:text-[#FF5100] transition-colors"
            >
              Explore our architecture ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
