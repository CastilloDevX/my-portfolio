import ExperienceCard from "../components/cards/ExperienceCard.jsx";
import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import { experiences } from "../data/portfolio.js";

export default function ExperienceSection() {
  return (
    <PageSection id="experience">
      <div className="relative mx-auto max-w-6xl">
        <GlowOrb
          color="purple"
          position="left-1/2 top-[46%]"
          translateX="-88%"
          translateY="-32%"
          className="scale-[0.78] opacity-85"
        />
        <GlowOrb
          color="blue"
          position="left-1/2 top-[54%]"
          translateX="4%"
          translateY="-18%"
          className="scale-[0.68] opacity-70"
        />
        <SectionTitle>Experiencia</SectionTitle>

        <div className="mx-auto grid max-w-5xl justify-items-center gap-8 md:grid-cols-2 md:items-start">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </PageSection>
  );
}
