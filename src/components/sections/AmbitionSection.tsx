"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ObstacleItem } from "@/types";

const OBSTACLES: ObstacleItem[] = [
  { id: "01", title: "Limited visibility" },
  { id: "02", title: "A brand message that doesn't yet reflect the business" },
  { id: "03", title: "Manual operations that don't scale" },
  { id: "04", title: "A team without the skills to drive growth" },
  { id: "05", title: "Business documentation that isn't in order" },
];

export function AmbitionSection() {
  return (
    <section id="ambition" className="relative bg-[#F8F7F4] py-24 lg:py-32 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">


        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#060607] leading-[1.05]"
        >
          You know your business could be much more.
        </motion.h2>

        {/* 2-Column Editorial Grid */}
        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Empathy & Philosophical conviction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-10"
          >
            <p className="text-base sm:text-lg leading-relaxed text-[#2C2C2E]">
              Every business has a version of itself that exists in the founder&apos;s
              head long before it exists in the real world. Better, stronger,
              more respected, more profitable, and somehow easier to run. The
              vision is clear. Getting every part of the business to live up to
              it is the hard part.
            </p>

            <div className="border-l-2 border-[#FF5100] pl-6">
              <p className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-[#060607]">
                A business with real potential shouldn&apos;t stay small for lack
                of the right systems, skills, and structure.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Numbered friction list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col divide-y divide-[#060607]/10"
          >
            {OBSTACLES.map((obstacle) => (
              <div
                key={obstacle.id}
                className="group flex items-baseline gap-6 py-5 sm:py-6 transition-colors hover:bg-black/[0.02] px-2 rounded-lg"
              >
                <span className="shrink-0 text-sm font-semibold tracking-tight text-[#FF5100]">
                  {obstacle.id}
                </span>
                <span className="text-base sm:text-lg font-medium tracking-tight text-[#1A1A1C] group-hover:text-black transition-colors">
                  {obstacle.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
