import { useEffect, useMemo, useRef, useState } from "react";
import ProjectSpotlightCard from "../components/cards/ProjectSpotlightCard.jsx";
import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import ScrollReveal from "../components/motion/ScrollReveal.jsx";
import { featuredProjects } from "../data/portfolio.js";

export default function ProjectsSection() {
  const projects = useMemo(
    () =>
      [...featuredProjects].sort(
        (left, right) => new Date(right.sortDate) - new Date(left.sortDate)
      ),
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (!projects.length) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % projects.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projects.length]);

  if (!projects.length) {
    return null;
  }

  const activeProject = projects[activeIndex];

  const next = () => setActiveIndex((current) => (current + 1) % projects.length);
  const prev = () =>
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? null;

    touchStartX.current = null;

    if (startX === null || endX === null) {
      return;
    }

    const distance = startX - endX;

    if (Math.abs(distance) < 48) {
      return;
    }

    if (distance > 0) {
      next();
      return;
    }

    prev();
  };

  return (
    <PageSection id="projects" className="xl:min-h-[100svh]">
      <div className="relative mx-auto max-w-7xl">
        <GlowOrb
          color="purple"
          position="left-1/2 top-[28%]"
          translateX="-80%"
          translateY="-30%"
          className="scale-[0.95] opacity-90"
        />
        <GlowOrb
          color="blue"
          position="left-1/2 top-[62%]"
          translateX="8%"
          translateY="-30%"
          className="scale-[0.82] opacity-75"
        />

        <SectionTitle>Proyectos Destacados</SectionTitle>

        <ScrollReveal variant="carousel" className="mt-8 min-w-0">
          <div
            className="relative overflow-hidden rounded-[2rem] p-3 shadow-[0_35px_90px_rgba(2,6,23,0.42)] md:p-4"
            style={{ background: activeProject.previewSurface }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,18,0.08),rgba(4,6,12,0.38))]" />
            <div className="relative mb-3 flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/12">
                <div
                  className="h-full rounded-full bg-white/80 transition-[width] duration-500 ease-out"
                  style={{
                    width: `${((activeIndex + 1) / projects.length) * 100}%`,
                  }}
                />
              </div>
              <span className="rounded-full border border-white/12 bg-black/20 px-2.5 py-1 text-xs font-medium text-white/72">
                {formatCount(activeIndex + 1)}/{formatCount(projects.length)}
              </span>
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] px-3 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.12]"
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] px-3 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.12]"
              >
                {">"}
              </button>
            </div>

            <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_164px]">
              <div className="min-w-0 min-h-0">
                <ProjectSpotlightCard
                  key={activeProject.id}
                  project={activeProject}
                />
              </div>

              <aside className="min-w-0 min-h-0 rounded-[1.4rem] bg-black/14 p-2 backdrop-blur-sm">
                <div className="project-rail-scroll flex gap-2 overflow-x-auto pb-2 xl:max-h-[640px] xl:flex-col xl:overflow-y-auto xl:overflow-x-hidden xl:pb-0 xl:pr-1">
                  {projects.map((project, index) => (
                    <TimelineButton
                      key={project.id}
                      isActive={index === activeIndex}
                      project={project}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageSection>
  );
}

function TimelineButton({ isActive, onClick, project }) {
  const accentMap = {
    amber: "from-amber-300/20 via-orange-300/6 to-transparent border-amber-200/20",
    violet: "from-fuchsia-300/18 via-violet-300/8 to-transparent border-fuchsia-200/20",
    emerald: "from-emerald-300/18 via-teal-300/8 to-transparent border-emerald-200/20",
    cyan: "from-cyan-300/18 via-sky-300/8 to-transparent border-cyan-200/20",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative min-w-[138px] overflow-hidden rounded-[0.95rem] px-3 py-2 text-left transition duration-300 xl:min-w-0 ${
        isActive
          ? "bg-white/[0.1] shadow-[0_18px_36px_rgba(2,6,23,0.24)]"
          : "bg-white/[0.03] hover:bg-white/[0.06]"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          accentMap[project.accent] ?? accentMap.cyan
        } transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-80"
        }`}
      />
      <div className="relative min-w-0">
        <h3 className="truncate text-[13px] font-semibold text-white md:text-sm">
          {project.title}
        </h3>
      </div>
    </button>
  );
}

function formatCount(value) {
  return String(value).padStart(2, "0");
}
