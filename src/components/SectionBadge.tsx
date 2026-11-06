import React from "react";

interface SectionBadgeProps {
  label: string;
  className?: string;
}

export default function SectionBadge({ label, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-slate-300 ${className}`}
    >
      {/* 4-point geometric cross/star inspired by WINTR's Union.svg */}
      <svg
        className="w-3.5 h-3.5 text-white fill-current shrink-0"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M8 0L9.4 6.6L16 8L9.4 9.4L8 16L6.6 9.4L0 8L6.6 6.6L8 0Z" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

