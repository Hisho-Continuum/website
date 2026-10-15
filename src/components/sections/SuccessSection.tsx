"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function SuccessSection() {
  return (
    <section className="relative bg-[#060607] py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">


        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#FAFAFA] leading-[1.05]"
        >
          The business that once existed only in your imagination is real.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-3xl text-base sm:text-lg leading-relaxed text-[#FAFAFA]/75"
        >
          Technology that carries the load, a brand people remember, and a team
          that runs it with confidence. Ready for the next stage, whatever that
          stage is.
        </motion.p>

      </div>
    </section>
  );
}
