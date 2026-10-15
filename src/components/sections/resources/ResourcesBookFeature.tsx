"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ResourcesBookFeature() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative bg-[#0E0E10] py-24 lg:py-32 text-white border-t border-[#2A2A2D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Book Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] select-none transition-all duration-500 hover:-translate-y-2">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[#FF5100]/20 blur-3xl opacity-70" />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[-16px_20px_50px_rgba(0,0,0,0.8),0_20px_60px_rgba(0,0,0,0.9)]">
                <Image
                  src="/images/field-guide-cover.jpg"
                  alt="The Missing Pieces Book Cover"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Editorial & Download Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF5100]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>OFFICIAL PUBLICATION // VOL. 01</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              The Missing Pieces: Between You and Your Breakthrough
            </h2>

            <p className="text-base sm:text-lg text-[#8A8A8E] leading-relaxed">
              A comprehensive field manual for founders whose ambition exceeds their
              current operational architecture. Contains zero generic motivation, only
              tactical blueprints, diagnostic matrices, and execution frameworks.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "The 5 friction points where fast-growing businesses quietly stall",
                "How to replace chaotic founder hustle with automated workflows",
                "The architecture of high-tier brand perception and authority",
                "The team upskilling protocol for autonomous department leadership",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#FAFAFA]/90">
                  <Check className="h-4 w-4 shrink-0 text-[#FF5100]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Email Download Form */}
            <div className="pt-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-[#FF5100]/40 bg-[#FF5100]/10 p-6 text-center"
                >
                  <p className="text-sm font-bold text-white">
                    Field Guide dispatched. Check your inbox shortly.
                  </p>
                  <p className="text-xs text-[#8A8A8E] mt-1">
                    Sent to {email}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-[#8A8A8E] focus:border-[#FF5100] focus:outline-none"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="shrink-0 text-xs font-bold py-3.5 px-6 whitespace-nowrap"
                  >
                    <span>Download digital edition</span>
                    <Download className="ml-1.5 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
