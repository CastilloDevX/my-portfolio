import Title from "../components/Title.jsx";
import Carousel from "../components/Carousel.jsx";
import Fx from "../components/Fx.jsx";

import worldImg from "../assets/images/shapes/world.svg";
import mexicoImg from "../assets/images/shapes/mexico.svg";
import localImg from "../assets/images/shapes/local-place.svg";

export default function Achievements() {
  return (
    <div className="section-wrapper">
      <div>
        <Title>Logros</Title>
        <Carousel
          mode="multiple"
          autoPlay={true}
          fxPerElement={true}
          items={[
            <AchievementCard
              image={worldImg}
              year="2021"
              desc="Roblox Gamejam DevRel"
              place={1}
            />,
            <AchievementCard
              image={mexicoImg}
              year="2022"
              desc="Hackathon TCS Empowers"
              place={1}
            />,
            <AchievementCard
              image={mexicoImg}
              year="2023"
              desc="Hackathon TCS Empowers"
              place={4}
            />,
            <AchievementCard
              image={localImg}
              year="2023"
              desc="Creatividad e innovación tecnologica CECYTE's"
              place={1}
            />,
            <AchievementCard
              image={mexicoImg}
              year="2024"
              desc="Hackathon Talend Land"
            />,
            <AchievementCard
              image={localImg}
              year="2025"
              desc="NASA Space Apps Challenge"
              place={4}
            />,
          ]}
        />
      </div>

      <Fx color={"purple"} position={"left-[-20%] top-[100px]"} />
      <Fx color={"purple"} position={"right-[-20%] top-[100px]"} />
    </div>
  );
}

function AchievementCard({ image, year, desc, place }) {
  const bgColor =
    place == 1
      ? "bg-yellow-400"
      : place == 2
      ? "bg-gray-400"
      : place == 3
      ? "bg-orange-400"
      : "bg-blue-400";

  const placeText =
    place == 1 ? "1st" : place == 2 ? "2nd" : place == 3 ? "3rd" : place + "th";

  return (
    <div className="text-white text-center rounded-xl">
      <div className="mb-5 relative flex justify-center items-center">
        <img src={image} alt="World Image" 
          className="w-60 h-60 md:w-80 md:h-80 mx-auto" 
        />

        {place && (
          <div
            className={`
                    absolute top-3 right-3
                    text-white 
                    font-bold text-2xl px-4 py-2 rounded-full
                    ${bgColor}
                `}
          >
            {placeText}
          </div>
        )}
      </div>

      <div>
        <h3 className="font-bold text-4xl sm:text-5xl mb-3">{year}</h3>
        <p className="text-2xl sm:text-3xl mb-3">{desc}</p>
      </div>
    </div>
  );
}
