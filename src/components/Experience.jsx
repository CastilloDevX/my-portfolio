import Title from "../components/Title.jsx";
import Fx from "../components/Fx.jsx";

export default function Experience() {
  return (
    <div className="section-wrapper">
      <div>
        <Title>Experiencia</Title>

        <div
          className="min-h-[500px] w-full max-w-[1000px] 
            mx-auto flex gap-8 flex-wrap justify-center "
        >
          <ExperienceItem
            title={"Ko’ox API"}
            type={"Project"}
            details={
              "Ko’ox API es un servicio REST que centraliza todas las paradas del transporte público en Campeche, resolviendo la falta de datos accesibles para la ciudadanía. Permite obtener la parada más cercana, filtrar por rutas y consumir información desde cualquier app. Su impacto es comunitario: mejora la movilidad urbana y habilita soluciones móviles modernas. Es un proyecto open source listo para escalar hacia aplicaciones de transporte o paneles municipales."
            }
            leftAligned={true}
          />

          <ExperienceItem
            title={"Space Vision"}
            type={"Hackathon Project"}
            details={
              "Space Vision es una plataforma educativa interactiva creada para NASA Space Apps Challenge, diseñada para visualizar el Sol mediante datos científicos reales. Resuelve la complejidad de enseñar astronomía transformando información técnica en experiencia visual clara. Su impacto destaca en educación STEM, museos y divulgación científica. El proyecto obtuvo Top #4, demostrando alto nivel técnico y creatividad visual."
            }
            leftAligned={false}
          />

          <ExperienceItem
            title={"Salud+"}
            type={"Hackathon Project"}
            details={
              "Salud+ es una API médica que convierte archivos DICOM en imágenes y GIFs accesibles sin infraestructura pesada. Resuelve la dificultad que enfrentan clínicas y pacientes al visualizar ultrasonidos desde dispositivos comunes. Su impacto mejora la experiencia del paciente y moderniza la entrega de estudios médicos. Es una solución escalable y lista para integrarse en hospitales o servicios de diagnóstico."
            }
            leftAligned={true}
          />

          <ExperienceItem
            title={"Mortal Run (Alpha)"}
            type={"Personal Game Project"}
            details={
              "Mortal Run es un juego híbrido 2D/3D con mecánicas de plataformas, doble salto, habilidades y progresión. Resuelve la necesidad de juegos ligeros, fluidos y divertidos sin depender de grandes motores o equipos. Su impacto está en demostrar tu capacidad de crear experiencias pulidas desde cero, incluyendo diseño, mecánicas y sistemas. Es un proyecto con alto potencial de crecimiento en mi marca MrAtomDev."
            }
            leftAligned={false}
          />

          <ExperienceItem
            title={"PIA"}
            type={"Freelance Client Project"}
            details={
              "PIA es una app móvil desarrollada en Kotlin y Jetpack Compose con registro, autenticación, verificación de correo y manejo de sesiones con Firebase. Resuelve la necesidad de contar con un flujo de usuarios seguro, moderno y escalable. Su impacto está en ofrecer un ejemplo profesional de arquitectura móvil para proyectos educativos y empresariales. Ideal como punto de partida para apps productivas reales."
            }
            leftAligned={true}
          />

          <ExperienceItem
            title={"Sportscrap (Comming Soon)"}
            type={"Freelance Client Project"}
            details={
              "Sportscrap es una plataforma web que automatiza la obtención y actualización de datos deportivos mediante scraping profesional. Resuelve la falta de APIs fiables o gratuitas en el sector, permitiendo ofrecer estadísticas limpias, actualizadas y listas para consumo. Su impacto es clave para comunidades deportivas, páginas de resultados y empresas que requieren información en tiempo real. Es un proyecto en expansión con potencial comercial alto."
            }
            leftAligned={false}
          />

          <ExperienceItem
            title={"Earn Robux for Minigames (Comming Soon)"}
            type={"Freelance Client Project"}
            details={
              "Este videojuego integra minijuegos competitivos donde los jugadores ganan monedas intercambiables por Robux mediante microtransacciones. Resuelve la necesidad de sistemas de monetización sostenibles y engagement continuo dentro de Roblox. Su impacto combina entretenimiento, economía interna y retención, ideal para plataformas con comunidades activas. Es un proyecto con fuerte potencial comercial gracias a su modelo “play & earn”."
            }
            leftAligned={false}
          />
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  type,
  details,
  githubLink,
  websiteLink,
  leftAligned,
}) {
  return (
    <div
      className={`relative w-[100%] max-w-[460px] ${
        leftAligned ? "text-left" : "text-right"
      }`}
    >
      <h4 className="font-bold text-4xl mb-2">{title}</h4>

      <p className="font-bold text-2xl mb-5">{type}</p>

      <p className="p-5 border border-white/20 rounded-lg mb-5">{details}</p>

      {githubLink && <a href={githubLink}>GitHub</a>}
      {websiteLink && <a href={websiteLink}>Website</a>}

      {leftAligned ? (
        <Fx
          color={"blue"}
          position="left-[-50px] top-[-150px]"
          className="scale-65"
        />
      ) : (
        <Fx
          color={"purple"}
          position="right-[-50px] top-[-150px]"
          className="scale-65"
        />
      )}
    </div>
  );
}
