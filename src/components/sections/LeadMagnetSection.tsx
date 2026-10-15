"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FieldGuideMockup } from "@/components/ui/FieldGuideMockup";
import { Button } from "@/components/ui/Button";

export function LeadMagnetSection() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setEmail("");
      }, 5000);
    }
  };

  return (
    <section id="resources" className="relative bg-[#060607] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2A2A2D] bg-[#0E0E10] p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Graphic: Book / Field Guide */}
            <div className="flex justify-center lg:col-span-5 lg:justify-start">
              <FieldGuideMockup />
            </div>

            {/* Right Form & Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >


              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAFAFA] leading-[1.08]">
                The Missing Pieces Between You and Your Breakthrough
              </h2>

              <p className="text-base sm:text-lg text-[#8A8A8E]">
                A short free guide.
              </p>

              {/* Email Form */}
              {sent ? (
                <div className="flex items-center gap-3 rounded-xl border border-[#FF5100]/30 bg-[#FF5100]/10 p-4 text-[#FAFAFA]">
                  <CheckCircle2 className="h-5 w-5 text-[#FF5100]" />
                  <span className="text-sm font-medium">
                    The guide has been dispatched to {email}. Check your inbox!
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4 pt-2">
                  <div className="w-full max-w-xl space-y-2">
                    <label
                      htmlFor="guide-email"
                      className="block text-xs font-semibold tracking-wide text-[#FAFAFA]/90"
                    >
                      Email address
                    </label>
                    <input
                      id="guide-email"
                      type="email"
                      required
                      placeholder="you@yourbusiness.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-[#2A2A2D] bg-[#161618] px-5 py-3.5 text-sm text-[#FAFAFA] placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-auto self-start inline-flex flex-row items-center gap-3 whitespace-nowrap font-bold px-7 py-3.5 shadow-lg shadow-black/50"
                  >
                    <span>Send me the guide</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}

              <p className="text-xs text-[#8A8A8E]">
                Guide delivery integration to be connected before launch.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
