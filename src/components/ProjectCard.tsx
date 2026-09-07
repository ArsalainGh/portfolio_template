import { useState } from "react";
import { ArrowUpRight, FolderGit2, User } from "lucide-react";
import type { ProjectEntry } from "../data/portfolio";
import CardFrame from "./CardFrame";
import TechChip from "./TechChip";
import Reveal from "./Reveal";

function CollaboratorAvatar({ name, href }: { name: string; href: string }) {
  const [broken, setBroken] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={`${name} — GitHub`}
      className="cc-sm -ml-1.5 grid size-7 place-items-center overflow-hidden border border-line bg-panel2 text-fog transition-all duration-200 first:ml-0 hover:z-10 hover:-translate-y-0.5 hover:border-eva"
    >
      {broken ? (
        <User className="size-3.5" strokeWidth={1.75} />
      ) : (
        <img
          src={`https://api.dicebear.com/9.x/pixel-art-neutral/svg?seed=${encodeURIComponent(name)}&size=28`}
          alt={`Avatar of ${name}`}
          width={28}
          height={28}
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
    </a>
  );
}

export default function ProjectCard({ entry, order }: { entry: ProjectEntry; order: number }) {
  return (
    <Reveal delay={(order % 2) * 110} className="h-full">
      <CardFrame className="group h-full">
        <article className="flex h-full flex-col">
          {/* preview */}
          <div className="crt-img border-b border-line">
            <img
              src={entry.image}
              alt={`[IMAGE_${order + 1}] preview of ${entry.name}`}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover opacity-80 grayscale-[45%] transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
            />
            <div className="absolute inset-x-0 top-0 z-[4] flex items-start justify-between p-3">
              <span className="cc-sm bg-ink/85 px-2.5 py-1 font-mono text-[9px] tracking-[0.35em] text-eva backdrop-blur-sm">
                P-{String(order + 1).padStart(2, "0")}
              </span>
              <span className="cc-sm bg-ink/85 px-2.5 py-1 font-mono text-[9px] tracking-[0.35em] text-dim backdrop-blur-sm">
                ACADEMIC UNIT
              </span>
            </div>
          </div>

          {/* body */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-neutral-100 transition-colors duration-200 group-hover:text-eva-bright">
              {entry.name}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-fog">{entry.desc}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {entry.tech.map((t, i) => (
                <TechChip key={i} label={t} index={i} />
              ))}
            </ul>

            {/* footer */}
            <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/70 pt-4">
              <div className="flex items-center gap-2.5">
                {entry.collaborators && entry.collaborators.length > 0 && (
                  <>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-dim">W/</span>
                    <div className="flex">
                      {entry.collaborators.map((c) => (
                        <CollaboratorAvatar key={c.name} name={c.name} href={c.href} />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <a
                href={entry.repo}
                target="_blank"
                rel="noreferrer"
                className="g-link group/src flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.3em] text-fog"
              >
                <FolderGit2 className="size-4 text-eva" strokeWidth={1.5} />
                SOURCE
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover/src:-translate-y-0.5 group-hover/src:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </a>
            </div>
          </div>
        </article>
      </CardFrame>
    </Reveal>
  );
}
