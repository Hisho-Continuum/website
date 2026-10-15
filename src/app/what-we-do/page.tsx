"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatWeDoHero } from "@/components/sections/what-we-do/WhatWeDoHero";
import { WhatWeActuallyDo } from "@/components/sections/what-we-do/WhatWeActuallyDo";
import { WhatWeDoPillars } from "@/components/sections/what-we-do/WhatWeDoPillars";
import { GrowthPlanModal } from "@/components/ui/GrowthPlanModal";

export default function WhatWeDoPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-[#060607] text-[#FAFAFA] antialiased selection:bg-[#FF5100] selection:text-[#060607]">
      <Navbar onOpenPlan={() => setIsPlanModalOpen(true)} />
      <main className="flex flex-col">
        {/* Hero Section */}
        <WhatWeDoHero onOpenPlan={() => setIsPlanModalOpen(true)} />

        {/* What We Actually Do (Panoramic Capability Arc Layout) */}
        <WhatWeActuallyDo onOpenPlan={() => setIsPlanModalOpen(true)} />

        {/* Our Work / Selected Production Builds (What we have done) */}
        <WhatWeDoPillars onOpenPlan={() => setIsPlanModalOpen(true)} />
      </main>
      <Footer />
      <GrowthPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </div>
  );
}
