"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "./SectionBadge";
import { ArrowUpRight } from "lucide-react";

const studioMetrics = [
  {
    index: "01",
    tag: "Core Focus",
    title: "Strategy & Direction",
    description: "Aligning product roadmaps, user mental models and business intent from day zero.",
  },
  {
    index: "02",
    tag: "Aesthetic Standard",
    title: "Design Architecture",
    description: "Spatial systems, interaction design and bespoke typography built for lasting resonance.",
  },
  {
    index: "03",
    tag: "Technical Rigor",
    title: "Engineering & Innovation",
    description: "High-performance frontend architecture, modern APIs and production AI integration.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Pill Badge */}
        <div className="mb-8">
          <SectionBadge label="ABOUT PIXELINT" />
        </div>

        {/* Main Statement (Large Editorial Headline) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            A digital studio built for ideas that{" "}
            <span className="font-serif italic font-normal text-slate-200">
              move the world forward.
            </span>
          </h2>
        </motion.div>

        {/* Two-Column Editorial Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 pb-16 sm:pb-24 border-b border-white/10">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xl sm:text-2xl text-slate-200 font-light leading-relaxed">
              PixelInt combines strategic thinking, thoughtful design and modern technology to create digital products, brands and experiences that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-6 rounded-2xl bg-[#0E0F14] border border-white/10">
              <div className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">
                STUDIO ETHOS
              </div>
              <p className="text-base text-white font-medium leading-normal">
                One studio. Multiple disciplines. Meaningful outcomes.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Editorial Highlight Cards (Inspired by WINTR) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {studioMetrics.map((item, index) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-[#0E0F14] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              {/* Corner accent marker matching WINTR */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30 rounded-tr-xl" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-slate-400 tracking-wider">
                    {`${item.index} //`}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                  {item.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <p className="text-sm text-slate-400 font-normal leading-relaxed">
                  {item.description}
                </p>
                <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
