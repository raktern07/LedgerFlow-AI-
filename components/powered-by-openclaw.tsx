import Image from "next/image";
import { cn } from "@/lib/utils";

export function PoweredByOpenClaw({
  className,
  variant = "pill",
  invert = false,
}: {
  className?: string;
  variant?: "pill" | "inline";
  /** High-contrast treatment for dark / gradient backgrounds */
  invert?: boolean;
}) {
  if (variant === "inline") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 text-xs",
          invert ? "text-zinc-300" : "text-zinc-500",
          className
        )}
      >
        <span>Powered by</span>
        <Image
          src="/images/openclaw.jpg"
          alt="OpenClaw"
          width={20}
          height={20}
          className={cn(
            "rounded-md ring-1",
            invert ? "ring-white/20" : "ring-zinc-200"
          )}
        />
        <span
          className={cn(
            "font-medium",
            invert ? "text-white" : "text-zinc-700",
          )}
        >
          OpenClaw
        </span>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur shadow-sm",
        invert
          ? "border border-white/15 bg-white/10 text-white"
          : "border border-zinc-200/80 bg-white/70 text-zinc-700",
        className
      )}
    >
      <Image
        src="/images/openclaw.jpg"
        alt="OpenClaw"
        width={18}
        height={18}
        className={cn(
          "rounded-md ring-1",
          invert ? "ring-white/20" : "ring-zinc-200",
        )}
      />
      <span className={cn(invert ? "text-zinc-200" : "text-zinc-500")}>
        Powered by
      </span>
      <span
        className={cn(
          "font-semibold",
          invert ? "text-white" : "text-zinc-800",
        )}
      >
        OpenClaw
      </span>
    </div>
  );
}
