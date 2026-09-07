import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[720px] max-w-full -translate-x-1/2 bg-eva/[0.05] blur-[120px]"
      />
      <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <SectionHeading
          index="03"
          title="Academic Projects"
          note="FIELD EXPERIMENTS // CONDUCTED IN CONTROLLED ENVIRONMENTS"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((entry, i) => (
            <ProjectCard key={i} entry={entry} order={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
