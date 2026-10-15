"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HowItWorksPhasesProps {
  onOpenPlan?: () => void;
}

export function HowItWorksPhases({ onOpenPlan }: HowItWorksPhasesProps) {
  return (
    <section id="phases" className="relative bg-[#060607] py-20 lg:py-32 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Centered Header matching reference */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
          >
            Scale your business
            <br />
            in 3 simple steps<span className="text-[#FF5100]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-[#8A8A8E] leading-relaxed max-w-xl mx-auto"
          >
            Our methodical engineering process makes scaling predictable and repeatable.
            From diagnostic audit to bespoke architecture and autonomous team hand-off.
          </motion.p>
        </div>

        {/* Bento 3-Step Grid matching reference */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Top Row: 2 Cards Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 (Step 1): Copy on Top, Sphere Emerging from Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#121214] p-8 sm:p-10 min-h-[460px] shadow-2xl transition-all duration-300 hover:border-white/20"
            >
              {/* Copy on top */}
              <div className="space-y-3 z-10">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  The Diagnostic & Audit
                </h3>
                <p className="text-sm text-[#8A8A8E] leading-relaxed max-w-md">
                  Simply share your operational pain points and growth objectives. We run
                  a forensic audit across your software, workflows, and unit economics to
                  identify where revenue and momentum leak.
                </p>
              </div>

              {/* Sphere visual emerging from bottom */}
              <div className="relative -mx-10 -mb-10 mt-6 h-56 sm:h-64 w-[calc(100%+5rem)] overflow-hidden">
                <Image
                  src="/images/how-step1-sphere.jpg"
                  alt="Diagnostic audit sphere visual"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#121214]/80" />
              </div>
            </motion.div>

            {/* Card 2 (Step 2): Wave Visual on Top, Copy on Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#121214] p-8 sm:p-10 min-h-[460px] shadow-2xl transition-all duration-300 hover:border-white/20"
            >
              {/* Wave visual curving from top right */}
              <div className="relative -mx-10 -mt-10 mb-6 h-52 sm:h-56 w-[calc(100%+5rem)] overflow-hidden">
                <Image
                  src="/images/how-step2-wave.jpg"
                  alt="Architectural build wave visual"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121214]/80" />
              </div>

              {/* Copy on bottom */}
              <div className="space-y-3 z-10">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Architectural Build
                </h3>
                <p className="text-sm text-[#8A8A8E] leading-relaxed max-w-md">
                  Our engineering and brand practices build high-quality, bespoke software,
                  automated data pipelines, and executive identity tailored specifically to
                  your needs. No off-the-shelf compromises.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Wide Full-Width Card (Step 3) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="group relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#121214] p-8 sm:p-12 lg:p-14 min-h-[400px] shadow-2xl transition-all duration-300 hover:border-white/20"
          >
            {/* Left Content */}
            <div className="max-w-xl space-y-6 z-10 mb-8 md:mb-0">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  Autonomous Deployment & Scale
                </h3>
                <p className="text-sm sm:text-base text-[#8A8A8E] leading-relaxed">
                  We upskill your team, transfer 100% intellectual property ownership, and
                  embed standard operating playbooks until your leadership runs the new
                  infrastructure with total independence and confidence.
                </p>
              </div>

              {/* Pill Button matching reference */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-[#060607] shadow-xl transition-all duration-300 hover:bg-[#FF5100] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Start your growth plan</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Sculpture Visual */}
            <div className="relative h-64 sm:h-80 w-full md:w-1/2 overflow-hidden flex justify-end items-end">
              <div className="relative h-full w-full max-w-sm">
                <Image
                  src="/images/how-step3-structure.jpg"
                  alt="Autonomous scale structure visual"
                  fill
                  className="object-contain object-bottom md:object-right-bottom transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
