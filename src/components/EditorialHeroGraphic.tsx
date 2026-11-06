"use client";

import React from "react";
import { motion } from "motion/react";

export default function EditorialHeroGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[500px] mx-auto rounded-3xl bg-[#0B0C10] border border-white/10 overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-2xl">
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

      {/* Top Header Information inside the Artboard */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>PIXELINT // STUDIO SPEC</span>
        </div>
        <span>[01 &mdash; 2026]</span>
      </div>

      {/* Central Abstract Geometric Architectural Sculpture */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-6">
        <motion.div
          className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {/* Concentric Geometric Rings */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-4 rounded-full border border-dashed border-white/15" />
          <div className="absolute inset-10 rounded-full border border-white/10" />

          {/* Isometric Diamond Grid */}
          <div className="absolute w-36 h-36 border border-white/20 rotate-45 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute w-24 h-24 border border-white/30 rotate-12" />

          {/* Center Monolithic Core */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#14151D] via-[#1F202B] to-[#2B2D3D] border border-white/20 flex items-center justify-center shadow-lg shadow-black/60">
            <div className="w-6 h-6 rounded-md border border-white/40 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>

          {/* Orbital Coordinates Crosshairs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-[9px] font-mono text-slate-400 bg-[#0B0C10] px-1">
            +00.00
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 text-[9px] font-mono text-slate-400 bg-[#0B0C10] px-1">
            +90.00
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 text-[9px] font-mono text-slate-400 bg-[#0B0C10] px-1">
            -45.00
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 text-[9px] font-mono text-slate-400 bg-[#0B0C10] px-1">
            +45.00
          </div>
        </motion.div>
      </div>

      {/* Bottom Technical Telemetry & Metadata */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-end justify-between">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            Discipline
          </div>
          <div className="text-xs font-semibold text-white tracking-wide mt-0.5">
            Digital Architecture &times; Strategic Design
          </div>
        </div>

        <div className="text-right">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            Status
          </div>
          <div className="text-xs font-mono text-white mt-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* Minimal Corner Crosshair Registrations */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30" />
    </div>
  );
}

