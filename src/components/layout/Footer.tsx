import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2D] bg-[#060607] pt-20 pb-12 text-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Status & Headline Banner */}
        <div className="flex justify-end pb-8 border-b border-white/5">
          <a
            href="#ambition"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-[#FF5100] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 py-16 border-b border-white/5">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white transition-opacity hover:opacity-85 lowercase inline-block"
            >
              hisho<span className="text-[#FF5100]">.</span>
            </Link>

            <p className="text-sm leading-relaxed text-[#8A8A8E] max-w-sm">
              We build the technology, brand, and operating systems that close
              the gap between what a business is today and what it is capable of becoming.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Offerings */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase">
                What We Build
              </h5>
              <ul className="space-y-2.5 text-xs text-[#8A8A8E]">
                <li>
                  <Link href="/what-we-do" className="hover:text-white transition-colors">
                    Technology & Software
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-white transition-colors">
                    Brand & Market Voice
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-white transition-colors">
                    Operations & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-white transition-colors">
                    Consulting & Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-[#FF5100] transition-colors">
                    Training for Institutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Approach */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase">
                Approach
              </h5>
              <ul className="space-y-2.5 text-xs text-[#8A8A8E]">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About hisho
                  </Link>
                </li>
                <li>
                  <Link href="/#ambition" className="hover:text-white transition-colors">
                    The Ambition
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white transition-colors">
                    The 3-Step Plan
                  </Link>
                </li>
                <li>
                  <Link href="/#overview" className="hover:text-white transition-colors">
                    System Overview
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-white transition-colors">
                    Founder Stories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Engagement */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase">
                Engagement
              </h5>
              <ul className="space-y-2.5 text-xs text-[#8A8A8E]">
                <li>
                  <span className="text-white font-medium">Direct Inquiries:</span>
                  <p className="mt-1 text-[#8A8A8E]">growth@hisho.com</p>
                </li>
                <li className="pt-2">
                  <span className="text-white font-medium">Practice Scope:</span>
                  <p className="mt-1 text-[#8A8A8E]">Operating globally with partner founders & brands</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-[#8A8A8E] sm:flex-row sm:items-center">
          <p>© 2026 hisho<span className="text-[#FF5100]">.</span> All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Notice
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Engagement
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
