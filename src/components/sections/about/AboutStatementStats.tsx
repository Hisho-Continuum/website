"use client";

import * as React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    num: "3.8x",
    label: "Growth Velocity",
    desc: "Average revenue scale multiplier achieved by client partners.",
  },
  {
    num: "80%+",
    label: "Manual Drag Eliminated",
    desc: "Automated via bespoke software architecture and connected pipelines.",
  },
  {
    num: "100+",
    label: "Deployments Delivered",
    desc: "Production software engines, brand systems, and operational SOPs.",
  },
  {
    num: "90 Days",
    label: "Autonomous Hand-off",
    desc: "Target timeline for full departmental upskilling and independence.",
  },
];

export function AboutStatementStats() {
  return (
    <section className="relative bg-[#FAFAFA] py-16 lg:py-24 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Core Statement */}
        <div className="max-w-4xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#FF5100] uppercase">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#060607] leading-[1.15]">
            We help ambitious businesses build modern technology, authoritative brands,
            and operational systems designed for sustainable growth and long-term enterprise value.
          </h2>
        </div>

        {/* 4 Stat Cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-black/5 bg-[#F4F4F4] p-6 sm:p-8 space-y-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#060607]">
                {stat.num}
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#060607]">
                {stat.label}
              </p>
              <p className="text-xs text-[#6A6A6E] leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
