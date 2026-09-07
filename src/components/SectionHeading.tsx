import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note: string;
}) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="glitch-parent">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.35em] text-dim">
          <span className="text-eva">[ {index} ]</span>
          <span className="h-px w-10 bg-eva/50" />
          <span className="uppercase">SEC.{index} // ACCESS GRANTED</span>
        </div>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-neutral-100 sm:text-5xl">
            <span className="glitch" data-text={title}>
              {title}
            </span>
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] text-dim uppercase">{note}</p>
        </div>
        <div className="mt-5 h-[3px] w-full bg-line">
          <div className="h-full w-24 bg-eva" />
        </div>
      </div>
    </Reveal>
  );
}
