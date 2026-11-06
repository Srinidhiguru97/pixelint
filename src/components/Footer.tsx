"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

interface SocialLinkConfig {
  name: string;
  url?: string;
}

const socialLinks: SocialLinkConfig[] = [
  { name: "GitHub", url: "https://github.com/Srinidhiguru97/pixelint" },
  { name: "LinkedIn", url: "" },
  { name: "X (Twitter)", url: "" },
  { name: "Instagram", url: "" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const activeSocials = socialLinks.filter(
    (item) => item.url && item.url.trim().length > 0
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block" aria-label="PIXELINT Home">
              <span className="font-bold text-3xl tracking-[0.22em] uppercase text-white font-mono">
                PIXELINT
              </span>
            </Link>
            <p className="text-base text-slate-400 font-light max-w-md leading-relaxed">
              A digital studio built for what&apos;s next.
            </p>
            <div className="pt-2">
              <a
                href="mailto:hello@pixelint.studio"
                className="text-xs font-mono tracking-widest text-slate-300 hover:text-white underline underline-offset-4"
              >
                hello@pixelint.studio
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-slate-300 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-4">
              Connect
            </div>
            <ul className="space-y-2 text-sm">
              {activeSocials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/30 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {currentYear} PIXELINT. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>INDEPENDENT DIGITAL STUDIO</span>
            <span>ATHENS &times; GLOBAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
