import GlowOrb from "../common/GlowOrb.jsx";
import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function ExperienceCard({
  title,
  type,
  details,
  align = "left",
  accent = "blue",
}) {
  const isRight = align === "right";

  return (
    <ScrollReveal
      as="article"
      variant={isRight ? "media-right" : "media-left"}
      className={`relative w-full max-w-[460px] rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8 ${
        isRight ? "md:text-right" : "md:text-left"
      }`}
    >
      <h3 className="mb-2 text-3xl font-bold sm:text-4xl">{title}</h3>
      <p className="mb-5 text-lg font-semibold uppercase tracking-[0.16em] text-white/60">
        {type}
      </p>
      <p className="text-base leading-8 text-white/80 sm:text-lg">{details}</p>

      <GlowOrb
        color={accent}
        position={isRight ? "right-[12%] top-[38%]" : "left-[18%] top-[42%]"}
        translateX="-50%"
        translateY="-50%"
        className="scale-[0.42] opacity-80"
      />
    </ScrollReveal>
  );
}
