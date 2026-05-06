"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Sparkles, FileCheck2 } from "lucide-react";

const float = (delay: number) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 4.5,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
});

function FlowDot({
  pathId,
  delay,
  color,
}: {
  pathId: string;
  delay: number;
  color: string;
}) {
  return (
    <circle r="3.5" fill={color} filter="url(#dotGlow)">
      <animateMotion
        dur="2.4s"
        begin={`${delay}s`}
        repeatCount="indefinite"
        rotate="auto"
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  );
}

export function WorkflowGraphic() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-[5/4] w-full max-w-[640px]">
      {/* SVG connector layer */}
      <svg
        viewBox="0 0 600 480"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.55" />
          </linearGradient>

          {/* Path: WhatsApp (top-left) -> AI agent (center) */}
          <path
            id="p1"
            d="M 130 120 C 200 160, 240 230, 300 240"
            fill="none"
          />
          {/* Path: AI agent -> Tally (bottom-right area) */}
          <path
            id="p2"
            d="M 300 240 C 360 250, 420 280, 470 360"
            fill="none"
          />
          {/* Path: Tally -> PDF (top-right) */}
          <path
            id="p3"
            d="M 470 360 C 520 320, 540 240, 500 150"
            fill="none"
          />
          {/* Path: extra invoice doc (bottom-left) -> AI agent */}
          <path
            id="p4"
            d="M 110 360 C 180 320, 230 270, 295 245"
            fill="none"
          />
        </defs>

        {/* Visible dashed paths */}
        <use href="#p1" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 6" />
        <use href="#p2" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 6" />
        <use href="#p3" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 6" />
        <use href="#p4" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 6" />

        {/* Traveling glow dots */}
        {!reduce && (
          <>
            <FlowDot pathId="p1" delay={0} color="#10b981" />
            <FlowDot pathId="p4" delay={0.7} color="#7c3aed" />
            <FlowDot pathId="p2" delay={1.2} color="#10b981" />
            <FlowDot pathId="p3" delay={1.9} color="#f43f5e" />
          </>
        )}
      </svg>

      {/* Floating cards */}
      {/* WhatsApp node (top-left) */}
      <motion.div
        {...(reduce ? {} : float(0))}
        className="absolute left-[6%] top-[12%] flex w-[180px] items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/90 p-3 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.25)] backdrop-blur"
      >
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl ring-1 ring-zinc-200/60">
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            fill
            sizes="40px"
            className="object-contain"
          />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
            Client WhatsApp
          </div>
          <div className="text-sm font-medium text-zinc-900">
            Invoice.pdf sent
          </div>
        </div>
      </motion.div>

      {/* Bottom-left documents card */}
      <motion.div
        {...(reduce ? {} : float(0.4))}
        className="absolute left-[3%] bottom-[10%] flex w-[200px] items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/90 p-3 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.25)] backdrop-blur"
      >
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
            Bills &amp; statements
          </div>
          <div className="text-sm font-medium text-zinc-900">
            PDF · JPG · Excel
          </div>
        </div>
      </motion.div>

      {/* AI Agent center node */}
      <motion.div
        {...(reduce ? {} : float(0.2))}
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-300/40 via-violet-300/30 to-rose-200/40 blur-2xl" />
          <div className="relative flex w-[210px] flex-col items-center gap-2 rounded-3xl border border-zinc-200/70 bg-white/95 p-4 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-1 ring-zinc-200">
              <Image
                src="/images/ai-agent.avif"
                alt="LedgerFlow AI agent"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/15">
              <Sparkles className="h-3 w-3" />
              LedgerFlow AI
            </div>
            <div className="text-center text-[11px] text-zinc-500">
              Reads · Extracts · Posts
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tally node (bottom-right) */}
      <motion.div
        {...(reduce ? {} : float(0.6))}
        className="absolute right-[4%] bottom-[14%] flex w-[180px] items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.25)] backdrop-blur"
      >
        <div className="relative inline-flex h-10 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-50 ring-1 ring-zinc-200">
          <Image
            src="/images/tally-logo-black.svg"
            alt="Tally"
            width={40}
            height={20}
            className="object-contain"
          />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
            Tally entry
          </div>
          <div className="text-sm font-medium text-zinc-900">
            Voucher created
          </div>
        </div>
      </motion.div>

      {/* PDF node (top-right) */}
      <motion.div
        {...(reduce ? {} : float(0.9))}
        className="absolute right-[6%] top-[10%] flex w-[170px] items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.25)] backdrop-blur"
      >
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100">
          <FileCheck2 className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
            Export
          </div>
          <div className="text-sm font-medium text-zinc-900">
            Report.pdf ready
          </div>
        </div>
      </motion.div>
    </div>
  );
}
