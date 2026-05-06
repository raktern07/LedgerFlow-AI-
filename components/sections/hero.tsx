import Image from "next/image";
import { ArrowRight, PlayCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Badge } from "@/components/ui/badge";
import { PoweredByOpenClaw } from "@/components/powered-by-openclaw";
import { Reveal } from "@/components/ui/reveal";
import { WorkflowGraphic } from "./workflow-graphic";

const HIGHLIGHTS = [
  "WhatsApp-first workflow",
  "Direct Tally integration",
  "AI invoice & PDF reading",
];

const TRUSTED_INTEGRATIONS = [
  { name: "WhatsApp", img: "/images/whatsapp.png" },
  { name: "Tally", img: "/images/tally-logo-black.svg" },
  { name: "OpenClaw", img: "/images/openclaw.jpg" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientBlur variant="hero" />
      <GridPattern />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10 flex flex-col justify-center">
          <Reveal direction="up">
            <Badge tone="emerald" className="w-fit">
              <Sparkles className="h-3 w-3" />
              AI accounting automation
            </Badge>
          </Reveal>

          <Reveal direction="up" delay={0.05}>
            <h1 className="mt-5 text-pretty text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-[58px]">
              Automate accounting entries from{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                  WhatsApp
                </span>
              </span>{" "}
              to{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Tally
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 14"
                  className="absolute -bottom-2 left-0 h-3 w-full text-violet-300"
                >
                  <path
                    d="M2 9 C 50 2, 110 2, 198 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              with AI.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
              Send invoices, bills, receipts, PDFs, or images on WhatsApp. Our
              AI agent reads, understands, and creates accurate accounting
              entries directly in Tally — and gives you exportable reports
              instantly.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button href="#cta" size="lg">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                <PlayCircle className="h-4 w-4" />
                See How It Works
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <PoweredByOpenClaw />
              <div className="hidden h-6 w-px bg-zinc-200 sm:block" />
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  Works with
                </span>
                <div className="flex items-center gap-3">
                  {TRUSTED_INTEGRATIONS.map((t) => (
                    <span
                      key={t.name}
                      className="inline-flex h-8 items-center justify-center rounded-lg border border-zinc-200 bg-white px-2 shadow-sm"
                      title={t.name}
                    >
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={t.name === "Tally" ? 44 : 18}
                        height={18}
                        className="h-5 w-auto object-contain"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <Reveal direction="left" delay={0.1} className="w-full">
            <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center">
              <WorkflowGraphic />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
