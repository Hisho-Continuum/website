"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutFounderQuote() {
  return (
    <section className="relative bg-[#FAFAFA] py-16 lg:py-24 text-[#060607] border-t border-black/5">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Founder Portrait */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl shadow-xl border border-black/5 bg-[#EAEAEA]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
                alt="Founder & Practice Principal"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote & Signature */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug tracking-tight text-[#060607]">
              &ldquo;We believe business scaling should be{" "}
              <span className="text-[#FF5100]">rigorous, transparent</span>, and built on
              engineering truth. Our practice is dedicated to providing{" "}
              <span className="text-[#060607]">bespoke technology, brand authority</span>,
              and internal team capability so every founder realizes their full ambition.&rdquo;
            </p>

            <div className="pt-2 space-y-1">
              <h4 className="text-base font-black text-[#060607]">
                Kojo Mensah
              </h4>
              <p className="text-xs font-semibold text-[#8A8A8E] lowercase">
                founder & principal architect at hisho<span className="text-[#FF5100]">.</span>
              </p>
              {/* Handwritten signature stylistic font */}
              <div className="pt-2">
                <span className="font-serif italic text-2xl text-[#060607]/80 tracking-wider select-none">
                  K. Mensah
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
