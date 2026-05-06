import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dot =
    size === "sm"
      ? "h-7 w-7"
      : size === "lg"
        ? "h-10 w-10"
        : "h-8 w-8";
  const text =
    size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-[0_6px_18px_-6px_rgba(16,185,129,0.55)]",
          dot
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M4 7h16" />
          <path d="M4 12h10" />
          <path d="M4 17h7" />
          <path d="M16 14l4 4-4 4" />
        </svg>
        <span className="absolute -inset-0.5 rounded-xl bg-emerald-400/30 blur-[6px] -z-10" />
      </span>
      <span
        className={cn(
          "font-semibold tracking-tight text-zinc-900",
          text
        )}
      >
        LedgerFlow<span className="text-emerald-600"> AI</span>
      </span>
    </div>
  );
}
