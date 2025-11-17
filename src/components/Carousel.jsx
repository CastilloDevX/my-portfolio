import { useEffect, useState } from "react";
import Fx from "../components/Fx.jsx";

export default function Carousel({
  items = [],
  mode = "single",
  autoPlay = true,
  autoPlayTime = 4000,
  fxPerElement = false,
}) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const interval = setInterval(next, autoPlayTime);
    return () => clearInterval(interval);
  }, [current, autoPlay, autoPlayTime, total]);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center mb-[200px]">
      <div className="relative w-full flex justify-center items-center">
        {items.length > 1 && <CarouselButton onClick={prev} position="left" />}

        <div
          className="flex gap-[5px] transition-transform duration-500 ease-in-out"
          style={{
            transform:
              mode === "single"
                ? `translateX(-${current * 100}%)`
                : `translateX(-${current * 33.333}%)`,
          }}
        >
          {mode == "multiple" && (
            <div
              key={"zero-placeholder"}
              className={`
                                my-5
                                flex-shrink-0 flex justify-center items-center
                                transition-all duration-500
                                ${mode && "w-[33%]"}
                            `}
            ></div>
          )}
          {items.map((item, index) => {
            let scaleClass = "scale-100";

            if (mode === "multiple") {
              if (index === current) scaleClass = "scale-100";
              else if (
                index === (current - 1 + total) % total ||
                index === (current + 1) % total
              )
                scaleClass = "scale-75 opacity-70";
              else scaleClass = "scale-75 opacity-35 pointer-events-none";
            }

            return (
              <div
                key={index}
                className={`
                                    my-5
                                    flex-shrink-0 flex justify-center items-center
                                    transition-all duration-500
                                    ${mode === "single" ? "w-full" : "w-1/3"}
                                `}
              >
                <div className={`transition-all duration-500 ${scaleClass}`}>
                  <Fx
                    color={"blue"}
                    position={"left-[-50px]"}
                    className={`
                                            ${
                                              fxPerElement && index === current
                                                ? "opacity-100"
                                                : "opacity-0"
                                            }
                                            duration-500
                                            scale-50
                                        `}
                  />
                  {item}
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 1 && <CarouselButton onClick={next} position="right" />}
      </div>

      {/* BULLETS */}
      <div className="flex space-x-2 mt-[60px]">
        {items.length > 1 &&
          items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                                w-3 h-3 rounded-full transition
                                ${i === current ? "bg-white" : "bg-gray-500"}
                            `}
            />
          ))}
      </div>
    </div>
  );
}

function CarouselButton({ onClick, position }) {
  const isLeft = position === "left";
  return (
    <button
      onClick={onClick}
      className={`
                w-[40px] h-[40px]
                absolute top-1/2 -translate-y-1/2 z-10
                flex justify-center items-center 
                p-3 text-white font-bold text-2xl
                opacity-80 hover:opacity-100
                rounded-full
                hover:bg-white hover:text-black
                scale-80 hover:scale-110
                transition-all duration-300
                hover:shadow-md hover:shadow-white
                ring-4 ring-white
                ${isLeft ? "left-[30px]" : "right-[30px]"}
            `}
    >
      {isLeft ? "<" : ">"}
    </button>
  );
}
