"use client";

import * as React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "youtube" },
  { name: "facebook" },
  { name: "google" },
  { name: "webflow" },
  { name: "discord" },
  { name: "spotify" },
];

export function PartnersSection() {
  return (
    <section className="relative border-y border-[#E8DEC8]/50 bg-[#F5EFEB] py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-18 lg:justify-between"
        >
          {PARTNERS.map((partner) => (
            <span
              key={partner.name}
              className="text-2xl sm:text-3xl lg:text-4xl font-black lowercase tracking-tight text-[#B8B2AA] transition-colors duration-300 hover:text-[#060607] select-none"
            >
              {partner.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
