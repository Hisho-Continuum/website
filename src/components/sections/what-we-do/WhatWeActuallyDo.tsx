"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface WhatWeActuallyDoProps {
  onOpenPlan?: () => void;
}

const CARDS = [
  {
    id: "tech",
    title: "Technology Architecture",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "brand",
    title: "Brand Architecture",
    image: "/images/hero-growth-tower.jpg",
  },
  {
    id: "ops",
    title: "Operational Systems",
    image: "/images/consulting-session.png",
  },
  {
    id: "training",
    title: "Capability Training",
    image: "/images/hero-growth-leader.jpg",
  },
];

export function WhatWeActuallyDo({ onOpenPlan }: WhatWeActuallyDoProps) {
  return (
    <section id="pillars" className="relative bg-[#F9F7F4] py-20 lg:py-28 text-[#060607] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Big Impact Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#060607] leading-[1.05] max-w-4xl mx-auto uppercase">
          SYSTEMS THAT SCALE.
          <br />
          <span className="text-[#8E8A85]">CAPABILITY THAT LASTS.</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#555558] leading-relaxed">
          We engineer the custom technology, brand architecture, and operational systems
          that move your company from operational drag to exponential velocity.
        </p>

        {/* Center CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#FF5100] px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore capabilities</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>

        {/* Curved / Perspective Horizon Card Arc */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-end max-w-6xl mx-auto">
            {CARDS.map((card, i) => {
              // Perspective tilt and vertical offsets creating the signature curved arc from the reference
              const arcOffset =
                i === 0
                  ? "rotate-[-3deg] translate-y-3"
                  : i === 1
                  ? "rotate-[-1deg] -translate-y-2"
                  : i === 2
                  ? "rotate-[1deg] -translate-y-2"
                  : "rotate-[3deg] translate-y-3";

              return (
                <div
                  key={card.id}
                  className={`group relative flex flex-col transition-all duration-500 transform ${arcOffset} hover:scale-[1.03]`}
                >
                  <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-3xl border border-black/10 shadow-xl bg-[#EAEAEA]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
