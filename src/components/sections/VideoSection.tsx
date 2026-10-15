"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

export function VideoSection() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <section
        id="overview"
        className="relative bg-[#F4E8DC] py-24 lg:py-32 text-[#060607] overflow-hidden"
      >
        {/* Subtle architectural vertical lines in background */}
        <div className="pointer-events-none absolute inset-0 flex justify-between px-6 lg:px-12 opacity-15">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-[#FF5100]" />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">


          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#060607] leading-[1.08]"
            >
              What we build, and how it works in your business.
            </motion.h2>
          </div>

          {/* Walkthrough Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-[2.2rem] border border-[#2D2622] bg-[#0E0C0A] shadow-2xl"
          >
            <div className="relative aspect-[16/9] max-h-[520px] w-full overflow-hidden">
              <Image
                src="/images/hero-team.png"
                alt="HISHO system walkthrough preview"
                fill
                className="object-cover opacity-30 filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/60 to-transparent" />

              {/* Center Play Button & Lowercase Duration Pill */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3.5">
                <button
                  onClick={() => setModalOpen(true)}
                  aria-label="Play system walkthrough"
                  className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white text-[#060607] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#FF5100] hover:text-white cursor-pointer"
                >
                  <Play className="ml-1 h-8 w-8 sm:h-9 sm:w-9 fill-current" />
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/15 text-xs font-medium text-white/90 lowercase transition-all hover:bg-black/90 hover:border-[#FF5100]/50 cursor-pointer select-none"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5100]" />
                  <span>2 mins walkthrough</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Walkthrough Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="HISHO Systems & Operations Walkthrough"
        duration="2:10"
      />
    </>
  );
}
