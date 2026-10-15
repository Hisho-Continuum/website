"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoriesHero } from "@/components/sections/stories/StoriesHero";
import { StoriesMetrics } from "@/components/sections/stories/StoriesMetrics";
import { StoriesGrid } from "@/components/sections/stories/StoriesGrid";
import { GrowthPlanModal } from "@/components/ui/GrowthPlanModal";

export default function StoriesPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-[#060607] text-[#FAFAFA] antialiased selection:bg-[#FF5100] selection:text-[#060607]">
      <Navbar onOpenPlan={() => setIsPlanModalOpen(true)} />
      <main className="flex flex-col">
        <StoriesHero />
        <StoriesMetrics />
        <StoriesGrid onOpenPlan={() => setIsPlanModalOpen(true)} />
      </main>
      <Footer />
      <GrowthPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </div>
  );
}
