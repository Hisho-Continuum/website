"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PlanStep } from "@/types";

const STEPS: PlanStep[] = [
  {
    number: "01",
    title: "Find the gap.",
    description: "We look at where you are and what's holding you back.",
  },
  {
    number: "02",
    title: "Bring it to life.",
    description:
      "We create the technology, tell your brand's story, and train your team.",
  },
  {
    number: "03",
    title: "Scale.",
    description:
      "You grow with the right systems, skills, and structure behind you.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-[#060607] py-24 lg:py-32 border-t border-white/5 text-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">


        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#FAFAFA] leading-[1.05]"
        >
          A clear path to your next stage.
        </motion.h2>

        {/* Continuous thin orange bridge line */}
        <div className="relative mt-16 mb-12 sm:mt-20">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] w-full origin-left bg-[#FF5100]"
          />
        </div>

        {/* 3 Step columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group flex flex-col space-y-4"
            >
              {/* Giant Orange Numeral */}
              <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[#FF5100] transition-transform duration-300 group-hover:-translate-y-1">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAFAFA]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm sm:text-base leading-relaxed text-[#8A8A8E]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
