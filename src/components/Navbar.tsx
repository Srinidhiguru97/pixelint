"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6 sm:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="PIXELINT Home"
          >
            <span className="font-bold text-xl sm:text-2xl tracking-[0.22em] uppercase text-white font-mono">
              PIXELINT
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              Contact
            </a>

            {/* Let's Talk Pill Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 text-xs uppercase tracking-widest font-semibold transition-all duration-200"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-200 hover:text-white"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-200 hover:text-white"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-200 hover:text-white"
            >
              Process
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-200 hover:text-white"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors mt-2"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
