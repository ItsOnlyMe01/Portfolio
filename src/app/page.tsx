import {
  Navigation,
  HeroSection,
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
        <ProjectShowcase />
        <Experience />
        <TechnicalStack />
        <EducationContact />
      </main>
      <Footer />
    </>
  );
}
