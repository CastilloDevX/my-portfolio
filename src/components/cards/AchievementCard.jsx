import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function AchievementCard({ image, year, description, place }) {
  const placeLabel = typeof place === "number" ? formatPlace(place) : null;
  const badgeTone =
    place === 1
      ? "bg-yellow-400 text-black"
      : place === 2
      ? "bg-slate-300 text-black"
      : place === 3
      ? "bg-orange-400 text-black"
      : "bg-sky-400 text-black";

  return (
    <ScrollReveal as="article" variant="card" className="text-center text-white">
      <div className="relative mb-6 flex justify-center">
        <img
          src={image}
          alt={description}
          loading="lazy"
          className="h-60 w-60 object-contain md:h-80 md:w-80"
        />

        {placeLabel ? (
          <span
            className={`absolute right-4 top-4 rounded-full px-4 py-2 text-lg font-bold md:text-2xl ${badgeTone}`}
          >
            {placeLabel}
          </span>
        ) : null}
      </div>

      <h3 className="mb-3 text-4xl font-bold sm:text-5xl">{year}</h3>
      <p className="mx-auto max-w-xs text-xl sm:max-w-sm sm:text-2xl">{description}</p>
    </ScrollReveal>
  );
}

function formatPlace(place) {
  if (place === 1) {
    return "1st";
  }

  if (place === 2) {
    return "2nd";
  }

  if (place === 3) {
    return "3rd";
  }

  return `${place}th`;
}
