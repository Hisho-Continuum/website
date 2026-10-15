"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { NavItem } from "@/types";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  onOpenPlan?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  onOpenPlan,
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#060607]/98 px-6 py-6 md:hidden backdrop-blur-xl"
        >
          {/* Header row */}
          <div className="flex items-center justify-between pb-8 border-b border-[#2A2A2D]">
            <Link
              href="/"
              onClick={onClose}
              className="text-3xl font-black tracking-tighter text-white lowercase"
            >
              hisho<span className="text-[#FF5100]">.</span>
            </Link>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-[#FAFAFA] hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-6 py-8">
            {items.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`text-2xl font-bold tracking-tight transition-colors ${
                    isActive ? "text-[#FF5100]" : "text-[#FAFAFA] hover:text-[#FF5100]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="mt-auto pb-8">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between w-full rounded-full bg-[#FF5100] px-6 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-[#E04800] active:scale-95"
            >
              <span>Get your growth plan</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
