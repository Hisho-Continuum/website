"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface GrowthPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GrowthPlanModal({ isOpen, onClose }: GrowthPlanModalProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    growthArea: "Technology & Systems",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // auto reset after 4s
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 500);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-[#2A2A2D] bg-[#0E0E10] p-6 sm:p-8 shadow-2xl text-[#FAFAFA]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 text-[#8A8A8E] hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                <CheckCircle2 className="h-14 w-14 text-[#FF5100]" />
                <h3 className="text-2xl font-bold tracking-tight">
                  Growth Plan Initiated
                </h3>
                <p className="text-sm text-[#8A8A8E] max-w-sm">
                  Thank you, {formData.name || "partner"}. Our partners are reviewing your inquiry. We will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#FF5100]">
                    Direct Engagement
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Get your growth plan
                  </h3>
                  <p className="text-xs text-[#8A8A8E]">
                    Tell us where your business stands today and where you want to go.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#FAFAFA]/80 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#2A2A2D] bg-[#161618] px-4 py-2.5 text-sm text-[#FAFAFA] placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#FAFAFA]/80 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@yourcompany.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#2A2A2D] bg-[#161618] px-4 py-2.5 text-sm text-[#FAFAFA] placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#FAFAFA]/80 mb-1.5">
                      Business or Brand Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Co."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#2A2A2D] bg-[#161618] px-4 py-2.5 text-sm text-[#FAFAFA] placeholder-[#8A8A8E]/60 focus:border-[#FF5100] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#FAFAFA]/80 mb-1.5">
                      Primary Focus Area
                    </label>
                    <select
                      value={formData.growthArea}
                      onChange={(e) =>
                        setFormData({ ...formData, growthArea: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#2A2A2D] bg-[#161618] px-4 py-2.5 text-sm text-[#FAFAFA] focus:border-[#FF5100] focus:outline-none transition-colors"
                    >
                      <option value="Technology & Systems">
                        01 / Technology & Architecture
                      </option>
                      <option value="Brand & Messaging">
                        02 / Brand & Market Position
                      </option>
                      <option value="Operations & Compliance">
                        03 / Systems & Scaling Operations
                      </option>
                      <option value="Consulting & Capability">
                        04 / Consulting & Team Training
                      </option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="orange"
                      className="w-full py-3 text-sm font-semibold tracking-tight justify-center"
                    >
                      <span>Request Growth Plan</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
