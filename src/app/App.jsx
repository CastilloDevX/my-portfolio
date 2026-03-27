import PageShell from "../components/layout/PageShell.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import AchievementsSection from "../sections/AchievementsSection.jsx";
import ClientsSection from "../sections/ClientsSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";

function App() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ServicesSection />
      <ExperienceSection />
      <ClientsSection />
      <ContactSection />
    </PageShell>
  );
}

export default App;
