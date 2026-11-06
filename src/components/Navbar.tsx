"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090D]/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Status Badge */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#397BFF] rounded-sm"
              aria-label="PIXELINT Home"
            >
              <span className="font-bold text-xl sm:text-2xl tracking-[0.2em] uppercase text-white transition-colors duration-200 group-hover:text-white">
                PIXELINT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#397BFF] animate-pulse" />
            </Link>

            {/* Status indicator: A NEW DIGITAL STUDIO IS EMERGING */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono tracking-wider text-slate-300 uppercase backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#397BFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#397BFF]" />
              </span>
              <span>A new digital studio is emerging</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <a
              href="#about"
              className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#coming-soon"
              className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>

            <a
              href="#coming-soon"
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-full bg-white/[0.05] hover:bg-[#397BFF]/20 text-slate-200 hover:text-white border border-white/10 hover:border-[#397BFF]/40 transition-all duration-300"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#397BFF]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Status for small screens */}
        <div className="lg:hidden mt-3 pt-2 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono tracking-wider text-slate-400 uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#397BFF] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#397BFF]" />
          </span>
          <span>A new digital studio is emerging</span>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#08090D]/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-white py-1"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-white py-1"
            >
              Services
            </a>
            <a
              href="#coming-soon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-white py-1"
            >
              Contact
            </a>
            <a
              href="#coming-soon"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full bg-[#397BFF] text-white hover:bg-[#397BFF]/90 transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

