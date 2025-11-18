import Title from "../components/Title.jsx";
import Fx from "../components/Fx.jsx";

import shape3 from "../assets/images/shapes/shape3.svg"
import shape4 from "../assets/images/shapes/shape4.svg"

export default function AboutMe() {
  return (
    <div className="section-wrapper">
      <section class="pb-16 pt-8 px-6 md:px-12">
        <Title>Sobre mí</Title>

        <p class="w-full max-w-[1000px] mx-auto text-center text-lg lg:text-2xl leading-loose">
          Soy Jose Manuel Castillo Queh, un desarrollador de software apasionado
          por la innovación y la resolución de problemas sociales. Desde mis
          primeras líneas de código en 2018 hasta los proyectos actuales, he
          participado en hackathones nacionales e internacionales y he creado
          herramientas que facilitan la vida de los usuarios. Mi especialización
          incluye Java, Python y tecnologías web como React, NextJS, Tailwind
          CSS y JavaScript, así como desarrollo de juegos en Roblox (LuaU). Mi
          enfoque combina creatividad, investigación y compromiso social.
        </p>
      </section>

      <Fx color={"purple"} position={"left-[-200px] top-[50px]"} />
      <Fx color={"blue"} position={"right-[-200px] top-[150px]"} />

      <img 
          src={shape3} 
          alt="Shape 3" 
          className="
              absolute z-0
              top-[100px] sm:top-[10px] md:top-[-10px] lg:top-[-55px]
              left-[-20px] sm:left-0 md:left-[20px] lg:left-[100px]
              w-[80px] sm:w-[150px] md:w-[180px] lg:w-[250px]

              rotate-[15deg]
          "
      />

      <img 
          src={shape4} 
          alt="Shape 4" 
          className="
              absolute 
              bottom-[-35px] md:bottom-[-75px] lg:bottom-[-125px]
              right-[0px] sm:right-0 md:right-[20px] lg:right-[50px]
              
              w-[100px] sm:w-[125px] md:w-[150px] lg:w-[200px]
          "
      />
    </div>
  );
}
