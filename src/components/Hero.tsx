"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import SectionBadge from "./SectionBadge";
import EditorialHeroGraphic from "./EditorialHeroGraphic";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Hero Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Brand Introduction Pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <SectionBadge label="INDEPENDENT DIGITAL DESIGN & TECHNOLOGY STUDIO" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] sm:leading-[1.04] mb-8"
            >
              Ideas deserve{" "}
              <span className="font-serif italic font-normal text-slate-100">
                better execution.
              </span>
            </motion.h1>

            {/* Supporting Statement */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-6"
            >
              We transform ambitious ideas into meaningful digital experiences through design, technology and innovation.
            </motion.p>

            {/* Secondary Positioning */}
            <motion.div
              variants={itemVariants}
              className="p-4 sm:p-5 rounded-2xl bg-[#0E0F14] border border-white/10 max-w-xl mb-10 text-sm text-slate-400 font-normal leading-relaxed"
            >
              <span className="text-white font-medium">Positioning: </span>
              A product-minded creative studio for brands, businesses and ambitious founders.
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all duration-200"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-transparent border border-white/15 hover:border-white/40 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-widest transition-all duration-200"
              >
                <span>Explore Our Studio</span>
              </a>

              {/* Scroll Down Trigger */}
              <a
                href="#about"
                className="hidden sm:inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-colors"
                aria-label="Scroll down to About section"
              >
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Editorial Visual Composition */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <EditorialHeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
