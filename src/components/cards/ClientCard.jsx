import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function ClientCard({
  testimonial,
  clientAvatar,
  clientName,
  clientPosition,
}) {
  return (
    <ScrollReveal
      as="article"
      variant="card"
      className="mx-auto flex min-h-[24rem] w-full max-w-[920px] flex-col justify-center gap-5 rounded-[2rem] border border-white/10 bg-white/[0.02] p-5 text-center md:min-h-[25rem] md:p-7 lg:min-h-[22rem] lg:flex-row lg:items-center lg:gap-8 lg:text-left"
    >
      <div className="flex h-[140px] items-center justify-center lg:h-[190px] lg:w-[190px] lg:flex-shrink-0">
        <img
          src={clientAvatar}
          alt={clientName}
          loading="lazy"
          className="aspect-square w-[140px] rounded-full object-cover sm:w-[165px] md:w-[185px] lg:w-[190px]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <p className="mb-4 min-h-[8.5rem] text-sm italic leading-7 text-white/85 sm:min-h-[8rem] sm:text-base md:min-h-[8.5rem] md:text-lg lg:min-h-[9.5rem]">
          "{testimonial}"
        </p>
        <p className="text-sm text-white/75 sm:text-base md:text-lg">
          <span className="text-base font-bold text-white sm:text-lg md:text-xl">
            {clientName}
          </span>{" "}
          {clientPosition}
        </p>
      </div>
    </ScrollReveal>
  );
}
