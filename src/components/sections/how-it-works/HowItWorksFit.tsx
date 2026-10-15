"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HowItWorksFitProps {
  onOpenPlan?: () => void;
}

export function HowItWorksFit({ onOpenPlan }: HowItWorksFitProps) {
  return (
    <>
      {/* 1. Full-Bleed Cinematic Background Section */}
      <section className="relative min-h-[500px] lg:min-h-[620px] w-full overflow-hidden bg-[#060607] flex items-center border-t border-white/10">
        {/* Full-Bleed Cinematic Background Image */}
        <Image
          src="/images/fit-card-leader.jpg"
          alt="Cinematic technology executive workspace"
          fill
          className="object-cover object-center brightness-[0.75]"
          priority
        />
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060607]/95 via-[#060607]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060607]/90 via-transparent to-black/40" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl space-y-6"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Connect<span className="text-[#FF5100]">.</span> Build
              <span className="text-[#FF5100]">.</span> Scale
              <span className="text-[#FF5100]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D0D0D4] leading-relaxed max-w-xl">
              We engineer bespoke software architectures, automated data pipelines,
              and enterprise brand authority for ambitious founders ready to dominate their category.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Photo on Left with Texts on Right Section (Warm Orange-Tinted Canvas) */}
      <section className="relative bg-[#FFF2EA] py-20 lg:py-32 text-[#060607] border-t border-[#F5DFD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Founder Photo with Signature */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.2rem] border border-[#ECD9CC] bg-white shadow-xl">
                <Image
                  src="/images/fit-card-founder.jpg"
                  alt="Operating founder leadership"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Stylized Handwritten Wordmark Signature underneath photo */}
              <div className="mt-6 flex items-center justify-center gap-1 text-2xl tracking-tight text-[#6A6A6E]">
                <span className="italic font-light">hisho</span>
                <span className="text-[#FF5100] font-black">.</span>
              </div>
            </motion.div>

            {/* Right: Rich Editorial Copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-[#060607] leading-tight">
                Who we build for<span className="text-[#FF5100]">.</span>
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-[#5A5A5E] leading-relaxed">
                <p>
                  At <span className="font-bold text-[#060607]">hisho.</span>, we believe great software
                  and sound digital architecture shouldn’t be reserved only for legacy tech giants.
                  Whether you are nurturing an early-stage idea that needs thorough examination
                  to see how it works, or running an active business looking for bespoke systems,
                  we engineer alongside you.
                </p>
                <p>
                  From <span className="font-bold text-[#060607]">first-time founders testing a new concept</span> to
                  uncover its real-world viability, to{" "}
                  <span className="font-bold text-[#060607]">established operating teams</span> eliminating
                  manual drag and replacing fragile SaaS tools with owned digital infrastructure, we engineer
                  solutions tailored precisely to your ambition.
                </p>
                <p>
                  You get custom web platforms, automated workflow pipelines, and executive authority designed
                  to give your team total confidence, zero vendor lock-in, and 100% intellectual property ownership.
                </p>
              </div>

              {/* Pill CTA Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF5100] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#FF5100]/20 transition-all duration-300 hover:bg-[#E04800] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Start your growth plan</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
