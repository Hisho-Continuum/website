"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const STRIP_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    alt: "hisho strategy team",
    className: "h-64 sm:h-80 w-full mt-4",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    alt: "Architectural modern headquarters",
    className: "h-52 sm:h-64 w-full mt-10",
  },
  {
    src: "/images/hero-growth-leader.jpg",
    alt: "Founder scaling business",
    className: "h-72 sm:h-96 w-full -mt-2",
  },
  {
    src: "/images/hero-growth-tower.jpg",
    alt: "Modern geometric tower",
    className: "h-52 sm:h-64 w-full mt-10",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    alt: "Operations partner",
    className: "h-64 sm:h-80 w-full mt-4",
  },
];

export function AboutHero() {
  return (
    <section className="relative bg-[#FAFAFA] pt-16 pb-12 sm:pt-24 sm:pb-16 text-[#060607] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#060607]">
            about hisho<span className="text-[#FF5100]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6A6A6E] font-medium">
            Helping ambitious businesses close the gap to what they are capable of becoming.
          </p>
        </motion.div>

        {/* Staggered 5-Card Image Strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-4 items-center">
          {STRIP_IMAGES.map((card, i) => (
            <motion.div
              key={card.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg border border-black/5 bg-[#E8E8E8] ${card.className} ${
                i === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
