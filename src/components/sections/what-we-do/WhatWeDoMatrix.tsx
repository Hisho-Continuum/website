"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WhatWeDoMatrixProps {
  onOpenPlan?: () => void;
}

const COMPARISON = [
  {
    dimension: "Technology",
    conventional: "Disconnected SaaS tools and manual spreadsheets that crash at scale.",
    hisho: "Unified custom platform tailored to your workflow with 100% data ownership.",
  },
  {
    dimension: "Brand & Voice",
    conventional: "Inconsistent visual assets that make a 7-figure firm look like an amateur.",
    hisho: "Enterprise-grade positioning and design system commanding authority.",
  },
  {
    dimension: "Operations",
    conventional: "Founder acts as the human router for every decision and status update.",
    hisho: "Automated standard operating procedures running with autonomous team accountability.",
  },
  {
    dimension: "Capability",
    conventional: "Static slide presentations that gather dust once the consultants leave.",
    hisho: "Side-by-side team execution sprints and hands-on governance playbooks.",
  },
];

export function WhatWeDoMatrix({ onOpenPlan }: WhatWeDoMatrixProps) {
  return (
    <section className="relative bg-[#F5EFEB] py-24 lg:py-32 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#060607] leading-[1.08]">
            The difference between patching and engineering.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555558] leading-relaxed">
            Most businesses try to grow by piling more human effort onto fragile foundations.
            We replace fragility with architectural clarity.
          </p>
        </div>

        {/* Matrix Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-[#E0D8D0] bg-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E0D8D0] bg-[#FAF8F5] text-xs font-bold uppercase tracking-wider text-[#8A8A8E] p-4 sm:p-6">
            <div className="md:col-span-3">Dimension</div>
            <div className="md:col-span-4 text-[#8A8A8E]">Conventional Growth</div>
            <div className="md:col-span-5 text-[#060607]">The hisho Build</div>
          </div>

          <div className="divide-y divide-[#E0D8D0]">
            {COMPARISON.map((row, i) => (
              <motion.div
                key={row.dimension}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 items-start hover:bg-[#FDFCFB] transition-colors"
              >
                <div className="md:col-span-3 font-extrabold text-base text-[#060607]">
                  {row.dimension}
                </div>
                <div className="md:col-span-4 text-sm text-[#707074] leading-relaxed">
                  {row.conventional}
                </div>
                <div className="md:col-span-5 text-sm font-semibold text-[#060607] leading-relaxed flex items-start gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF5100] mt-1.5 shrink-0" />
                  <span>{row.hisho}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#060607] p-8 sm:p-10 text-white shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Ready to see what your business is capable of?
            </h3>
            <p className="mt-1 text-sm text-[#8A8A8E]">
              We evaluate your current stage and architect a tailored roadmap.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF5100] px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <span>Get your growth plan</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
