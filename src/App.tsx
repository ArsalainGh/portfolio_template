import BackgroundFX from "./components/BackgroundFX";
import Hud from "./components/Hud";
import Hero from "./components/Hero";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/CertificationsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-neutral-100 antialiased">
      <BackgroundFX />
      <Hud />
      <main className="relative z-10">
        <Hero />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <FooterSection />
    </div>
  );
}
