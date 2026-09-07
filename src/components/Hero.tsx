import { useEffect, useState } from "react";
import { ChevronDown, TerminalSquare } from "lucide-react";
import { identity, terminalLines } from "../data/portfolio";
import Socials from "./Socials";
import Marquee from "./Marquee";

/* Types out the MAGI terminal lines, keeping the last few committed. */
function useTypewriter(all: string[]) {
  const [done, setDone] = useState<string[]>([]);
  const [line, setLine] = useState("");

  useEffect(() => {
    let idx = 0;
    let char = 0;
    let alive = true;
    let timer: number;

    const step = () => {
      if (!alive) return;
      const target = all[idx % all.length];
      char += 1;
      setLine(target.slice(0, char));
      if (char >= target.length) {
        timer = window.setTimeout(() => {
          if (!alive) return;
          setDone((d) => [...d, target].slice(-3));
          setLine("");
          char = 0;
          idx += 1;
          timer = window.setTimeout(step, 320);
        }, 1600);
      } else {
        timer = window.setTimeout(step, 22 + Math.random() * 46);
      }
    };
    timer = window.setTimeout(step, 600);
    return () => {
      alive = false;
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { done, line };
}

export default function Hero() {
  const { done, line } = useTypewriter(terminalLines);

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* ghost unit numeral */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-24 select-none font-display text-[38vw] font-bold leading-none text-transparent lg:text-[22rem]"
        style={{ WebkitTextStroke: "1px rgba(255,92,0,0.10)" }}
      >
        00
      </div>
      {/* vertical flavor text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/3 hidden select-none font-mono text-[10px] tracking-[0.5em] text-dim/60 xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        TOKYO-3 // GEOFRONT TERMINAL 00 — SIGNAL VERIFIED
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1100px] flex-1 items-center gap-14 px-5 pb-28 pt-36 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10 lg:pt-40">
        {/* ---------------- left: identity ---------------- */}
        <div>
          {/* magi terminal */}
          <div className="cc mb-9 inline-flex w-full max-w-xl flex-col border border-line bg-panel/80 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line/70 pb-2 font-mono text-[10px] tracking-[0.3em] text-dim">
              <TerminalSquare className="size-3.5 text-eva" strokeWidth={1.75} />
              MAGI TERMINAL 01 — CHANNEL OPEN
            </div>
            <div className="min-h-[74px] pt-2 font-mono text-[11px] leading-[1.7] tracking-wider">
              {done.map((l, i) => (
                <p key={`${l}-${i}`} className="text-dim">
                  <span className="text-eva/60">&gt; </span>
                  {l}
                </p>
              ))}
              <p className="text-acid">
                <span className="text-eva/60">&gt; </span>
                {line}
                <span className="ml-0.5 inline-block h-[11px] w-[7px] translate-y-[1px] bg-eva animate-blink" />
              </p>
            </div>
          </div>

          <p className="font-mono text-[11px] tracking-[0.45em] text-eva">
            // HELLO, WORLD. SIGNAL RECEIVED.
          </p>

          <h1 className="mt-5 font-display text-[15vw] font-bold uppercase leading-[0.92] tracking-tight text-neutral-100 sm:text-6xl md:text-7xl lg:text-[4.9rem]">
            <span className="glitch flicker" data-text={identity.fullName}>
              {identity.fullName}
            </span>
          </h1>

          <div className="mt-6 flex items-stretch">
            <span className="hazard w-2.5" aria-hidden />
            <p className="flex-1 border-y border-r border-line bg-panel px-4 py-2.5 font-display text-base font-semibold uppercase tracking-[0.18em] text-eva sm:text-lg">
              {identity.title}
            </p>
          </div>

          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-fog">{identity.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#education"
              className="cc-tl group relative overflow-hidden border border-eva bg-eva px-6 py-3 font-display text-[12px] font-bold uppercase tracking-[0.3em] text-ink transition-all duration-200 hover:bg-transparent hover:text-eva hover:shadow-[0_0_32px_-8px_rgba(255,92,0,0.8)]"
            >
              OPEN LOG
              <span className="absolute inset-y-0 left-0 w-8 -translate-x-10 skew-x-[-20deg] bg-white/30 transition-transform duration-500 group-hover:translate-x-[300%]" aria-hidden />
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="cc-tl border border-line bg-panel px-6 py-3 font-display text-[12px] font-bold uppercase tracking-[0.3em] text-fog transition-all duration-200 hover:border-eva/60 hover:text-eva-bright"
            >
              CONTACT
            </a>
            <Socials className="ml-0 sm:ml-2" />
          </div>
        </div>

        {/* ---------------- right: instrument panel ---------------- */}
        <div className="cc-tl relative hidden border border-line bg-panel/70 p-5 backdrop-blur lg:block">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-dim">
            <span>TGT // PILOT SCOPE</span>
            <span className="text-ember animate-pulse-red inline-block size-2 rounded-full bg-ember" />
          </div>

          {/* radar */}
          <div className="relative mx-auto mt-5 aspect-square max-w-[300px]">
            <div className="absolute inset-0 rounded-full border border-eva/20" />
            <div className="absolute inset-[14%] rounded-full border border-eva/15" />
            <div className="absolute inset-[28%] rounded-full border border-eva/10" />
            <div className="absolute inset-[42%] rounded-full border border-eva/25" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-eva/15" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-eva/15" />
            {/* sweep */}
            <div
              className="absolute inset-0 rounded-full animate-radar"
              style={{
                background: "conic-gradient(from 0deg, rgba(255,92,0,0.38), transparent 70deg, transparent)",
                opacity: 0.5,
              }}
            />
            {/* blips */}
            <span className="absolute left-[30%] top-[26%] size-1.5 rounded-full bg-eva shadow-[0_0_10px_rgba(255,92,0,0.9)]" />
            <span className="absolute left-[64%] top-[58%] size-1 rounded-full bg-acid/90" />
            <span className="absolute left-[48%] top-[74%] size-1 rounded-full bg-ember/90" />
            <p className="absolute bottom-2 right-3 font-mono text-[9px] tracking-[0.25em] text-dim">
              SCAN 360°
            </p>
          </div>

          {/* readouts */}
          <dl className="mt-6 space-y-3 font-mono text-[10.5px] tracking-[0.2em]">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-dim">SYNC RATE</dt>
              <dd className="flex-1">
                <span className="block h-1.5 bg-line">
                  <span className="block h-full w-[94%] bg-gradient-to-r from-eva/40 to-eva" />
                </span>
              </dd>
              <dd className="text-eva">94.1%</dd>
            </div>
            {["MELCHIOR-1", "BALTHASAR-2", "CASPAR-3"].map((m) => (
              <div key={m} className="flex items-center justify-between">
                <dt className="text-dim">{m}</dt>
                <dd className="text-acid">PASS</dd>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-line/70 pt-3">
              <dt className="text-dim">LOCATION</dt>
              <dd className="text-fog">{identity.location}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* scroll cue */}
      <div className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] tracking-[0.5em] text-dim">SCROLL</span>
        <ChevronDown className="size-4 animate-bounce text-eva" strokeWidth={1.75} />
      </div>

      <Marquee className="relative z-10" />
    </section>
  );
}
