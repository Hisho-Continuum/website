"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface AboutCtaBannerProps {
  onOpenPlan?: () => void;
}

export function AboutCtaBanner({ onOpenPlan }: AboutCtaBannerProps) {
  return (
    <section className="relative bg-[#FAFAFA] pb-24 lg:pb-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] sm:aspect-[21/8] max-h-[460px] w-full overflow-hidden rounded-3xl shadow-2xl border border-black/10"
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Modern architectural glass headquarters"
            fill
            className="object-cover filter brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Banner Content */}
          <div className="absolute bottom-0 inset-x-0 p-8 sm:p-12 lg:p-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Start Your Growth Journey Today<span className="text-[#FF5100]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Diagnose, build, and secure your company&apos;s next echelon of scale with clarity and confidence.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5100] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get your growth plan</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Reach out
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
