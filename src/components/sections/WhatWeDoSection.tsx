"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TheGapBridge } from "@/components/ui/TheGapBridge";

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="relative bg-[#060607] py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">


        {/* Headline & intro */}
        <div className="max-w-3xl space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#FAFAFA] leading-[1.05]"
          >
            Growth doesn&apos;t happen by accident.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg leading-relaxed text-[#FAFAFA]/75"
          >
            It happens when the right technology, a brand people remember, and a
            team equipped to run both come together. That&apos;s what we build,
            and what we teach.
          </motion.p>
        </div>

        {/* 4 Offerings Layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 01 - Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl border border-[#2A2A2D] bg-[#121214] p-8 sm:p-10 hover:border-white/20 transition-all duration-300"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#FF5100]">
                01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAFAFA]">
                Technology
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#8A8A8E]">
                Digital tools that carry the load, so your business has room to
                grow.
              </p>
            </div>
            <TheGapBridge className="mt-10" />
          </motion.div>

          {/* Card 02 - Brand and messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-[#2A2A2D] bg-[#121214] p-8 sm:p-10 hover:border-white/20 transition-all duration-300"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#FF5100]">
                02
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAFAFA]">
                Brand and messaging
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#8A8A8E]">
                A story that reflects who you are and gives people a reason to
                remember you.
              </p>
            </div>
            <div className="mt-10 border-t border-white/5 pt-4">
              <p className="text-xs font-medium tracking-wide text-[#8A8A8E]">
                Positioning • Visual Identity • Core Narrative
              </p>
            </div>
          </motion.div>

          {/* Card 03 - Systems and operations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-between rounded-3xl border border-[#2A2A2D] bg-[#121214] p-8 sm:p-10 hover:border-white/20 transition-all duration-300"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#FF5100]">
                03
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAFAFA]">
                Systems and operations
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#8A8A8E]">
                Structure that scales, including the details that keep it
                compliant.
              </p>
            </div>
            <div className="mt-10 border-t border-white/5 pt-4">
              <p className="text-xs font-medium tracking-wide text-[#8A8A8E]">
                Workflow Automation • Compliance Architecture • Repeatable Ops
              </p>
            </div>
          </motion.div>

          {/* Card 04 - Consulting and training (with embedded image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 rounded-3xl border border-[#2A2A2D] bg-[#121214] p-6 sm:p-8 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-full sm:w-1/2 overflow-hidden rounded-2xl border border-white/10 shrink-0">
              <Image
                src="/images/consulting-session.png"
                alt="Creative consulting and executive training"
                width={360}
                height={260}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="w-full sm:w-1/2 space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#FF5100]">
                04
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAFAFA]">
                Consulting and training
              </h3>
              <p className="text-sm leading-relaxed text-[#8A8A8E]">
                Practical expertise that builds capability and a team ready to
                move forward.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
