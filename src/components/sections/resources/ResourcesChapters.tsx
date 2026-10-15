"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const CHAPTERS = [
  {
    num: "01",
    title: "The Anatomy of the Scale Gap",
    desc: "Why businesses that succeed in the early stages hit an invisible ceiling when trying to scale past their initial capacity.",
    pages: "Pages 12 - 44",
  },
  {
    num: "02",
    title: "Systems Over Slides",
    desc: "The critical failure mode of traditional consulting, and why bespoke software infrastructure beats slide decks every time.",
    pages: "Pages 45 - 88",
  },
  {
    num: "03",
    title: "The Brand Valuation Multiplier",
    desc: "Transforming market perception so high-tier clients and enterprise buyers recognize your business as the obvious authority.",
    pages: "Pages 89 - 126",
  },
  {
    num: "04",
    title: "Autonomous Team Engineering",
    desc: "How to train department heads and team members to govern operational hand-offs without constant executive intervention.",
    pages: "Pages 127 - 164",
  },
];

export function ResourcesChapters() {
  return (
    <section className="relative bg-[#F8F7F4] py-24 lg:py-32 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#060607] leading-[1.08]">
            Inside the manual.
          </h2>
          <p className="mt-4 text-base text-[#555558] leading-relaxed">
            Detailed chapters engineered to guide founders through each stage of operational transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHAPTERS.map((ch, i) => (
            <motion.div
              key={ch.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-[#E0D8D0] bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between border-b border-[#E0D8D0] pb-4 mb-5">
                <span className="text-3xl font-black text-[#FF5100]">
                  {ch.num}
                </span>
                <span className="text-xs font-medium text-[#8A8A8E]">
                  {ch.pages}
                </span>
              </div>
              <h4 className="text-xl font-bold tracking-tight text-[#060607] mb-2">
                {ch.title}
              </h4>
              <p className="text-sm text-[#555558] leading-relaxed">
                {ch.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
