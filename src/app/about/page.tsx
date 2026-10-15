"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStatementStats } from "@/components/sections/about/AboutStatementStats";
import { AboutMissionBanner } from "@/components/sections/about/AboutMissionBanner";
import { AboutFounderQuote } from "@/components/sections/about/AboutFounderQuote";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutFaq } from "@/components/sections/about/AboutFaq";
import { AboutCtaBanner } from "@/components/sections/about/AboutCtaBanner";
import { GrowthPlanModal } from "@/components/ui/GrowthPlanModal";

export default function AboutPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#060607] antialiased selection:bg-[#FF5100] selection:text-[#060607]">
      <Navbar onOpenPlan={() => setIsPlanModalOpen(true)} />
      <main className="flex flex-col">
        <AboutHero />
        <AboutStatementStats />
        <AboutMissionBanner />
        <AboutFounderQuote />
        <AboutTeam />
        <AboutFaq onOpenPlan={() => setIsPlanModalOpen(true)} />
        <AboutCtaBanner onOpenPlan={() => setIsPlanModalOpen(true)} />
      </main>
      <Footer />
      <GrowthPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </div>
  );
}
