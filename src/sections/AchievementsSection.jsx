import AchievementCard from "../components/cards/AchievementCard.jsx";
import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import Carousel from "../components/ui/Carousel.jsx";
import { achievements } from "../data/portfolio.js";

export default function AchievementsSection() {
  return (
    <PageSection id="achievements">
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle>Logros</SectionTitle>

        <div className="relative">
          <GlowOrb
            color="purple"
            position="left-1/2 top-[52%]"
            translateX="-80%"
            translateY="-50%"
            className="scale-[1.02] opacity-92"
          />
          <GlowOrb
            color="blue"
            position="left-1/2 top-[56%]"
            translateX="10%"
            translateY="-44%"
            className="scale-[0.82] opacity-72"
          />

          <Carousel
            mode="spotlight"
            autoPlay={false}
            items={achievements.map((achievement) => (
              <AchievementCard key={`${achievement.year}-${achievement.description}`} {...achievement} />
            ))}
          />
        </div>
      </div>
    </PageSection>
  );
}
