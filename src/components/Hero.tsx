"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Typography & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Launch Status Indicator */}
            <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#397BFF]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#397BFF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#397BFF]" />
                </span>
                <span>Our Journey Starts Soon</span>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-slate-400 mb-4 flex items-center gap-2"
            >
              <span className="w-6 h-[1px] bg-[#397BFF]/60" />
              INDEPENDENT DIGITAL DESIGN & TECHNOLOGY STUDIO
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.06] mb-6"
            >
              Beyond the ordinary.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#397BFF] via-[#60A5FA] to-[#875BFF]">
                Into what&apos;s next.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10"
            >
              We transform ambitious ideas into meaningful digital experiences through design, technology and innovation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#coming-soon"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#397BFF] hover:bg-[#2b6be6] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_-5px_rgba(57,123,255,0.5)] hover:shadow-[0_0_40px_0_rgba(57,123,255,0.7)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-medium tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
              >
                <Compass className="w-4 h-4 text-[#875BFF]" />
                <span>Explore Studio</span>
              </a>

              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-[#11131A]/60 text-xs font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-[#397BFF]" />
                <span>Coming Soon</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Abstract 3D Centerpiece */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
