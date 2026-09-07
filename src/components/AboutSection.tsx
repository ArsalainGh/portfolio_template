import { ScanFace } from "lucide-react";
import { about, identity } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <SectionHeading
          index="04"
          title="About Me"
          note="FILE: PILOT PROFILE // EYES ONLY"
        />

        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          {/* photo */}
          <Reveal className="lg:col-span-2">
            <figure className="cc-tl group relative border border-line bg-panel p-2 transition-all duration-300 hover:border-eva/70 hover:shadow-[0_0_44px_-14px_rgba(255,92,0,0.5)]">
              <div className="crt-img">
                <img
                  src={about.photo}
                  alt={about.photoAlt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover opacity-90 grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
                />
                {/* corner brackets */}
                <span aria-hidden className="absolute left-2 top-2 z-[4] size-5 border-l-2 border-t-2 border-eva" />
                <span aria-hidden className="absolute right-2 top-2 z-[4] size-5 border-r-2 border-t-2 border-eva" />
                <span aria-hidden className="absolute bottom-2 left-2 z-[4] size-5 border-b-2 border-l-2 border-eva" />
                <span aria-hidden className="absolute bottom-2 right-2 z-[4] size-5 border-b-2 border-r-2 border-eva" />
                <span
                  aria-hidden
                  className="absolute right-3 top-3 z-[4] flex items-center gap-1.5 font-mono text-[8px] tracking-[0.3em] text-ember"
                >
                  <span className="size-1.5 animate-pulse-red rounded-full bg-ember" />
                  REC
                </span>
              </div>
              <figcaption className="flex items-center justify-between px-2 py-3 font-mono text-[10px] tracking-[0.25em] text-dim">
                <span className="flex items-center gap-2">
                  <ScanFace className="size-3.5 text-eva" strokeWidth={1.75} />
                  SUBJECT: {identity.fullName}
                </span>
                <span>IMG.00</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* text */}
          <Reveal delay={120} className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.4em] text-eva">
              // PERSONAL RECORD — DECRYPTED
            </p>
            <div className="mt-6 space-y-5 text-[15px] leading-[1.85] text-fog">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="relative pl-5">
                  <span aria-hidden className="absolute left-0 top-[0.72em] h-px w-3 bg-eva/60" />
                  {p}
                </p>
              ))}
            </div>

            {/* spec sheet */}
            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-line/70 pt-8 sm:grid-cols-2">
              {about.spec.map((s) => (
                <div key={s.key} className="border-l-2 border-eva/50 pl-4">
                  <dt className="font-mono text-[9px] tracking-[0.4em] text-dim">{s.key}</dt>
                  <dd className="mt-1 font-mono text-[12px] tracking-[0.1em] text-neutral-200">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
