"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Layers,
  Sparkles,
  Layout,
  Code2,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: "product-design",
    number: "01",
    title: "Digital Product Design",
    description:
      "Sculpting complex product visions into intuitive, high-utility digital applications that solve real problems and scale effortlessly.",
    icon: Layers,
    tags: ["SaaS Architecture", "Design Systems", "Interactive Prototyping"],
  },
  {
    id: "ui-ux",
    number: "02",
    title: "UI/UX & Experience Design",
    description:
      "Crafting frictionless user journeys through meticulous interaction architecture, spatial choreography and human-centered design thinking.",
    icon: Layout,
    tags: ["User Research", "Wireframing", "Micro-interactions", "Usability"],
  },
  {
    id: "brand-identity",
    number: "03",
    title: "Brand Identity & Strategy",
    description:
      "Defining distinctive visual vernaculars, brand guidelines and digital-first design languages that forge lasting emotional connections.",
    icon: Sparkles,
    tags: ["Visual Identity", "Digital Guidelines", "Typography", "Art Direction"],
  },
  {
    id: "web-dev",
    number: "04",
    title: "Web Development",
    description:
      "Engineering blazingly fast, accessible and modern web experiences using Next.js, modern CSS and resilient cloud architecture.",
    icon: Code2,
    tags: ["Next.js & React", "TypeScript", "Performant APIs", "Animations"],
  },
  {
    id: "ai-experiences",
    number: "05",
    title: "AI-powered Digital Experiences",
    description:
      "Integrating generative intelligence, natural interfaces and autonomous agents into seamless software experiences that feel like magic.",
    icon: Cpu,
    tags: ["Generative UI", "Intelligent Workflows", "Agentic Systems", "LLM UX"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#397BFF] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#397BFF]" />
            <span>Studio Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Where creativity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#397BFF] to-[#875BFF]">
              meets technology.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We operate at the convergence of disciplined design and forward-leaning engineering, creating high-impact digital solutions built for longevity.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = index === 3 || index === 4;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-2xl bg-[#11131A]/70 border border-white/10 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#397BFF]/40 hover:bg-[#151822]/90 flex flex-col justify-between overflow-hidden ${
                  isWide ? "lg:col-span-1.5" : ""
                }`}
              >
                {/* Subtle hover gradient glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#397BFF]/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#875BFF]/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                <div>
                  {/* Top card bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-slate-400 group-hover:text-[#397BFF] transition-colors duration-200">
                      {`${service.number} //`}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-[#397BFF]/40 group-hover:bg-[#397BFF]/15 transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-[#397BFF]" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables / Tags */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-400 group-hover:border-white/10 group-hover:text-slate-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
