"use client";

import * as React from "react";
import { motion } from "framer-motion";

const METRICS = [
  { value: "3.8x", label: "Average Scale Velocity", sub: "Revenue expansion across partner clients" },
  { value: "80%", label: "Manual Drag Eliminated", sub: "Automated through custom operational software" },
  { value: "90 Days", label: "Autonomous Capability Hand-off", sub: "Team runs new systems with zero dependency" },
  { value: "100%", label: "Bespoke System Ownership", sub: "Clients retain 100% intellectual property" },
];

export function StoriesMetrics() {
  return (
    <section className="relative border-y border-[#E8DEC8]/60 bg-[#F5EFEB] py-16 lg:py-20 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-2 border-l-2 border-[#FF5100] pl-5"
            >
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#060607]">
                {metric.value}
              </span>
              <p className="text-sm font-bold text-[#060607]">
                {metric.label}
              </p>
              <p className="text-xs text-[#7A7570] leading-relaxed">
                {metric.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
