import Title from "../components/Title.jsx";
import Fx from "../components/Fx.jsx";

export default function Experience() {
  return (
    <div className="section-wrapper">
      <div>
        <Title>Contact</Title>

        <div className="h-[400px] mx-auto max-w-[600px] text-center flex flex-col  items-center gap-6">
          <p className="mb-4 font-medium text-2xl">
            Actualmente busco unirme a un equipo multidisciplinario enfocado en
            la innovación para el crecimiento global. ¿tienes algún proyecto en
            mente? ¡Conectemos!
          </p>

          <a
            className="font-bold text-2xl underline-offset-8 hover:scale-110 transition-transform"
            href="mailto:castilloquehjosema@gmail.com"
          >
            castilloquehjosema@gmail.com
          </a>
        </div>
      </div>

      <Fx color={"purple"} position={"left-[-20%] top-[0px]"} />
      <Fx color={"purple"} position={"right-[-20%] top-[100px]"} />
    </div>
  );
}
