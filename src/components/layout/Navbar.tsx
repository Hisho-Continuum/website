"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { NavItem } from "@/types";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "What we do", href: "/what-we-do" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  onOpenPlan?: () => void;
}

export function Navbar({ onOpenPlan }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b border-[#2A2A2D]/80 bg-[#060607] transition-all duration-300 ${
          scrolled ? "py-4 shadow-lg shadow-black/30" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="text-3xl sm:text-4xl font-black tracking-tighter text-white transition-opacity hover:opacity-85 select-none lowercase"
          >
            hisho<span className="text-[#FF5100]">.</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold tracking-tight transition-colors ${
                    isActive
                      ? "text-[#FF5100]"
                      : "text-[#FAFAFA]/75 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action button leading directly to /contact */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5100] px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get your growth plan</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-lg p-2 text-[#FAFAFA] hover:bg-white/5 md:hidden cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
        onOpenPlan={onOpenPlan}
      />
    </>
  );
}
