"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArchitecturalGrid } from "@/components/ui/ArchitecturalGrid";
import { HeroVisualPattern } from "@/components/ui/HeroVisualPattern";

interface HeroSectionProps {
  onOpenPlan?: () => void;
}

export function HeroSection({ onOpenPlan }: HeroSectionProps) {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#060607] pt-14 pb-32 sm:pt-20 sm:pb-40 lg:pt-28 lg:pb-48 min-h-[82vh] lg:min-h-[88vh]">
      {/* Blueprint Architectural Grid background */}
      <ArchitecturalGrid columns={10} className="opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >


            {/* Headline with Thin-to-Bold Gap Motif */}
            <h1 className="select-none font-sans">
              <span className="text-outline-thin block text-7xl sm:text-8xl lg:text-[108px] font-extralight tracking-tight leading-[0.9]">
                Grow
              </span>
              <span className="block text-7xl sm:text-8xl lg:text-[108px] font-black tracking-tight text-white leading-[0.9] mt-1 sm:mt-2">
                with us.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-8 max-w-xl text-base sm:text-lg font-normal leading-relaxed text-[#FAFAFA]/80">
              We help businesses close the gap between what they are today and
              what they&apos;re capable of becoming, with the technology, brand,
              systems, and expertise to make the next stage possible.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5100] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-black/40 transition-all duration-300 hover:bg-[#E04800] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get your growth plan</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/how-it-works"
                className="text-sm font-semibold tracking-tight text-[#FAFAFA] hover:text-[#FF5100] transition-colors"
              >
                See how it works
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Composition Pattern */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end w-full">
            <HeroVisualPattern />
          </div>
        </div>
      </div>
    </section>
  );
}
