"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ClosingCtaSectionProps {
  onOpenPlan?: () => void;
}

export function ClosingCtaSection({ onOpenPlan }: ClosingCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#060607] py-28 lg:py-40 border-t border-white/5">
      {/* Subtle warm orange horizon ambient light at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-[#FF5100]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">


        {/* Thin to Solid Gap Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="select-none font-sans"
        >
          <span className="text-outline-thin block text-7xl sm:text-8xl lg:text-[120px] font-extralight tracking-tight leading-[0.9]">
            Grow
          </span>
          <span className="block text-7xl sm:text-8xl lg:text-[120px] font-black tracking-tight text-white leading-[0.9] mt-2">
            with us.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-xl text-lg font-medium text-[#FAFAFA]/80"
        >
          Your next stage starts with a conversation.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 space-y-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#060607] shadow-2xl transition-all duration-300 hover:bg-[#FF5100] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get your growth plan</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <p className="text-xs text-[#8A8A8E]">
            Contact details to be confirmed before launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
