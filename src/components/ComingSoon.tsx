"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, CheckCircle2, Sparkles, Send } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please provide a valid email address");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="coming-soon" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #397BFF 0%, #875BFF 40%, transparent 80%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-[#11131A]/80 border border-white/10 p-8 sm:p-14 lg:p-16 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Subtle top decorative accent bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#397BFF] to-transparent" />

          {/* Launch Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#397BFF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Sequence Active</span>
          </div>

          {/* Requested Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Something new is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#397BFF] via-[#60A5FA] to-[#875BFF]">
              taking shape.
            </span>
          </h2>

          {/* Requested Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            We&apos;re preparing something worth exploring. Stay connected as we get ready to launch.
          </p>

          {/* Action Area: Start a Conversation CTA & Get Notified Form */}
          <div className="flex flex-col items-center justify-center gap-6 max-w-xl mx-auto">
            {/* Primary Contact CTA (Mailto placeholder) */}
            <a
              href="mailto:contact@pixelint.studio?subject=PIXELINT%20Conversation%20Inquiry"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[#397BFF] hover:bg-[#2868e8] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_-5px_rgba(57,123,255,0.45)] hover:shadow-[0_0_45px_0_rgba(57,123,255,0.7)]"
            >
              <Mail className="w-4 h-4" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Divider */}
            <div className="w-full flex items-center justify-center gap-4 my-2">
              <div className="flex-1 h-[1px] bg-white/10" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
                Or get notified on launch
              </span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            {/* Email Notification Subscribe Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full p-4 rounded-2xl bg-[#397BFF]/10 border border-[#397BFF]/30 flex items-center justify-center gap-3 text-slate-200 text-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#397BFF]" />
                <span>You&apos;re on the early access list. We&apos;ll be in touch before launch.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-2">
                <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-5 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#397BFF] focus:ring-1 focus:ring-[#397BFF] transition-all"
                      aria-label="Email address for launch notifications"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all duration-200 shrink-0 cursor-pointer"
                  >
                    <span>Notify Me</span>
                    <Send className="w-3.5 h-3.5 text-[#397BFF]" />
                  </button>
                </div>
                {error && (
                  <p className="text-xs text-rose-400 text-left pl-4">{error}</p>
                )}
              </form>
            )}

            {/* Availability note */}
            <p className="text-xs font-mono text-slate-400 tracking-wider">
              SELECTIVE CLIENT PARTNERSHIPS OPENING Q3/Q4
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
