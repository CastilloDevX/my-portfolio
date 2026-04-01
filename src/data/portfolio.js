import meImage from "../assets/images/me-roblox.png";
import client1 from "../assets/images/clients/pia-project.jpeg";
import brukyon from "../assets/images/clients/brukyon.webp";
import arduinoIcon from "../assets/images/icons/arduino.svg";
import beautifulSoupIcon from "../assets/images/icons/beautiful-soup.svg";
import bootstrapIcon from "../assets/images/icons/bootstrap.svg";
import cssIcon from "../assets/images/icons/css3.svg";
import electronIcon from "../assets/images/icons/electron.svg";
import esp32Icon from "../assets/images/icons/esp32.svg";
import firebaseIcon from "../assets/images/icons/firebase.svg";
import flaskIcon from "../assets/images/icons/flask.svg";
import flutterIcon from "../assets/images/icons/flutter.svg";
import godotIcon from "../assets/images/icons/godot.svg";
import htmlIcon from "../assets/images/icons/html5.svg";
import javaIcon from "../assets/images/icons/java.svg";
import jetpackIcon from "../assets/images/icons/jetpack-compose.svg";
import jqueryIcon from "../assets/images/icons/jquery.svg";
import jsIcon from "../assets/images/icons/javascript.svg";
import kotlinIcon from "../assets/images/icons/kotlin.svg";
import mongodbIcon from "../assets/images/icons/mongodb.svg";
import mysqlIcon from "../assets/images/icons/mysql.svg";
import nextjsIcon from "../assets/images/icons/nextjs.svg";
import nodeIcon from "../assets/images/icons/nodejs.svg";
import numpyIcon from "../assets/images/icons/numpy.svg";
import plcIcon from "../assets/images/icons/plc.svg";
import pythonIcon from "../assets/images/icons/python.svg";
import reactIcon from "../assets/images/icons/react.svg";
import robloxStudioIcon from "../assets/images/icons/roblox-studio.svg";
import tailwindIcon from "../assets/images/icons/tailwind-css.svg";
import tsIcon from "../assets/images/icons/typescript.svg";
import unityIcon from "../assets/images/icons/unity.svg";
import localImg from "../assets/images/shapes/local-place.svg";
import mexicoImg from "../assets/images/shapes/mexico.svg";
import worldImg from "../assets/images/shapes/world.svg";

export const heroContent = {
  role: "Soy desarrollador de software",
  name: ["Jose Manuel", "Castillo Queh"],
  image: meImage,
};

export const aboutContent =
  "Soy Jose Manuel Castillo Queh, un desarrollador de software apasionado por la innovación y la resolución de problemas sociales. Desde mis primeras líneas de código en 2018 hasta los proyectos actuales, he participado en hackathones nacionales e internacionales y he creado herramientas que facilitan la vida de los usuarios. Mi especialización incluye Java, Python y tecnologías web como React, NextJS, Tailwind CSS y JavaScript, así como desarrollo de juegos en Roblox (LuaU). Mi enfoque combina creatividad, investigación y compromiso social.";

export const achievements = [
  {
    image: worldImg,
    year: "2021",
    description: "Roblox Gamejam DevRel",
    place: 1,
  },
  {
    image: mexicoImg,
    year: "2022",
    description: "Hackathon TCS Empowers",
    place: 1,
  },
  {
    image: mexicoImg,
    year: "2023",
    description: "Hackathon TCS Empowers",
    place: 4,
  },
  {
    image: localImg,
    year: "2023",
    description: "Creatividad e innovación tecnológica CECYTE's",
    place: 1,
  },
  {
    image: mexicoImg,
    year: "2024",
    description: "Hackathon Talent Land",
  },
  {
    image: localImg,
    year: "2025",
    description: "NASA Space Apps Challenge",
    place: 4,
  },
];

