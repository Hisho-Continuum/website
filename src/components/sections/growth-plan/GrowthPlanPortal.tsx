"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Building2, Terminal, Users2, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ArchitecturalGrid } from "@/components/ui/ArchitecturalGrid";

export function GrowthPlanPortal() {
  const [step, setStep] = React.useState(1);
  const [selectedFocus, setSelectedFocus] = React.useState<string[]>([]);
  const [stage, setStage] = React.useState("");
  const [timeline, setTimeline] = React.useState("");
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    context: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const toggleFocus = (item: string) => {
    setSelectedFocus((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-[90vh] bg-[#060607] py-16 lg:py-24 text-white overflow-hidden flex items-center">
      <ArchitecturalGrid columns={10} className="opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 lg:px-12">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-white/10 bg-[#121214] p-10 sm:p-14 text-center shadow-2xl space-y-6"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5100]/20 text-[#FF5100]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Growth Diagnostic Received<span className="text-[#FF5100]">.</span>
            </h2>
            <p className="mx-auto max-w-lg text-sm sm:text-base text-[#8A8A8E] leading-relaxed">
              Thank you, {formData.fullName || "Partner"}. A principal architect from our practice
              is reviewing your business parameters. We will respond to {formData.email || "your email"} with
              an initial architectural blueprint outline within 24 business hours.
            </p>
            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Return to homepage
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#0E0E10]/95 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
            {/* Header / Step Tracker */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#FF5100] uppercase">
                  DIAGNOSTIC INQUIRY // STEP {step} OF 3
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {step === 1 && "What is the primary constraint on your growth?"}
                  {step === 2 && "Scale parameters & timeline."}
                  {step === 3 && "Where should we send your growth architecture?"}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      s === step ? "w-8 bg-[#FF5100]" : s < step ? "w-2 bg-white" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Growth Frictions */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <p className="text-sm text-[#8A8A8E]">
                  Select all areas where your business is experiencing friction or outgrowing its infrastructure:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "tech", label: "Technology & Software", desc: "Outgrown off-the-shelf tools; need custom web infrastructure or internal platforms." },
                    { id: "brand", label: "Brand Architecture", desc: "Market perception lags behind true capability; need repositioning and high-tier authority." },
                    { id: "ops", label: "Operational Chaos", desc: "Manual bottlenecks, spreadsheet sprawl, and lack of repeatable execution playbooks." },
                    { id: "team", label: "Capability & Training", desc: "Need hands-on upskilling so departments run without founder dependency." },
                  ].map((item) => {
                    const isSelected = selectedFocus.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleFocus(item.id)}
                        className={`rounded-2xl border p-5 cursor-pointer transition-all ${
                          isSelected
                            ? "border-[#FF5100] bg-[#FF5100]/10 text-white"
                            : "border-white/10 bg-white/5 hover:border-white/20 text-[#FAFAFA]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-sm">{item.label}</h4>
                          <div
                            className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                              isSelected ? "border-[#FF5100] bg-[#FF5100]" : "border-white/30"
                            }`}
                          >
                            {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <p className="text-xs text-[#8A8A8E] leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-end">
                  <Button
                    variant="primary"
                    size="md"
                    withArrow
                    onClick={() => setStep(2)}
                    disabled={selectedFocus.length === 0}
                    className="text-xs font-bold px-6 py-3"
                  >
                    Continue to parameters
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Scale Parameters */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">
                    Current Annual Revenue Bracket
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["$250K - $1M", "$1M - $3M", "$3M - $10M", "$10M+"].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setStage(tier)}
                        className={`rounded-xl border py-3 px-3 text-xs font-semibold transition-all ${
                          stage === tier
                            ? "border-[#FF5100] bg-[#FF5100]/10 text-white"
                            : "border-white/10 bg-white/5 text-[#8A8A8E] hover:border-white/20"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">
                    Target Deployment Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "immediate", label: "Immediate (Next 30 Days)" },
                      { id: "quarter", label: "This Quarter (60-90 Days)" },
                      { id: "planning", label: "Strategic Planning" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTimeline(t.id)}
                        className={`rounded-xl border py-3 px-3 text-xs font-semibold transition-all ${
                          timeline === t.id
                            ? "border-[#FF5100] bg-[#FF5100]/10 text-white"
                            : "border-white/10 bg-white/5 text-[#8A8A8E] hover:border-white/20"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-[#8A8A8E] hover:text-white transition-colors cursor-pointer"
                  >
                    ← Back
                  </button>
                  <Button
                    variant="primary"
                    size="md"
                    withArrow
                    onClick={() => setStep(3)}
                    disabled={!stage || !timeline}
                    className="text-xs font-bold px-6 py-3"
                  >
                    Continue to contact details
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <form onSubmit={handleFinalSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#8A8A8E]">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Sterling"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#8A8A8E]">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#8A8A8E]">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Sterling Labs"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#8A8A8E]">Current Website</label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="sterlinglabs.com"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-medium text-[#8A8A8E]">
                    Specific growth ambitions or immediate hurdles (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.context}
                    onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                    placeholder="Tell us what stage you want to reach and what is in the way..."
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2 text-[11px] text-[#8A8A8E]">
                  <Shield className="h-4 w-4 text-[#FF5100]" />
                  <span>Strict confidentiality standard. We never share your data.</span>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-[#8A8A8E] hover:text-white transition-colors cursor-pointer"
                  >
                    ← Back
                  </button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    withArrow
                    className="text-xs font-bold px-8 py-3.5"
                  >
                    Submit growth diagnostic
                  </Button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
