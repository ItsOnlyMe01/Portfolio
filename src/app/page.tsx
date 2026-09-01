import {
  Navigation,
  HeroSection,
  ProjectShowcase,
  Experience,
  TechnicalStack,
  EducationContact,
  Footer,
  VisitorTracker,
} from "@/components";

export default function Home() {
  return (
    <>
      <VisitorTracker />
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <ProjectShowcase />
        <Experience />
        <TechnicalStack />
        <EducationContact />
      </main>
      <Footer />
    </>
  );
}
