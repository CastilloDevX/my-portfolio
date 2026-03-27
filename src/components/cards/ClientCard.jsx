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
      className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 text-center md:p-8 lg:flex-row lg:items-center lg:gap-10 lg:text-left"
    >
      <div className="flex justify-center lg:flex-shrink-0">
        <img
          src={clientAvatar}
          alt={clientName}
          loading="lazy"
          className="aspect-square w-[220px] rounded-full object-cover sm:w-[260px] md:w-[300px] lg:w-[340px]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <p className="mb-5 text-lg italic text-white/90 sm:text-xl md:text-2xl">
          "{testimonial}"
        </p>
        <p className="text-base text-white/75 sm:text-lg md:text-xl">
          <span className="text-lg font-bold text-white sm:text-xl md:text-2xl">
            {clientName}
          </span>{" "}
          {clientPosition}
        </p>
      </div>
    </ScrollReveal>
  );
}
