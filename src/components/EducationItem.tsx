import { GraduationCap } from "lucide-react";
import type { EducationEntry } from "../data/portfolio";
import CardFrame from "./CardFrame";
import Reveal from "./Reveal";

export default function EducationItem({ entry, order }: { entry: EducationEntry; order: number }) {
  const id = `EDU-${String(order + 1).padStart(2, "0")}`;

  return (
    <Reveal delay={order * 90} className="relative">
      {/* timeline node + rail (desktop) */}
      <span
        aria-hidden
        className="absolute -left-[9px] top-8 hidden size-[7px] rotate-45 border border-eva bg-ink sm:block"
      />
      <div className="grid gap-3 sm:grid-cols-[150px_1fr] sm:gap-8">
        {/* date column */}
        <div className="pt-1 sm:pt-7 sm:text-right">
          <p className="font-mono text-[10px] tracking-[0.3em] text-eva">{id}</p>
          <p className="mt-1 font-mono text-[11px] leading-relaxed tracking-[0.14em] text-fog">
            {entry.range}
          </p>
        </div>

        {/* card */}
        <CardFrame glow={false}>
          <div className="relative flex items-start gap-4 p-5 sm:p-6">
            <div className="relative shrink-0">
              <div className="cc-sm grid size-12 place-items-center border border-eva/40 bg-ink text-eva transition-colors duration-300 group-hover/card:border-eva group-hover/card:text-eva-bright">
                <GraduationCap className="size-5" strokeWidth={1.5} />
              </div>
              <span className="hazard absolute -bottom-1.5 -right-1.5 h-1.5 w-7 opacity-70" aria-hidden />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-neutral-100 transition-colors duration-200 group-hover/card:text-eva-bright sm:text-xl">
                {entry.institution}
              </h3>
              <p className="mt-1 font-mono text-[12px] tracking-[0.12em] text-fog">{entry.degree}</p>
              {entry.detail && (
                <p className="mt-2.5 text-[13px] leading-relaxed text-dim">{entry.detail}</p>
              )}
            </div>

            <span
              aria-hidden
              className="hidden shrink-0 font-display text-4xl font-bold text-line/70 transition-colors duration-300 group-hover/card:text-eva/25 sm:block"
            >
              {String(order + 1).padStart(2, "0")}
            </span>
          </div>
        </CardFrame>
      </div>
    </Reveal>
  );
}
