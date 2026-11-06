"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import SectionBadge from "./SectionBadge";
import { ArrowUpRight, CheckCircle2, Mail, Copy, Check } from "lucide-react";

const projectTypes = [
  "Digital Product Design",
  "UI/UX Design",
  "Brand Identity",
  "Web Development",
  "AI Experiences",
  "Creative Technology",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Digital Product Design",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email is required";
    }
    if (!formData.message.trim()) errs.message = "Please describe your project or idea";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const mailtoHref = `mailto:hello@pixelint.studio?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.projectType} — ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nCompany/Brand: ${formData.company || "N/A"}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
  )}`;

  const handleCopyInquiry = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nCompany/Brand: ${formData.company || "N/A"}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Contact Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <SectionBadge label="LET'S CONNECT" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Have something{" "}
                <span className="font-serif italic font-normal text-slate-200">
                  in mind?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
                Whether you are starting with an idea, building a product or looking to transform your digital presence, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E0F14] border border-white/10 space-y-4">
              <div className="text-xs font-mono tracking-widest uppercase text-slate-400">
                Direct Inquiries
              </div>
              <div className="flex items-center gap-3 text-white font-medium">
                <Mail className="w-4 h-4 text-slate-400" />
                <a
                  href="mailto:hello@pixelint.studio"
                  className="hover:underline hover:text-white transition-colors"
                >
                  hello@pixelint.studio
                </a>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Response time: Within 24&ndash;48 hours on business days.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0E0F14] border border-white/10 relative">
              {/* Corner accent marker */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-white/30 rounded-tr-2xl" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center sm:text-left"
                >
                  <div className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h3 className="text-2xl font-semibold text-white">Inquiry Prepared</h3>
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Because external email routing servers are configured per deployment environment, your message draft has been formatted and is ready to send.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors"
                    >
                      <span>Send Via Email Client</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] border border-white/15 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? "Copied" : "Copy Inquiry"}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-slate-400 hover:text-white underline underline-offset-4"
                    >
                      Edit details / Send another inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Elena Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.name ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white transition-colors`}
                      />
                      {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.email ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white transition-colors`}
                      />
                      {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    {/* Company / Brand */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-2">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Studio"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#14151D] border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#14151D] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-2">
                      Project Overview *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the challenges, timeline and vision for this project..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.message ? "border-rose-500" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white transition-colors resize-y`}
                    />
                    {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit CTA */}
                  <div>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all duration-200 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

