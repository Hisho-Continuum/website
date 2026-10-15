"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    tag: "Software Architecture",
    title: "Web App & Design System Platform",
    category: "Custom ERP & Internal Portals",
    image: "/images/work-showcase-platform.jpg",
    description: "Custom management web infrastructure, modular component libraries, and automated project workflows.",
  },
  {
    id: "02",
    tag: "Brand & Analytics",
    title: "Executive Growth & Systems Dashboard",
    category: "Performance & Scaling Infrastructure",
    image: "/images/work-showcase-laptop.jpg",
    description: "Real-time telemetry, automated KPI tracking, and authoritative dark-mode executive software.",
  },
  {
    id: "03",
    tag: "Omnichannel Ops",
    title: "Commerce & Fulfillment Pipeline",
    category: "Automated Orders & Inventory",
    image: "/images/work-showcase-foodops.jpg",
    description: "End-to-end customer ordering interface, live delivery routing, and automated batch tracking.",
  },
];

interface WhatWeDoPillarsProps {
  onOpenPlan?: () => void;
}

export function WhatWeDoPillars({ onOpenPlan }: WhatWeDoPillarsProps) {
  return (
    <section id="work" className="relative bg-white py-20 lg:py-32 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Header Row matching reference layout: Pill badge, headline + subhead, and right pill button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex rounded-full border border-black/15 bg-black/5 px-4 py-1 text-xs font-semibold text-[#060607] lowercase">
              our work
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#060607]">
              Our Latest Work<span className="text-[#FF5100]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#6A6A6E] leading-relaxed pt-1">
              Our tailored solutions empower your business presence and operational architecture,
              ensuring growth and endurance in the digital landscape.
            </p>
          </div>

          {/* Right Action Button matching reference */}
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#060607] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#FF5100] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start your project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 3 Showcase Cards with Signature Notched Bottom-Right Circular Button */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex flex-col space-y-4"
            >
              {/* Card Container with exact notched corner and circular button */}
              <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-[2.4rem] bg-[#EAEAEA] shadow-lg border border-black/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={i === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Notched Corner Cutout with Floating Dark Circular Button leading to /contact */}
                <div className="absolute bottom-0 right-0 bg-white pt-2.5 pl-2.5 rounded-tl-[1.8rem] z-10 transition-transform duration-300">
                  <Link
                    href="/contact"
                    className="flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#060607] text-white shadow-xl transition-all duration-300 group-hover:bg-[#FF5100] group-hover:scale-105 cursor-pointer"
                    aria-label={`Inquire about ${project.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Card Meta Text */}
              <div className="px-2 space-y-1">
                <span className="text-[11px] font-bold tracking-wider text-[#FF5100] uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#060607]">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6A6A6E] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
