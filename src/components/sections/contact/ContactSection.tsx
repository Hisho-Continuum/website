"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section className="relative bg-[#F9F7F4] py-20 lg:py-28 text-[#060607] min-h-[85vh] flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Copy & Details matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#060607] leading-[1.06]">
                Get in touch
                <br />
                with us<span className="text-[#FF5100]">.</span>
              </h1>
              <p className="text-sm sm:text-base text-[#6A6A6E] leading-relaxed max-w-md">
                We&apos;re here to help. Whether you have an early idea to examine, need assistance
                with your operational architecture, or want to explore an engagement, our team is
                ready to assist you.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#8A8A8E] uppercase tracking-wider block">
                  Email
                </span>
                <a
                  href="mailto:hello@hisho.co"
                  className="text-lg sm:text-xl font-bold text-[#060607] hover:text-[#FF5100] transition-colors"
                >
                  hello@hisho.co
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#8A8A8E] uppercase tracking-wider block">
                  Phone
                </span>
                <div className="text-lg sm:text-xl font-bold text-[#060607]">
                  +1 (555) 234 5678
                </div>
                <p className="text-xs text-[#8A8A8E]">
                  Available Monday to Friday, 9 AM - 6 PM EST
                </p>
              </div>
            </div>

            {/* Live Chat Action Pill */}
            <div className="pt-2">
              <a
                href="mailto:hello@hisho.co?subject=Live%20Inquiry"
                className="inline-flex items-center gap-3 rounded-full bg-[#060607] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#FF5100] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Direct Inquiry</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean White Form Card matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[2.4rem] bg-white border border-[#EAE4DC] p-8 sm:p-12 lg:p-14 shadow-xl shadow-black/[0.02]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5100]/10 text-[#FF5100]">
                    <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#060607]">
                    Message sent successfully
                  </h3>
                  <p className="text-sm text-[#6A6A6E] max-w-sm mx-auto">
                    Thank you for reaching out. Our engineering team reviews incoming inquiries daily
                    and will be in touch within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ firstName: "", lastName: "", email: "", message: "" });
                      }}
                      className="text-xs font-bold text-[#FF5100] underline underline-offset-4 hover:opacity-80 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#060607] block">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Enter your first name..."
                        className="w-full rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] px-5 py-3.5 text-sm text-[#060607] placeholder:text-[#A0A0A5] focus:bg-white focus:border-[#FF5100] focus:ring-1 focus:ring-[#FF5100] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#060607] block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Enter your last name..."
                        className="w-full rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] px-5 py-3.5 text-sm text-[#060607] placeholder:text-[#A0A0A5] focus:bg-white focus:border-[#FF5100] focus:ring-1 focus:ring-[#FF5100] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#060607] block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address..."
                      className="w-full rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] px-5 py-3.5 text-sm text-[#060607] placeholder:text-[#A0A0A5] focus:bg-white focus:border-[#FF5100] focus:ring-1 focus:ring-[#FF5100] outline-none transition-all"
                    />
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#060607] block">
                      How can we help you?
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your message..."
                      className="w-full rounded-2xl border border-[#E5E0D8] bg-[#FAF8F5] p-5 text-sm text-[#060607] placeholder:text-[#A0A0A5] focus:bg-white focus:border-[#FF5100] focus:ring-1 focus:ring-[#FF5100] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button aligned right matching reference */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 rounded-full bg-[#060607] px-8 py-4 text-xs sm:text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#FF5100] hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
