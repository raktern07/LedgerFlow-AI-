import {
  MessageSquare,
  ScanSearch,
  Database,
  FileOutput,
} from "lucide-react";
import { Card, CardIcon } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: 1,
    title: "Send documents on WhatsApp",
    desc: "Clients share invoices, bills, and statements as PDFs or photos — the same way they already message you.",
    icon: MessageSquare,
    tone: "emerald" as const,
  },
  {
    step: 2,
    title: "AI reads and extracts data",
    desc: "LedgerFlow AI parses vendors, amounts, GST, dates, and voucher context with OCR and language models.",
    icon: ScanSearch,
    tone: "violet" as const,
  },
  {
    step: 3,
    title: "Auto-entry into Tally",
    desc: "Vouchers are drafted and posted to the correct company, ledger, and tax structure in your Tally environment.",
    icon: Database,
    tone: "sky" as const,
  },
  {
    step: 4,
    title: "Export reports and PDFs",
    desc: "Generate ledgers, summaries, and branded PDFs — ready to share with clients or auditors in one click.",
    icon: FileOutput,
    tone: "rose" as const,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 sm:py-24">
      <GridPattern className="opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge tone="sky" className="mx-auto">
              How it works
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              From chat message to posted voucher in four steps
            </h2>
            <p className="mt-3 text-balance text-zinc-600">
              No new software for your clients to learn. They send files on
              WhatsApp; you get clean books in Tally.
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="absolute left-[1.375rem] top-3 bottom-3 w-px bg-gradient-to-b from-emerald-300 via-violet-300 to-rose-300 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="relative space-y-10 md:space-y-14">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const alignRight = i % 2 === 1;
              return (
                <Reveal key={s.step} delay={i * 0.06}>
                  <li
                    className={cn(
                      "relative grid grid-cols-[auto_1fr] gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8",
                      alignRight ? "md:[&>*:nth-child(2)]:col-start-2" : "",
                    )}
                  >
                    {/* Left card on desktop for even */}
                    {!alignRight && (
                      <div className="hidden md:block md:col-start-1 md:flex md:justify-end">
                        <Card className="max-w-sm hover:-translate-y-0 border-zinc-200/70">
                          <CardIcon tone={s.tone}>
                            <Icon className="h-5 w-5" />
                          </CardIcon>
                          <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                        </Card>
                      </div>
                    )}

                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-zinc-900 shadow-md ring-2 ring-emerald-500/40 md:col-start-2 md:mx-auto">
                      {s.step}
                    </div>

                    <div className={cn("md:block", alignRight ? "hidden" : "")}>
                      <Card className="md:hidden">
                        <CardIcon tone={s.tone}>
                          <Icon className="h-5 w-5" />
                        </CardIcon>
                        <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                      </Card>
                    </div>

                    {/* Right card on desktop for odd */}
                    {alignRight && (
                      <div className="hidden md:col-start-3 md:block md:justify-self-start">
                        <Card className="max-w-sm hover:-translate-y-0 border-zinc-200/70">
                          <CardIcon tone={s.tone}>
                            <Icon className="h-5 w-5" />
                          </CardIcon>
                          <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                        </Card>
                      </div>
                    )}

                    {!alignRight && (
                      <div className="md:hidden">
                        {/* mobile already shown */}
                      </div>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
