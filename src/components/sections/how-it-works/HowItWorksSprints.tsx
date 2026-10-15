"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Code2, ShieldCheck } from "lucide-react";

interface StepItem {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

const STEPS: StepItem[] = [
  {
    icon: Search,
    iconBg: "bg-[#FFF4EC] border-[#FFDEC9]",
    iconColor: "text-[#FF5100]",
    title: "Forensic Operational Audit",
    desc: "We analyze your tech stack, manual bottlenecks, and unit economics to pinpoint where momentum and revenue are capped.",
  },
  {
    icon: Code2,
    iconBg: "bg-[#F4F4F6] border-[#E5E5E8]",
    iconColor: "text-[#060607]",
    title: "Bespoke System Engineering",
    desc: "Custom web software, automated workflow pipelines, and enterprise brand authority engineered specifically for your operations.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-[#060607] border-[#060607]",
    iconColor: "text-white",
    title: "Autonomous Hand-Off & Scale",
    desc: "We train your team, transfer 100% intellectual property, and embed living SOPs so you scale without ongoing agency reliance.",
  },
];

export function HowItWorksSprints() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section className="relative bg-white py-24 lg:py-32 text-[#060607] border-t border-[#EFECE8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#060607]">
            How it works<span className="text-[#FF5100]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6A6A6E] leading-relaxed">
            No confusion, generic templates, or delays. Just fast and reliable engineering.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square overflow-hidden rounded-[2.2rem] border border-[#E9E3DC] shadow-xl">
              <Image
                src="/images/how-process-founder.jpg"
                alt="Executive founder at modern workspace"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Step Flow with Connecting Line (NO numbers, NO timelines) */}
          <div className="lg:col-span-6 relative">
            <div className="relative pl-6 sm:pl-8 space-y-10">
              
              {/* Vertical Connecting Line */}
              <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-[#E9E3DC]" />

              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.title}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="relative flex items-start gap-4 sm:gap-6 group cursor-pointer"
                  >
                    {/* Active indicator bar on vertical line */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-1 h-12 w-1 rounded-r transition-all duration-300 ${
                        isActive ? "bg-[#FF5100]" : "bg-transparent"
                      }`}
                    />

                    {/* Icon Container Badge */}
                    <div
                      className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        step.iconBg
                      } ${isActive ? "scale-110 shadow-md ring-2 ring-[#FF5100]/20" : ""}`}
                    >
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${step.iconColor}`} />
                    </div>

                    {/* Step Text Details (No numbers, no timelines) */}
                    <div className="space-y-1.5 pt-1">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#060607] group-hover:text-[#FF5100] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6A6A6E] leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
