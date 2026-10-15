"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

interface StoriesGridProps {
  onOpenPlan?: () => void;
}

export function StoriesGrid({ onOpenPlan }: StoriesGridProps) {
  return (
    <section className="relative bg-[#F9F7F4] py-20 lg:py-32 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Header matching reference */}
        <div className="max-w-3xl mb-14 lg:mb-20 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#8A8A8E] uppercase block">
            Partner Perspectives
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#060607] leading-[1.08]">
            Proven in production.
            <br />
            Hear directly from our clients<span className="text-[#FF5100]">.</span>
          </h2>
        </div>

        {/* 4-Card Showcase Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: White Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-[#EBE5DE] bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[470px]"
          >
            <div>
              {/* Circular Avatar */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E0D8D0] mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
                  alt="Patrick Nawrocki"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#2A2A2D]">
                &ldquo;The lovely team at hisho. has provided our startup with significant leverage.
                Their work is exceptionally professional, and Adrian is always attentive to our
                needs, taking the time to understand our briefs and offer valuable direction.
                Additionally, their turnaround times are impressively fast!&rdquo;
              </p>
            </div>

            {/* Signature & Author info */}
            <div className="pt-6 border-t border-[#F2ECE6] space-y-1">
              <div className="font-serif italic text-2xl text-[#1A1A1D] tracking-tight">
                Patrick Nawrocki
              </div>
              <p className="text-[11px] font-medium text-[#8A8A8E]">
                UX Manager at Superhabits
              </p>
            </div>
          </motion.div>

          {/* Card 2: Featured Full-Bleed Photo / Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] p-7 sm:p-8 shadow-lg min-h-[470px]"
          >
            {/* Background Portrait Photo */}
            <Image
              src="/images/stories-featured-partner.jpg"
              alt="Pri Patel at modern workspace"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-[0.9]"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />

            {/* Top-Left Avatar Badge */}
            <div className="relative z-10">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/40 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
                  alt="Pri Patel Avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Subtle Frosted Glass Play Button */}
            <div className="relative z-10 flex items-center justify-center my-auto py-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 border border-white/40 text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5100]">
                <Play className="h-5 w-5 fill-white translate-x-0.5" />
              </div>
            </div>

            {/* Bottom Signature & Role in White */}
            <div className="relative z-10 pt-4 border-t border-white/20 space-y-1">
              <div className="font-serif italic text-2xl text-white tracking-tight">
                Pri Patel
              </div>
              <p className="text-[11px] font-medium text-white/80">
                Product Designer at Lightdash
              </p>
            </div>
          </motion.div>

          {/* Card 3: White Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-[#EBE5DE] bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[470px]"
          >
            <div>
              {/* Circular Avatar */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E0D8D0] mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
                  alt="Rob West"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#2A2A2D]">
                &ldquo;hisho. has greatly exceeded our expectations. The communication is always
                excellent, the turnaround is extremely quick, and the custom systems they
                engineered are fresh, innovative, and spot on!&rdquo;
              </p>
            </div>

            {/* Signature & Author info */}
            <div className="pt-6 border-t border-[#F2ECE6] space-y-1">
              <div className="font-serif italic text-2xl text-[#1A1A1D] tracking-tight">
                Rob West
              </div>
              <p className="text-[11px] font-medium text-[#8A8A8E]">
                CEO of Kingdom Advisors
              </p>
            </div>
          </motion.div>

          {/* Card 4: White Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-[#EBE5DE] bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[470px]"
          >
            <div>
              {/* Circular Avatar */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E0D8D0] mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
                  alt="Dom Tyler"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#2A2A2D]">
                &ldquo;The operational leverage provided by hisho. is unmatched. We eliminated
                20+ hours of manual data reconciliation weekly, and our pipeline velocity doubled
                within our first 90 days.&rdquo;
              </p>
            </div>

            {/* Signature & Author info */}
            <div className="pt-6 border-t border-[#F2ECE6] space-y-1">
              <div className="font-serif italic text-2xl text-[#1A1A1D] tracking-tight">
                Dom Tyler
              </div>
              <p className="text-[11px] font-medium text-[#8A8A8E]">
                Managing Director at Meridian
              </p>
            </div>
          </motion.div>

        </div>

        {/* Closing Action */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#060607] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#FF5100] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Start your growth plan</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
