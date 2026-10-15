"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { StoriesModal, FounderStory } from "@/components/ui/StoriesModal";

const STORIES_DATA: FounderStory[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vance Supply Co.",
    industry: "Multi-Location Retail",
    quote: "HISHO gave us the architectural clarity to scale our operations to four locations without losing the core standard of the brand.",
    detail: "We moved from chaotic spreadsheets and frantic weekend messages to a unified custom operating system and automated inventory tracking across all four locations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Chief Operating Officer",
    company: "Artisan Cold Brew",
    industry: "Consumer Goods",
    quote: "We didn't need another generic slide deck. We needed systems that our team could run effortlessly on Monday morning.",
    detail: "HISHO developed internal SOPs, trained our regional managers, and integrated our production line analytics directly into our fulfillment hub.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "David Chen",
    role: "Managing Director",
    company: "Meridian Group",
    industry: "Logistics & Supply",
    quote: "A business with real potential shouldn't stay small for lack of the right structure. Their software carried the load.",
    detail: "Custom workflow automation eliminated 80% of manual customer inquiry processing, allowing our executive team to focus on enterprise sales expansion.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Amara Okonkwo",
    role: "Creative Director",
    company: "Kvala Studios",
    industry: "Brand Architecture",
    quote: "They didn't just rebuild our brand identity, they elevated how high-value clients perceive our entire capability.",
    detail: "Our average contract size doubled within 90 days after launching the repositioning and streamlined client onboarding portal.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    name: "Thomas Lindqvist",
    role: "Co-Founder",
    company: "Nordic Commerce",
    industry: "Omnichannel Tech",
    quote: "The gap between what was in our minds and our actual tech infrastructure was bridged completely by HISHO.",
    detail: "Seamlessly architected our omnichannel inventory and member tier loyalty system, reducing customer churn by 42%.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    name: "Sofia Al-Mansoor",
    role: "Executive Director",
    company: "Archive 01",
    industry: "Digital Media",
    quote: "Their training wasn't theory. They sat beside our team until every department knew how to execute with total autonomy.",
    detail: "Upskilled 24 team members across project management, design consistency, and automated client billing workflows.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

// Display tiles array matching the canopy layout in user reference
const CANOPY_TILES = [
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", name: "Marcus Vance", storyIndex: 0, col: "1", yOffset: "mt-0" },
  { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", name: "Amara Okonkwo", storyIndex: 3, col: "1", yOffset: "mt-4" },
  { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", name: "David Chen", storyIndex: 2, col: "2", yOffset: "-mt-6" },
  { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80", name: "Creative Lead", storyIndex: 3, col: "2", yOffset: "mt-4" },
  { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80", name: "Elena Rostova", storyIndex: 1, col: "3", yOffset: "-mt-12" },
  { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80", name: "Partner", storyIndex: 2, col: "4", yOffset: "-mt-10" },
  { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", name: "Sofia Al-Mansoor", storyIndex: 5, col: "5", yOffset: "-mt-4" },
  { img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80", name: "Operations Lead", storyIndex: 1, col: "5", yOffset: "mt-4" },
  { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80", name: "Thomas Lindqvist", storyIndex: 4, col: "6", yOffset: "mt-0" },
  { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80", name: "Brand Director", storyIndex: 3, col: "6", yOffset: "mt-4" },
];

export function StoriesSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeStory, setActiveStory] = React.useState<FounderStory>(STORIES_DATA[0]);

  const handleOpenStory = (index: number) => {
    setActiveStory(STORIES_DATA[index % STORIES_DATA.length]);
    setModalOpen(true);
  };

  return (
    <>
      <section id="stories" className="relative bg-[#FAFAFA] py-20 lg:py-28 text-[#060607] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Canopy Arch of Founder Portrait Tiles */}
          <div className="relative mb-14 hidden md:block">
            <div className="grid grid-cols-6 gap-5 items-start justify-items-center">
              {CANOPY_TILES.map((tile, i) => (
                <div key={i} className={`flex flex-col items-center ${tile.yOffset} group relative`}>
                  {/* Portrait Card */}
                  <motion.div
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleOpenStory(tile.storyIndex)}
                    className="relative h-28 w-24 lg:h-32 lg:w-28 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md cursor-pointer transition-shadow hover:shadow-xl hover:border-[#FF5100]"
                  >
                    <Image
                      src={tile.img}
                      alt={tile.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </motion.div>

                  {/* Vertical Guide-line drop */}
                  <div className="h-12 w-px border-l border-dashed border-[#060607]/15 mt-2 group-hover:border-[#FF5100] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Avatar Strip */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-6 mb-8 scrollbar-none">
            {CANOPY_TILES.slice(0, 6).map((tile, i) => (
              <div
                key={i}
                onClick={() => handleOpenStory(tile.storyIndex)}
                className="relative h-20 w-18 shrink-0 overflow-hidden rounded-xl border border-black/10 shadow-sm cursor-pointer"
              >
                <Image src={tile.img} alt={tile.name} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Center Callout & Editorial Copy */}
          <div className="mx-auto max-w-3xl text-center space-y-6">


            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#060607] leading-[1.05]">
              Trusted by leaders
              <br />
              <span className="text-[#8A8A8E] font-medium">from various industries</span>
            </h2>

            {/* Subhead */}
            <p className="mx-auto max-w-xl text-base sm:text-lg text-[#555558] leading-relaxed">
              Learn why founders and executives trust our technology, brand, and
              operational systems to complete their scaling journey.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#060607] px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-200 hover:bg-[#FF5100] hover:scale-105 active:scale-95 border border-[#060607] cursor-pointer"
              >
                <span>Start your growth plan</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Modal */}
      <StoriesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedStory={activeStory}
        onSelectStory={(s) => setActiveStory(s)}
        stories={STORIES_DATA}
      />
    </>
  );
}
