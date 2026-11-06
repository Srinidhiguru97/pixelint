"use client";

import React from "react";

export default function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Primary ambient glow (Electric Blue) */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, #397BFF 0%, rgba(57, 123, 255, 0.2) 50%, transparent 80%)",
        }}
      />

      {/* Secondary subtle glow (Violet) */}
      <div
        className="absolute top-[45%] -right-[10%] w-[500px] sm:w-[650px] h-[450px] rounded-full blur-[150px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, #875BFF 0%, rgba(135, 91, 255, 0.15) 50%, transparent 80%)",
        }}
      />

      {/* Tertiary bottom glow */}
      <div
        className="absolute bottom-[-10%] left-[10%] w-[600px] h-[400px] rounded-full blur-[160px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, #397BFF 0%, rgba(135, 91, 255, 0.15) 40%, transparent 75%)",
        }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090D]/40 via-transparent to-[#08090D]/90" />
    </div>
  );
}

