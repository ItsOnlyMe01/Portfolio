import {
  Navigation,
  HeroSection,
  ImpactMetrics,
  ProjectShowcase,
  Experience,
  TechnicalStack,
  EducationContact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <ImpactMetrics />
        <ProjectShowcase />
        <Experience />
        <TechnicalStack />
        <EducationContact />
      </main>
      <Footer />
    </>
  );
}
