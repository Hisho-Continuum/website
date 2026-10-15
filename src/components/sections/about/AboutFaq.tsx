"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AboutFaqProps {
  onOpenPlan?: () => void;
}

const FAQS = [
  {
    q: "How does hisho work with our internal team?",
    a: "We do not work as detached advisors. We embed directly with your leadership and department heads, designing the systems side-by-side and training your staff during live execution until they operate everything with complete autonomy.",
  },
  {
    q: "Who owns the custom technology and intellectual property?",
    a: "You do. 100%. We believe businesses must own their core technology and operating systems. All code repositories, digital portals, brand assets, and standard operating procedures belong exclusively to your firm.",
  },
  {
    q: "How long does a full diagnostic and build take?",
    a: "Most engagements run in structured 90-day cycles: Phase 1 Diagnostic (Weeks 1-3), Phase 2 Architecture & Build (Weeks 4-10), and Phase 3 Deployment & Capability Hand-off (Weeks 11-14).",
  },
  {
    q: "What kind of businesses are the right fit for hisho?",
    a: "We work with small-to-mid-sized business owners and brands with proven product-market traction who have hit an operational or perception ceiling and are ready to scale to the next echelon.",
  },
  {
    q: "What happens after the autonomous capability hand-off?",
    a: "Unlike traditional agencies that trap you in costly retainers, our goal is your complete independence. We offer optional quarterly executive governance audits, but your team runs daily operations 100% on their own.",
  },
];

export function AboutFaq({ onOpenPlan }: AboutFaqProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-[#FAFAFA] py-16 lg:py-24 text-[#060607] border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#060607]">
                FAQ&apos;s<span className="text-[#FF5100]">.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6A6A6E] leading-relaxed">
                Clear answers regarding our methodology, technical scope, intellectual
                property, and operational deployment.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-[#F4F4F4] p-6 sm:p-8 space-y-4">
              <h4 className="text-base font-bold text-[#060607]">
                Still Have A Question?
              </h4>
              <p className="text-xs sm:text-sm text-[#6A6A6E] leading-relaxed">
                Every partnership begins with an honest diagnostic conversation with our practice principals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#060607] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#FF5100] cursor-pointer"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 divide-y divide-black/10">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="py-5">
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-[#060607] hover:text-[#FF5100] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#8A8A8E]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-xs sm:text-sm leading-relaxed text-[#555558]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
