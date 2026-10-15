"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { GrowthPlanModal } from "@/components/ui/GrowthPlanModal";

export default function ContactPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-[#F9F7F4] text-[#060607] antialiased selection:bg-[#FF5100] selection:text-[#060607]">
      <Navbar onOpenPlan={() => setIsPlanModalOpen(true)} />
      <main className="flex flex-col">
        <ContactSection />
      </main>
      <Footer />
      <GrowthPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </div>
  );
}