export const services = [
  {
    title: "Desarrollo Full-stack",
    description:
      "Construcción de aplicaciones web completas y escalables desde el frontend hasta el backend, garantizando alto rendimiento, arquitectura limpia y experiencias de usuario fluidas.",
    icons: [
      icon(htmlIcon, "HTML5"),
      icon(cssIcon, "CSS3"),
      icon(jsIcon, "JavaScript"),
      icon(tsIcon, "TypeScript"),
      icon(pythonIcon, "Python"),
      icon(jqueryIcon, "jQuery"),
      icon(bootstrapIcon, "Bootstrap"),
      icon(tailwindIcon, "Tailwind CSS"),
      icon(reactIcon, "React"),
      icon(nodeIcon, "Node.js"),
      icon(nextjsIcon, "Next.js"),
      icon(flaskIcon, "Flask"),
    ],
  },
  {
    title: "Desarrollo de Aplicaciones",
    description:
      "Diseño y desarrollo de aplicaciones móviles y web intuitivas adaptadas a tus necesidades, centradas en la usabilidad, el rendimiento y el mantenimiento a largo plazo.",
    icons: [
      icon(javaIcon, "Java"),
      icon(kotlinIcon, "Kotlin"),
      icon(jetpackIcon, "Jetpack Compose"),
    ],
  },
  {
    title: "Videojuegos",
    description:
      "Creación de experiencias de juego divertidas, interactivas y optimizadas, incluyendo desarrollo en Roblox con LuaU, mecánicas personalizadas, sistemas de juego y diseño de gameplay centrado en el usuario.",
    icons: [
      icon(robloxStudioIcon, "Roblox Studio"),
      icon(godotIcon, "Godot"),
      icon(unityIcon, "Unity"),
    ],
  },
  {
    title: "Desarrollo de Aplicaciones de Escritorio",
    description:
      "Desarrollo de aplicaciones de escritorio multiplataforma usando Flutter y Electron, entregando software rápido, responsive y moderno para Windows, Linux y macOS.",
    icons: [
      icon(javaIcon, "Java"),
      icon(pythonIcon, "Python"),
      icon(electronIcon, "Electron"),
      icon(flutterIcon, "Flutter"),
      icon(jsIcon, "JavaScript"),
    ],
  },
  {
    title: "Sistemas Embebidos",
    description:
      "Construcción de soluciones embebidas con sistemas ESP32, Arduino y PLC, integrando hardware y software para automatizar, controlar y conectar dispositivos del mundo real.",
    icons: [
      icon(esp32Icon, "ESP32"),
      icon(arduinoIcon, "Arduino"),
      icon(plcIcon, "PLC"),
    ],
  },
  {
    title: "Ciencia de Datos",
    description:
      "Extracción de insights de datos usando Python y SQL con NumPy y herramientas de visualización, además de diseñar bases de datos eficientes para decisiones confiables basadas en datos.",
    icons: [
      icon(pythonIcon, "Python"),
      icon(numpyIcon, "NumPy"),
      icon(mysqlIcon, "MySQL"),
      icon(firebaseIcon, "Firebase"),
      icon(mongodbIcon, "MongoDB"),
    ],
  },
  {
    title: "Scripting y Automatización",
    description:
      "Automatización de tareas repetitivas y recolección de datos estructurados de la web mediante scripts personalizados, mejorando la eficiencia y desbloqueando información valiosa para tus proyectos.",
    icons: [
      icon(pythonIcon, "Python"),
      icon(beautifulSoupIcon, "Beautiful Soup"),
      icon(jsIcon, "JavaScript"),
    ],
  },
];

