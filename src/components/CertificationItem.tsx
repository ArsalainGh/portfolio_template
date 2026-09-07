import { ArrowUpRight, BadgeCheck } from "lucide-react";
import type { CertificationEntry } from "../data/portfolio";
import CardFrame from "./CardFrame";
import Reveal from "./Reveal";

export default function CertificationItem({
  entry,
  order,
}: {
  entry: CertificationEntry;
  order: number;
}) {
  return (
    <Reveal delay={order * 90} className="h-full">
      <CardFrame className="h-full">
        <div className="flex h-full flex-col p-5">
          <div className="hazard h-1 w-12 opacity-60" aria-hidden />
          <div className="mt-4 flex items-start justify-between gap-3">
            <BadgeCheck
              className="size-6 shrink-0 text-eva transition-transform duration-300 group-hover/card:scale-110"
              strokeWidth={1.5}
            />
            <span className="font-mono text-[9px] tracking-[0.3em] text-dim">
              CERT-{String(order + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="glitch-parent mt-3 font-display text-[15px] font-semibold uppercase leading-snug tracking-wide text-neutral-100 transition-colors duration-200 group-hover/card:text-eva-bright">
            {entry.title}
          </h3>
          <p className="mt-1.5 font-mono text-[11px] tracking-[0.14em] text-dim">
            ISSUED BY <span className="text-fog">{entry.issuer}</span>
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <span className="cc-sm border border-line bg-ink px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-fog">
              {entry.date}
            </span>
            <a
              href={entry.link}
              target="_blank"
              rel="noreferrer"
              className="g-link flex items-center gap-1 font-mono text-[10px] tracking-[0.25em] text-dim"
            >
              VERIFY
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </CardFrame>
    </Reveal>
  );
}
