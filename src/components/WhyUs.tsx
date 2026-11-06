"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "./SectionBadge";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Design without direction is decoration.",
    description: "We connect visual creativity with clear business objectives.",
    focus: "Strategic Intent",
  },
  {
    number: "02",
    title: "Technology should create possibilities.",
    description: "We use the right tools and technologies to solve real problems.",
    focus: "Engineering Purpose",
  },
  {
    number: "03",
    title: "Experiences should create impact.",
    description: "We focus on outcomes, usability and lasting value.",
    focus: "Measurable Value",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="mb-6">
            <SectionBadge label="WHY WE EXIST" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.12]">
            Good ideas deserve{" "}
            <span className="font-serif italic font-normal text-slate-200">
              more than ordinary execution.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
            We believe the best digital experiences happen when strategy, design and technology work together. PixelInt exists to bridge those disciplines and turn ambitious thinking into meaningful outcomes.
          </p>
        </div>

        {/* 3 Editorial Cards matching WINTR's 'Why We Exist' layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[#0E0F14] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
            >
              {/* Corner accent marker */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30 rounded-tr-xl" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm tracking-widest text-slate-400 group-hover:text-white transition-colors">
                    {`${item.number} //`}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
                    {item.focus}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4 leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
                <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-3 mb-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