export const experiences = [
  {
    title: "Ko'ox API",
    type: "Proyecto",
    details:
      "Ko'ox API es un servicio REST que centraliza todas las paradas del transporte público en Campeche, resolviendo la falta de datos accesibles para la ciudadanía. Permite obtener la parada más cercana, filtrar por rutas y consumir información desde cualquier app. Su impacto es comunitario: mejora la movilidad urbana y habilita soluciones móviles modernas. Es un proyecto open source listo para escalar hacia aplicaciones de transporte o paneles municipales.",
    align: "left",
    accent: "blue",
  },
  {
    title: "Space Vision",
    type: "Proyecto de Hackathon",
    details:
      "Space Vision es una plataforma educativa interactiva creada para NASA Space Apps Challenge, diseñada para visualizar el Sol mediante datos científicos reales. Resuelve la complejidad de enseñar astronomía transformando información técnica en experiencia visual clara. Su impacto destaca en educación STEM, museos y divulgación científica. El proyecto obtuvo Top 4, demostrando alto nivel técnico y creatividad visual.",
    align: "right",
    accent: "purple",
  },
  {
    title: "Salud+",
    type: "Proyecto de Hackathon",
    details:
      "Salud+ es una API médica que convierte archivos DICOM en imágenes y GIFs accesibles sin infraestructura pesada. Resuelve la dificultad que enfrentan clínicas y pacientes al visualizar ultrasonidos desde dispositivos comunes. Su impacto mejora la experiencia del paciente y moderniza la entrega de estudios médicos. Es una solución escalable y lista para integrarse en hospitales o servicios de diagnóstico.",
    align: "left",
    accent: "blue",
  },
  {
    title: "Mortal Run (Alpha)",
    type: "Proyecto Personal",
    details:
      "Mortal Run es un juego híbrido 2D/3D con mecánicas de plataformas, doble salto, habilidades y progresión. Resuelve la necesidad de juegos ligeros, fluidos y divertidos sin depender de grandes motores o equipos. Su impacto está en demostrar la capacidad de crear experiencias pulidas desde cero, incluyendo diseño, mecánicas y sistemas. Es un proyecto con alto potencial de crecimiento para la marca MrAtomDev.",
    align: "right",
    accent: "purple",
  },
  {
    title: "PIA",
    type: "Proyecto Freelance",
    details:
      "PIA es una app móvil desarrollada en Kotlin y Jetpack Compose con registro, autenticación, verificación de correo y manejo de sesiones con Firebase. Resuelve la necesidad de contar con un flujo de usuarios seguro, moderno y escalable. Su impacto está en ofrecer un ejemplo profesional de arquitectura móvil para proyectos educativos y empresariales. Ideal como punto de partida para apps productivas reales.",
    align: "left",
    accent: "blue",
  },
  {
    title: "Sportscrap (Coming Soon)",
    type: "Proyecto Freelance",
    details:
      "Sportscrap es una plataforma web que automatiza la obtención y actualización de datos deportivos mediante scraping profesional. Resuelve la falta de APIs fiables o gratuitas en el sector, permitiendo ofrecer estadísticas limpias, actualizadas y listas para consumo. Su impacto es clave para comunidades deportivas, páginas de resultados y empresas que requieren información en tiempo real. Es un proyecto en expansión con potencial comercial alto.",
    align: "right",
    accent: "purple",
  },
  {
    title: "Earn Robux for Minigames (Coming Soon)",
    type: "Proyecto Freelance",
    details:
      "Este videojuego integra minijuegos competitivos donde los jugadores ganan monedas intercambiables por Robux mediante microtransacciones. Resuelve la necesidad de sistemas de monetización sostenibles y engagement continuo dentro de Roblox. Su impacto combina entretenimiento, economía interna y retención, ideal para plataformas con comunidades activas. Es un proyecto con fuerte potencial comercial gracias a su modelo play and earn.",
    align: "right",
    accent: "purple",
  },
];

export const clients = [
  {
    clientAvatar: client1,
    clientName: "PIA Project",
    clientPosition: "Founder",
    testimonial:
      "Jose Manuel ha sido una experiencia sumamente positiva. Desde el inicio, demostró un alto nivel de responsabilidad y compromiso con cada tarea asignada. Tiene una gran capacidad para aprender por cuenta propia y adaptarse rápidamente a nuevos entornos o tecnologías, lo que fue clave para el éxito del proyecto.",
  },
  {
    clientAvatar: brukyon,
    clientName: "Quick Coins",
    clientPosition: "Founder",
    testimonial:
      "Trabajar con Jose Manuel en mi juego de Roblox ha sido una experiencia impecable. Destaco por encima de todo su sinceridad y atención; siempre estuvo disponible para resolver cualquier duda. Manteníamos llamadas constantes para revisar avances, lo que me dio mucha tranquilidad. Además, su responsabilidad es total: si los estudios le requerían tiempo, me avisaba con días de antelación. En resumen, un profesional educado, responsable y altamente comprometido.",
  },
];

export const contactContent = {
  message:
    "Actualmente busco unirme a un equipo multidisciplinario enfocado en la innovación para el crecimiento global. ¿Tienes algún proyecto en mente? Conectemos.",
  email: "castilloquehjosema@gmail.com",
};

function icon(src, label) {
  return { src, label };
}
