import Title from "../components/Title.jsx";
import Fx from "../components/Fx.jsx";

export default function AboutMe() {
  return (
    <div className="section-wrapper">
      <section class="py-16 px-6 md:px-12">
        <Title>Sobre mí</Title>

        <p class="px-[200px] mx-auto text-center text-2xl leading-loose">
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
    </div>
  );
}
