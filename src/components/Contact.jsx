import Title from "../components/Title.jsx";
import Fx from "../components/Fx.jsx";

import shape3 from "../assets/images/shapes/shape3.svg"

export default function Experience() {
  return (
    <div className="section-wrapper">
      <div>
        <Title>Contacto</Title>

        <div className="h-[400px] mx-auto max-w-[600px] text-center flex flex-col items-center gap-6">
          <p className="mb-4 font-medium text-xl sm:text-2xl">
            Actualmente busco unirme a un equipo multidisciplinario enfocado en
            la innovación para el crecimiento global. ¿tienes algún proyecto en
            mente? ¡Conectemos!
          </p>

          <a
            className="font-bold text-xl sm:text-2xl underline-offset-8 hover:scale-110 transition-transform"
            href="mailto:castilloquehjosema@gmail.com"
          >
            castilloquehjosema@gmail.com
          </a>
        </div>
      </div>

      <Fx color={"purple"} position={"left-[-20%] top-[0px]"} />
      <Fx color={"purple"} position={"right-[-20%] top-[100px]"} />

      <img 
          src={shape3} 
          alt="Shape 3" 
          className="
              hidden
              absolute z-0
              top-[-75px] sm:top-[-70px] md:top-[-80px] lg:top-[-150px]
              left-[-20px] sm:left-0 md:left-[20px] lg:left-[10%]
              w-[150px] md:w-[180px] lg:w-[250px]

              rotate-[0deg]
          "
      />

    </div>
  );
}
