import { useEffect, useState } from "react";
import GlowOrb from "../common/GlowOrb.jsx";
import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function Carousel({
  items = [],
  mode = "single",
  autoPlay = true,
  autoPlayTime = 4000,
  fxPerElement = false,
  className = "",
}) {
  const [current, setCurrent] = useState(0);
  const total = items.length;
  const currentIndex = total ? current % total : 0;

  useEffect(() => {
    if (!autoPlay || total <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % total);
    }, autoPlayTime);

    return () => window.clearInterval(intervalId);
  }, [autoPlay, autoPlayTime, total]);

  if (!total) {
    return null;
  }

  const next = () => setCurrent((previous) => (previous + 1) % total);
  const prev = () => setCurrent((previous) => (previous - 1 + total) % total);

  return (
    <ScrollReveal variant="carousel" className={className}>
      <div className="relative overflow-visible px-2 py-4 md:px-6 md:py-8">
        <div className="relative flex items-center justify-center">
          {total > 1 && <CarouselButton direction="left" onClick={prev} />}
          {mode === "spotlight" ? (
            <SpotlightCarousel
              current={currentIndex}
              fxPerElement={fxPerElement}
              items={items}
              total={total}
            />
          ) : (
            <SingleCarousel
              current={currentIndex}
              fxPerElement={fxPerElement}
              items={items}
            />
          )}
          {total > 1 && <CarouselButton direction="right" onClick={next} />}
        </div>

        {total > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir al slide ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

function SingleCarousel({ current, fxPerElement, items }) {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full shrink-0 px-1 md:px-3">
            <div
              className={`relative flex justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                current === index ? "scale-100 opacity-100" : "scale-[0.92] opacity-45"
              }`}
            >
              {fxPerElement && current === index ? (
                <GlowOrb
                  color="blue"
                  position="left-1/2 top-1/2"
                  className="scale-75 opacity-90"
                />
              ) : null}
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpotlightCarousel({ current, fxPerElement, items, total }) {
  return (
    <div className="relative min-h-[28rem] w-full overflow-hidden md:min-h-[35rem]">
      {items.map((item, index) => {
        const offset = getOffset(index, current, total);
        const isCurrent = offset === 0;
        const isAdjacent = Math.abs(offset) === 1;

        return (
          <div
            key={index}
            className={`absolute left-1/2 top-1/2 w-full max-w-[20rem] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:max-w-[24rem] ${
              isCurrent
                ? "z-20 opacity-100"
                : isAdjacent
                ? "z-10 hidden opacity-45 md:block"
                : "pointer-events-none z-0 opacity-0"
            }`}
            style={{
              transform: `translate(calc(-50% + ${offset * 18}rem), calc(-50% + ${
                Math.abs(offset) * 18
              }px)) scale(${
                isCurrent ? 1 : 0.72
              })`,
            }}
          >
            <div className="relative flex justify-center">
              {fxPerElement && isCurrent ? (
                <GlowOrb
                  color="purple"
                  position="left-1/2 top-1/2"
                  className="scale-[0.78] opacity-90"
                />
              ) : null}
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CarouselButton({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      aria-label={isLeft ? "Slide anterior" : "Siguiente slide"}
      onClick={onClick}
      className={`absolute top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl font-semibold text-white transition duration-300 hover:scale-110 hover:border-white/50 hover:bg-white hover:text-[#110020] md:flex ${
        isLeft ? "left-2 lg:left-6" : "right-2 lg:right-6"
      }`}
    >
      {isLeft ? "<" : ">"}
    </button>
  );
}

function getOffset(index, current, total) {
  let offset = index - current;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}
