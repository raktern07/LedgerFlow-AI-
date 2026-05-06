import {
  Briefcase,
  Calculator,
  Building2,
  BookOpen,
  PieChart,
  Scale,
} from "lucide-react";
import { Card, CardIcon } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

const AUDIENCES = [
  {
    title: "CA Firms",
    desc: "Scale partner-led practices without scaling headcount.",
    icon: Briefcase,
    tone: "emerald" as const,
  },
  {
    title: "Accountants",
    desc: "Cut hours of repetitive entry from every week.",
    icon: Calculator,
    tone: "violet" as const,
  },
  {
    title: "SMEs",
    desc: "Get books that are always up to date — without a finance team.",
    icon: Building2,
    tone: "rose" as const,
  },
  {
    title: "Bookkeeping Teams",
    desc: "Process more clients with the same team size.",
    icon: BookOpen,
    tone: "sky" as const,
  },
  {
    title: "Finance Departments",
    desc: "Faster month-end close with cleaner ledgers.",
    icon: PieChart,
    tone: "amber" as const,
  },
  {
    title: "Tax Consultants",
    desc: "Reliable books make GST and filings effortless.",
    icon: Scale,
    tone: "emerald" as const,
  },
];

export function IdealFor() {
  return (
    <section id="ideal-for" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge tone="violet" className="mx-auto">
              Trusted by accounting professionals
            </Badge>
            <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Built for every team that touches the books
            </h2>
            <p className="mt-3 text-pretty text-zinc-600">
              Whether you handle one company or hundreds, LedgerFlow AI keeps
              entries, ledgers, and reports moving — all from a chat your
              clients already use.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <Card>
                  <CardIcon tone={a.tone}>
                    <Icon className="h-5 w-5" />
                  </CardIcon>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-600">{a.desc}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
