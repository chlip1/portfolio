import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 sm:px-8">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
