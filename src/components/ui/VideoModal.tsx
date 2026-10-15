"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, Maximize2 } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  duration?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  title = "How HISHO Scales Real Businesses",
  duration = "2:14",
}: VideoModalProps) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(28);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-[#2A2A2D] bg-[#0E0E10] shadow-2xl"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#121214]">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#FF5100] animate-pulse" />
                <span className="text-sm font-bold tracking-tight text-white">
                  {title}
                </span>
                <span className="text-xs text-[#8A8A8E]">• System Overview</span>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-[#8A8A8E] hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player Canvas Simulation */}
            <div className="relative aspect-video w-full bg-[#060607] flex items-center justify-center overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5100]/10 via-transparent to-white/5 opacity-60" />

              {/* Architectural Grid in Player */}
              <div className="absolute inset-0 architectural-grid-lines opacity-20 pointer-events-none" />

              {/* Active Scene Simulation */}
              <div className="relative z-10 text-center max-w-md px-6 space-y-4">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  From Operational Drag to Automated Growth
                </h4>
                <p className="text-xs sm:text-sm text-[#8A8A8E]">
                  Demonstrating custom software architecture and human capability training in real time.
                </p>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black hover:bg-[#FF5100] hover:text-white transition-colors"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>{isPlaying ? "Pause Stream" : "Resume Playback"}</span>
                </button>
              </div>

              {/* Bottom Custom Playback Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 space-y-2">
                {/* Progress bar */}
                <div
                  className="h-1 w-full bg-white/20 rounded-full cursor-pointer relative"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress(Math.round((clickX / rect.width) * 100));
                  }}
                >
                  <div
                    className="h-full bg-[#FF5100] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#8A8A8E] pt-1">
                  <span>0:38 / {duration}</span>
                  <div className="flex items-center gap-4">
                    <Volume2 className="h-4 w-4 hover:text-white cursor-pointer" />
                    <Maximize2 className="h-4 w-4 hover:text-white cursor-pointer" />
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
