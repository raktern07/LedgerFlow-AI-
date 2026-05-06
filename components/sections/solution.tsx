import Image from "next/image";
import {
  MessageSquare,
  ScanLine,
  Brain,
  Database,
  FileOutput,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { GradientBlur } from "@/components/ui/gradient-blur";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Client sends files on WhatsApp",
    desc: "Invoices, bills, receipts, statements — PDFs or photos. No portal, no upload form.",
  },
  {
    icon: ScanLine,
    title: "AI reads the document",
    desc: "OCR + LLM extracts every line: vendor, GSTIN, date, amounts, taxes, voucher type.",
  },
  {
    icon: Brain,
    title: "Smart ledger detection",
    desc: "Picks the correct ledger, party, GST split, and voucher format for that company.",
  },
  {
    icon: Database,
    title: "Posts directly into Tally",
    desc: "Vouchers are written into the right company in your locally running TallyPrime.",
  },
  {
    icon: FileOutput,
    title: "Reports & PDFs generated",
    desc: "Day book, ledger statements, GST summaries — exportable in one click.",
  },
  {
    icon: ShieldCheck,
    title: "CA team reviews & approves",
    desc: "Optional human review keeps you in control before anything is finalised.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden py-20 sm:py-24">
      <GradientBlur variant="soft" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge tone="emerald" className="mx-auto">
              The LedgerFlow AI workflow
            </Badge>
            <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              An AI agent that does the boring 80% — automatically
            </h2>
            <p className="mt-3 text-pretty text-zinc-600">
              From a WhatsApp message to a posted Tally voucher in seconds. Your
              team only steps in for the final review.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-200/40 via-violet-200/30 to-rose-200/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-3 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-50">
                  <Image
                    src="/images/ai-agent.avif"
                    alt="LedgerFlow AI agent visualization"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-2 py-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-zinc-700">
                      Agent active
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500">
                    LedgerFlow AI · Tally connector
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.05}>
            <ol className="relative space-y-5 lg:pl-2">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.title}
                    className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-colors hover:border-zinc-200 hover:bg-white/70"
                  >
                    <div className="relative">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-semibold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
