import { ArrowUp } from "lucide-react";
import { identity } from "../data/portfolio";
import Socials from "./Socials";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

export default function FooterSection() {
  return (
    <footer className="relative">
      <Marquee />
      <div className="relative overflow-hidden border-t border-line/60 pt-20">
        {/* ghost watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-8 select-none text-center font-display text-[24vw] font-bold leading-none text-transparent sm:text-[13rem]"
          style={{ WebkitTextStroke: "1px rgba(255,92,0,0.06)" }}
        >
          EOT
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center px-5 pb-6 pt-8 text-center sm:px-8">
          <Reveal>
            <p className="glitch-parent font-display text-2xl font-bold uppercase tracking-[0.12em] text-neutral-100 sm:text-4xl">
              <span className="glitch" data-text={identity.fullName}>
                {identity.fullName}
              </span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-4 max-w-md font-mono text-[10.5px] leading-relaxed tracking-[0.3em] text-dim">
              “GOD'S IN HIS HEAVEN — ALL'S RIGHT WITH THE WORLD.”
            </p>
          </Reveal>

          <Reveal delay={140}>
            <Socials className="mt-8" />
          </Reveal>

          <Reveal delay={200} className="mt-12 w-full">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-line" />
              <a
                href="#top"
                aria-label="Back to top"
                className="cc-sm grid size-9 place-items-center border border-line bg-panel text-dim transition-all duration-200 hover:-translate-y-1 hover:border-eva hover:text-eva"
              >
                <ArrowUp className="size-4" strokeWidth={1.75} />
              </a>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <p className="mt-8 font-mono text-[10.5px] tracking-[0.28em] text-dim">
            {identity.fullName} © {identity.year}. ALL RIGHTS RESERVED.
          </p>
          <p className="mt-3 pb-4 font-mono text-[10px] tracking-[0.45em] text-eva/70">
            END OF TRANSMISSION
            <span className="ml-2 inline-block h-[10px] w-[6px] translate-y-[1px] bg-eva animate-blink" />
          </p>
        </div>

        <div className="hazard h-1.5 w-full opacity-80" aria-hidden />
      </div>
    </footer>
  );
}
