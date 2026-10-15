"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MISSION_SLIDES = [
  {
    tag: "Our Mission",
    statement: "To close the gap between what a business is today and what it is capable of becoming, through custom engineering, authoritative brand architecture, and team upskilling.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    tag: "Our Standard",
    statement: "No artificial retainers or superficial slide decks. We engineer systems that clients own 100% and train internal teams to execute with complete autonomy.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
];

export function AboutMissionBanner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const prev = () => setCurrentSlide((s) => (s === 0 ? MISSION_SLIDES.length - 1 : s - 1));
  const next = () => setCurrentSlide((s) => (s === MISSION_SLIDES.length - 1 ? 0 : s + 1));

  const slide = MISSION_SLIDES[currentSlide];

  return (
    <section className="relative bg-[#FAFAFA] pb-20 lg:pb-28 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[500px] w-full overflow-hidden rounded-3xl shadow-xl border border-black/5"
        >
          <Image
            src={slide.image}
            alt={slide.tag}
            fill
            priority
            className="object-cover filter brightness-[0.75] transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Bottom Overlay Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-white">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#FF5100] uppercase">
                {slide.tag}
              </span>
              <p className="text-lg sm:text-2xl font-bold leading-snug">
                {slide.statement}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all hover:bg-white hover:text-black cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all hover:bg-white hover:text-black cursor-pointer"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
