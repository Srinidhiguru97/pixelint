"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

interface SocialLinkConfig {
  name: string;
  url?: string;
}

// Social links configuration: only rendered if a valid non-empty URL is provided
const socialLinks: SocialLinkConfig[] = [
  // Example configured social channels (can be configured with real studio URLs):
  { name: "X (Twitter)", url: "" },
  { name: "LinkedIn", url: "" },
  { name: "GitHub", url: "https://github.com/Srinidhiguru97/pixelint" },
  { name: "Instagram", url: "" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Filter only links that have a genuine, configured URL
  const activeSocials = socialLinks.filter(
    (item) => item.url && item.url.trim().length > 0
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#08090D] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Wordmark & Tagline */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group"
              aria-label="PIXELINT Homepage"
            >
              <span className="font-bold text-2xl tracking-[0.2em] uppercase text-white">
                PIXELINT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#397BFF]" />
            </Link>
            <p className="text-sm text-slate-400 font-light max-w-sm">
              A digital studio built for what&apos;s next.
            </p>
          </div>

          {/* Configurable Social Links (only appear when real URLs are present) */}
          <div className="flex flex-wrap items-center gap-6">
            {activeSocials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-mono text-slate-400 hover:text-white transition-colors duration-200"
              >
                {social.name}
              </a>
            ))}

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {currentYear} PIXELINT STUDIO. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>STUDIO OPERATIONS : PRE-LAUNCH</span>
            </span>
            <span>DESIGN &times; TECHNOLOGY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
