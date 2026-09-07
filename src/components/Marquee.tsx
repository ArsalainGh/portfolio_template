import { TriangleAlert } from "lucide-react";
import { cn } from "../utils/cn";

const PHRASES = [
  "CAUTION",
  "RESTRICTED SIGNAL",
  "DO NOT CROSS THE A.T. FIELD",
  "TRANSMISSION LOG",
  "MAGI SUPERVISED",
  "PATTERN: ORANGE",
];

export default function Marquee({ className }: { className?: string }) {
  const Copy = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex flex-none items-center" aria-hidden={hidden}>
      {PHRASES.map((p) => (
        <span
          key={p}
          className="flex items-center gap-6 pr-6 font-mono text-[10px] font-medium tracking-[0.4em] text-eva/80"
        >
          {p}
          <TriangleAlert className="size-3 text-eva/50" strokeWidth={1.75} />
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative overflow-hidden border-y border-eva/20 bg-panel2/70 py-2.5", className)}>
      <div className="flex w-max animate-marquee">
        <Copy />
        <Copy hidden />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
