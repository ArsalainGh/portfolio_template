import { certifications } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import CertificationItem from "./CertificationItem";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <SectionHeading
          index="02"
          title="Certifications"
          note="AUTHORIZATION RECORDS // CLEARED FOR INSPECTION"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((entry, i) => (
            <CertificationItem key={i} entry={entry} order={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
