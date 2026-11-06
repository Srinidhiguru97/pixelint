"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBadge from "./SectionBadge";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Digital Product Design",
    description:
      "Turning complex product ideas into intuitive, scalable digital experiences.",
    tags: ["SaaS Architecture", "Systems", "Prototypes"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Creating purposeful interfaces and seamless user journeys.",
    tags: ["User Research", "Interaction", "Usability"],
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Building distinctive brand identities, visual systems and design languages.",
    tags: ["Visual Systems", "Guidelines", "Art Direction"],
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "Developing high-performance websites and digital platforms.",
    tags: ["Next.js", "TypeScript", "Performance"],
  },
  {
    number: "05",
    title: "AI Experiences",
    description:
      "Exploring intelligent interfaces, AI-powered products and next-generation digital experiences.",
    tags: ["Generative UI", "Agentic UX", "Intelligent Flows"],
  },
  {
    number: "06",
    title: "Creative Technology",
    description:
      "Combining design, code and experimentation to build something different.",
    tags: ["WebGL & Canvas", "Interactivity", "Motion"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="mb-6">
            <SectionBadge label="SERVICES & ADD-ONS" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            What we bring{" "}
            <span className="font-serif italic font-normal text-slate-200">
              to the table.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            A comprehensive suite of capabilities designed to take your digital presence and products from inception to market leadership.
          </p>
        </div>

        {/* 6 Services Grid (Balanced 3-column / 2-row layout inspired by WINTR) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative p-8 sm:p-9 rounded-2xl bg-[#0E0F14] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between min-h-[260px] overflow-hidden"
            >
              {/* Corner angle marker */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30 rounded-tr-xl" />

              <div>
                {/* Number & Arrow Bar */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm tracking-wider text-slate-400 group-hover:text-white transition-colors">
                    {service.number} &mdash;
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
                  {service.description}
                </p>
              </div>

              {/* Tags / Sub-deliverables */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono tracking-wider text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
