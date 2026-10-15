"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote, ArrowRight } from "lucide-react";

export interface FounderStory {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  detail: string;
  image: string;
}

interface StoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStory?: FounderStory | null;
  onSelectStory?: (story: FounderStory) => void;
  stories: FounderStory[];
}

export function StoriesModal({
  isOpen,
  onClose,
  selectedStory,
  onSelectStory,
  stories,
}: StoriesModalProps) {
  const activeStory = selectedStory || stories[0];

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-[#2A2A2D] bg-[#0E0E10] p-6 sm:p-10 shadow-2xl text-[#FAFAFA]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full p-2 text-[#8A8A8E] hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              aria-label="Close stories modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              {/* Founder Image & Bio */}
              <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative h-60 w-60 sm:h-72 sm:w-72 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <Image
                    src={activeStory.image}
                    alt={activeStory.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#FF5100] px-3 py-1 text-[11px] font-bold text-[#060607]">
                    {activeStory.industry}
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-black text-white">
                    {activeStory.name}
                  </h4>
                  <p className="text-sm text-[#8A8A8E]">
                    {activeStory.role}, {activeStory.company}
                  </p>
                </div>
              </div>

              {/* Founder Quote & Transformation */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-[#FF5100]" />
                  <blockquote className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-[#FAFAFA]">
                    &ldquo;{activeStory.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm leading-relaxed text-[#8A8A8E] pt-2">
                    {activeStory.detail}
                  </p>
                </div>

                {/* Switcher selector */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8E] mb-3">
                    More Founder Breakthroughs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stories.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => onSelectStory?.(s)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                          activeStory.id === s.id
                            ? "bg-white text-black"
                            : "bg-[#18181B] text-[#8A8A8E] hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
