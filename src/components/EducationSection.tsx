import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import EducationItem from "./EducationItem";

export default function EducationSection() {
  return (
    <section id="education" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <SectionHeading
          index="01"
          title="Education"
          note={`DATA LOG // ${String(education.length).padStart(2, "0")} ENTRIES — WHERE THE PILOT WAS TRAINED`}
        />
        <div className="relative space-y-8 sm:border-l sm:border-line/70 sm:pl-8">
          {education.map((entry, i) => (
            <EducationItem key={i} entry={entry} order={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
