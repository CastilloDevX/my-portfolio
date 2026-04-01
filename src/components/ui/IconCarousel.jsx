import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function IconCarousel({ items = [], autoPlay = false, speed = 1800 }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const total = items.length;

  useEffect(() => {
    if (!autoPlay || total <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % total);
    }, speed);

    return () => window.clearInterval(intervalId);
  }, [speed, total]);

  if (!total) {
    return null;
  }

  const next = () => setCurrent((previous) => (previous + 1) % total);
  const prev = () => setCurrent((previous) => (previous - 1 + total) % total);
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

    if (Math.abs(distance) < 40) {
      return;
    }

    if (distance > 0) {
      next();
      return;
    }

    prev();
  };

  return (
    <ScrollReveal variant="carousel" className="w-full">
      <div
        className="relative flex h-[9rem] w-full items-center justify-center overflow-hidden px-12"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {total > 1 && <CarouselButton direction="left" onClick={prev} />}
        <div className="relative flex h-full w-full items-center justify-center">
          {items.map((item, index) => {
            const offset = getOffset(index, current, total);
            const distance = Math.abs(offset);
            const opacity = Math.max(0.18, 1 - distance * 0.24);
            const scale = Math.max(0.52, 1 - distance * 0.14);
            const translateY = distance === 0 ? -4 : distance === 1 ? 12 : 24;

            return (
              <img
                key={item.label}
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="absolute h-[4.5rem] w-[4.5rem] object-contain transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[5.5rem] md:w-[5.5rem]"
                style={{
                  transform: `translate(${offset * 7.5}rem, ${translateY}px) scale(${scale})`,
                  opacity,
                  filter: distance > 1 ? "blur(2px)" : "none",
                }}
              />
            );
          })}
        </div>
        {total > 1 && <CarouselButton direction="right" onClick={next} />}
      </div>
    </ScrollReveal>
  );
}

function CarouselButton({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      aria-label={isLeft ? "Icono anterior" : "Siguiente icono"}
      onClick={onClick}
      className={`absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg font-semibold text-white transition duration-300 hover:scale-110 hover:border-white/50 hover:bg-white hover:text-[#110020] ${
        isLeft ? "left-1 md:left-2" : "right-1 md:right-2"
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
