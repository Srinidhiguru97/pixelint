"use client";

import React from "react";
import { motion } from "motion/react";
import { Target, Zap, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Disciplined Craft",
    description:
      "We obsess over every detail, from micro-typography and frame rates to system architecture and state management.",
  },
  {
    icon: Zap,
    title: "Experimental Momentum",
    description:
      "We embrace emerging paradigms—combining modern frameworks, machine intelligence and spatial UI to discover the unexpected.",
  },
  {
    icon: ShieldCheck,
    title: "Intentional Partnership",
    description:
      "Operating as an agile, senior-only studio means direct collaboration, zero agency bureaucracy and uncompromising speed.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Text */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#875BFF] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#875BFF]" />
              <span>Studio Ethos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
              Small studio.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#875BFF] via-[#397BFF] to-white">
                Big ideas.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light mb-8">
              PIXELINT is a creative technology studio focused on building digital products, intelligent experiences and distinctive brands. We combine design thinking, technology and experimentation to turn ideas into impact.
            </p>

            <div className="p-6 rounded-2xl bg-[#11131A]/80 border border-white/10 backdrop-blur-md">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="border-r border-white/10 pr-2">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white">01</div>
                  <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1">
                    Focused Model
                  </div>
                </div>
                <div className="border-r border-white/10 px-2">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#397BFF]">AI+UX</div>
                  <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1">
                    Modern Stack
                  </div>
                </div>
                <div className="pl-2">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#875BFF]">GLOBAL</div>
                  <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1">
                    Reach
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillars Column */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group p-6 sm:p-7 rounded-2xl bg-[#11131A]/60 border border-white/10 hover:border-[#875BFF]/40 hover:bg-[#161824]/80 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200 group-hover:text-white group-hover:bg-[#875BFF]/20 group-hover:border-[#875BFF]/40 transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

