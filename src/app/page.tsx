"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { AmbitionSection } from "@/components/sections/AmbitionSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { LeadMagnetSection } from "@/components/sections/LeadMagnetSection";
import { SuccessSection } from "@/components/sections/SuccessSection";
import { ClosingCtaSection } from "@/components/sections/ClosingCtaSection";
import { GrowthPlanModal } from "@/components/ui/GrowthPlanModal";

export default function HomePage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = React.useState(false);

  const openPlanModal = () => setIsPlanModalOpen(true);
  const closePlanModal = () => setIsPlanModalOpen(false);

  return (
    <div className="relative min-h-screen bg-[#060607] text-[#FAFAFA] antialiased selection:bg-[#FF5100] selection:text-[#060607]">
      {/* Clean Desktop & Mobile Navigation */}
      <Navbar onOpenPlan={openPlanModal} />

      {/* Main Content with Alternating Dark, Shaded Light, and Warm Tinted Rhythm */}
      <main className="flex flex-col">
        {/* Hero Section (Dark) */}
        <HeroSection onOpenPlan={openPlanModal} />

        {/* Brand Partners Bar (Shaded Warm Tinted #F5EFEB) */}
        <PartnersSection />

        {/* 01 / Your Ambition (Shaded Light #F8F7F4) */}
        <AmbitionSection />

        {/* 02 / What We Do (Dark #060607) */}
        <WhatWeDoSection />

        {/* System Overview Video Walkthrough (Diluted Warm Tinted #14110E) */}
        <VideoSection />

        {/* 03 / How It Works (Shaded Light #F8F7F4) */}
        <HowItWorksSection />

        {/* Founder Perspectives & Testimonials (Warm Tinted #12100E) */}
        <StoriesSection />

        {/* 04 / Lead Magnet & Book Cover (Dark #060607) */}
        <LeadMagnetSection />

        {/* 05 / Success & Verified Proof (Dark #060607) */}
        <SuccessSection />

        {/* Closing CTA (Dark with warm horizon light) */}
        <ClosingCtaSection onOpenPlan={openPlanModal} />
      </main>

      {/* Detailed Footer */}
      <Footer />

      {/* Growth Plan Direct Modal */}
      <GrowthPlanModal
        isOpen={isPlanModalOpen}
        onClose={closePlanModal}
      />
    </div>
  );
}
