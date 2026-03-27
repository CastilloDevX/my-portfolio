import { useEffect, useState } from "react";
import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function IconCarousel({ items = [], speed = 1800 }) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (total <= 1) {
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

  return (
    <ScrollReveal variant="carousel" className="w-full">
      <div className="relative flex h-[9rem] w-full items-center justify-center overflow-hidden">
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
      </div>
    </ScrollReveal>
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
