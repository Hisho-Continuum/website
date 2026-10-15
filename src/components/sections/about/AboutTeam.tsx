"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Tariq Thorne",
    role: "Head of Technology Architecture",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elena Rostova",
    role: "Brand Architecture & Identity Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Devon Cross",
    role: "Operational Systems & Automation Principal",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export function AboutTeam() {
  return (
    <section className="relative bg-[#FAFAFA] py-16 lg:py-24 text-[#060607]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#060607]">
            Practice Leads<span className="text-[#FF5100]">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6A6A6E]">
            Experienced operators and engineers directing every client build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group text-center space-y-4"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-black/5 bg-[#EAEAEA] shadow-md transition-shadow group-hover:shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#060607]">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-[#8A8A8E]">
                  {member.role}
                </p>
              </div>

              {/* Social / contact icons */}
              <div className="flex items-center justify-center gap-3 pt-1 text-[#8A8A8E]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 hover:border-[#FF5100] hover:text-[#FF5100] transition-colors cursor-pointer">
                  <Globe className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 hover:border-[#FF5100] hover:text-[#FF5100] transition-colors cursor-pointer">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 hover:border-[#FF5100] hover:text-[#FF5100] transition-colors cursor-pointer">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
