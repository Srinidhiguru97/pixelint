"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "./SectionBadge";
import { CheckCircle2 } from "lucide-react";

interface StageItem {
  stage: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
}

const stages: StageItem[] = [
  {
    stage: "STAGE 01",
    name: "Discover",
    headline: "Deconstructing the problem space",
    description:
      "Understanding the business, audience, challenges and opportunities through rigorous discovery and user research.",
    deliverables: ["Market & Audience Analysis", "Technical Feasibility", "Stakeholder Alignment"],
  },
  {
    stage: "STAGE 02",
    name: "Define",
    headline: "Establishing the core strategic foundation",
    description:
      "Establishing strategy, positioning, creative direction and product requirements to align every moving part.",
    deliverables: ["Strategic Narrative", "Information Architecture", "Creative Direction"],
  },
  {
    stage: "STAGE 03",
    name: "Design & Build",
    headline: "Crafting and engineering the solution",
    description:
      "Transforming concepts into carefully designed and developed digital experiences using modern frameworks and refined craft.",
    deliverables: ["Design System & High-Fi UI", "Production Development", "Interactive Prototyping"],
  },
  {
    stage: "STAGE 04",
    name: "Launch & Evolve",
    headline: "Deploying to production and scaling",
    description:
      "Testing, launching, measuring and continuously improving the experience through user feedback and performance analytics.",
    deliverables: ["Lighthouse Optimization", "Production Launch", "Continuous Evolution"],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="mb-6">
            <SectionBadge label="HOW IT WORKS // TIMELINE" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            From first thought{" "}
            <span className="font-serif italic font-normal text-slate-200">
              to final experience.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            A structured, transparent engagement model engineered to eliminate ambiguity and deliver high-impact digital outcomes on a predictable timeline.
          </p>
        </div>

        {/* Timeline Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {stages.map((item, index) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[#0E0F14] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner accent marker */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30 rounded-tr-xl" />

              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-300 tracking-widest uppercase">
                    {item.stage}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    STEP 0{index + 1}
                  </span>
                </div>

                {/* Stage Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {item.name}
                </h3>
                <p className="text-sm font-serif italic text-slate-400 mb-4">
                  {item.headline}
                </p>

                {/* Exact requested description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-8">
                  {item.description}
                </p>
              </div>

              {/* Deliverables / Checklist */}
              <div className="pt-6 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-2">
                  Key Outcomes
                </div>
                {item.deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
