import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Łukasz Chlipała - Fullstack Developer Cloud | Portfolio</title>
        <meta
          name="description"
          content="Jestem Fullstack Developerem specjalizującym się w rozwiązaniach chmurowych. Zapraszam do zapoznania się z moim portfolio i doświadczeniem w technologiach takich jak AWS, React, Next.js i TypeScript."
        />
        <meta
          name="keywords"
          content="Łukasz Chlipała, fullstack developer, chmura, AWS, React, Next.js, TypeScript, portfolio programisty, web development"
        />
        <meta name="author" content="Łukasz Chlipała" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnologiesSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
