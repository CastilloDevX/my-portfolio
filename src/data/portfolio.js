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

import seasonServicePreview from "../assets/images/previews/SeasonService.png";
import movikooxPreview from "../assets/images/previews/Movikoox.png";
import miniDBeaverPreview from "../assets/images/previews/MiniDBeaver.png";
import spaceVisionPreview from "../assets/images/previews/SpaceVision.png";
import mortalRunPreview from "../assets/images/previews/MortalRun.png";
import imKingPreview from "../assets/images/previews/ImKing.png";


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

export const featuredProjects = [
  {
    id: "season-service",
    sortDate: "2026-03-18",
    createdAt: "Marzo 2026",
    title: "Season Service",
    category: "Modulo Open Source para Roblox",
    status: "Open Source",
    accent: "cyan",
    previewAccent: "#67e8f9",
    previewSurface:
      "radial-gradient(circle at 14% 18%, rgba(103,232,249,0.34), transparent 26%), radial-gradient(circle at 82% 22%, rgba(59,130,246,0.28), transparent 24%), linear-gradient(135deg, rgba(8,24,40,0.96), rgba(10,18,36,0.9) 50%, rgba(5,8,18,0.98))",
    previewLabel: "Espacio para screenshot del modulo",
    previewNote:
      "Aqui podras colocar una captura de la documentacion, del API o del flujo de recompensas.",
    previewImage: seasonServicePreview,
    summary:
      "Season Service es un modulo open source que busca darle a la comunidad de Roblox una base limpia para manejar temporadas, progreso y eventos con una API clara. Su enfoque esta en reutilizacion, orden y documentacion para que otros desarrolladores puedan integrarlo rapido en sus juegos.",
    stack: ["LuaU", "Roblox", "Open Source", "Docs"],
    repositories: [],
    previews: [
      projectLink("Documentacion", "https://mratomdev.vercel.app/docs/season-service"),
    ],
  },
  {
    id: "movikoox",
    sortDate: "2025-12-14",
    createdAt: "Diciembre 2025",
    title: "Movikoox",
    category: "Ecosistema de movilidad urbana",
    status: "En desarrollo",
    accent: "cyan",
    previewAccent: "#7dd3fc",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(56,189,248,0.34), transparent 24%), radial-gradient(circle at 76% 20%, rgba(14,165,233,0.24), transparent 22%), linear-gradient(135deg, rgba(9,30,51,0.95), rgba(18,40,84,0.88) 52%, rgba(6,15,29,0.98))",
    previewLabel: "Espacio para preview de app y API",
    previewNote:
      "Este bloque queda listo para mostrar capturas de la app cliente, el mapa o el panel de endpoints.",
    previewImage: movikooxPreview,
    summary:
      "Movikoox agrupa el trabajo de la API y la aplicacion cliente del proyecto KO'OX para acercar informacion de movilidad a la ciudadania campechana. La API centraliza datos utiles para integraciones y la app consume esa informacion para ofrecer una experiencia practica, accesible y lista para seguir creciendo.",
    stack: ["JavaScript", "Frontend", "API REST", "Vercel"],
    repositories: [
      projectLink("GitHub API", "https://github.com/CastilloDevX/movikoox"),
      projectLink("GitHub App", "https://github.com/CastilloDevX/koox"),
    ],
    previews: [
      projectLink("Website", "https://movikoox.vercel.app"),
      projectLink("App en vivo", "https://movikooxweb.vercel.app"),
    ],
  },
  {
    id: "minidbeaver",
    sortDate: "2025-10-15",
    createdAt: "Octubre 2025",
    title: "MiniDBeaver",
    category: "Herramienta de escritorio",
    status: "Prototipo",
    accent: "emerald",
    previewAccent: "#1E1A19",
    previewSurface:
      "radial-gradient(circle at 18% 20%, rgba(110,231,183,0.3), transparent 26%), radial-gradient(circle at 80% 20%, rgba(45,212,191,0.2), transparent 24%), linear-gradient(135deg, rgba(9,33,28,0.96), rgba(12,48,40,0.88) 54%, rgba(6,12,14,0.98))",
    previewLabel: "Espacio para screenshot del cliente SQL",
    previewNote:
      "Puedes poner aqui una captura de tablas, conexiones o resultados de consulta.",
    previewImage: miniDBeaverPreview,
    summary:
      "MiniDBeaver es una propuesta de herramienta de escritorio inspirada en flujos de trabajo de clientes SQL como DBeaver, pero orientada a una experiencia mas ligera, directa y experimental. Su valor esta en simplificar conexiones, exploracion de estructuras y validacion rapida de consultas.",
    stack: ["Java", "SQL", "Desktop UI", "Productividad"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/MiniDBeaver"),
    ],
    previews: [],
  },
  {
    id: "space-vision",
    sortDate: "2025-10-04",
    createdAt: "Octubre 2025",
    title: "SpaceVision",
    category: "Proyecto NASA Space Apps",
    status: "Top 4",
    accent: "violet",
    previewAccent: "#f0abfc",
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(232,121,249,0.3), transparent 26%), radial-gradient(circle at 76% 18%, rgba(96,165,250,0.2), transparent 22%), linear-gradient(135deg, rgba(25,14,43,0.96), rgba(44,20,67,0.88) 54%, rgba(7,10,24,0.98))",
    previewLabel: "Espacio para vista del sitio NASA",
    previewNote:
      "Aqui podras colocar la portada visual, dashboards solares o escenas del proyecto.",
    previewImage: spaceVisionPreview,
    summary:
      "SpaceVision es una plataforma educativa interactiva creada para NASA Space Apps Challenge, pensada para transformar datos cientificos en una experiencia visual clara y atractiva. El proyecto destaca por su enfoque STEM, su capa visual y el resultado obtenido como Top 4.",
    stack: ["HTML", "CSS", "JavaScript", "STEM"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/SpaceVision"),
    ],
    previews: [
      projectLink("Sitio en vivo", "https://space-vision.vercel.app"),
    ],
  },
  {
    id: "mortal-run",
    sortDate: "2025-08-16",
    createdAt: "Agosto 2025",
    title: "Mortal Run",
    category: "Videojuego web",
    status: "Jugable",
    accent: "emerald",
    previewAccent: "#fcd34d",
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(250,204,21,0.28), transparent 25%), radial-gradient(circle at 80% 24%, rgba(34,197,94,0.18), transparent 24%), linear-gradient(135deg, rgba(33,18,10,0.96), rgba(48,29,14,0.88) 50%, rgba(14,15,18,0.98))",
    previewLabel: "Espacio para gameplay de Mortal Run",
    previewNote:
      "Ideal para poner una captura del nivel, interfaz de juego o momentos de plataforma.",
    previewImage: mortalRunPreview,
    summary:
      "Mortal Run es un juego hibrido 2D/3D con mecanicas de plataformas, doble salto, habilidades y progresion. Sirve como demostracion de tu capacidad para construir experiencias jugables con personalidad, cuidando sensacion de movimiento, ritmo y presentacion.",
    stack: ["Gameplay", "Diseño de niveles", "Web", "Marca personal"],
    repositories: [],
    previews: [
      projectLink("Jugar ahora", "https://mratomdev.vercel.app/games/mortal-run"),
    ],
  },
  {
    id: "im-king",
    sortDate: "2025-07-08",
    createdAt: "Julio 2025",
    title: "I'm King",
    category: "Videojuego web",
    status: "Publicado",
    accent: "amber",
    previewAccent: "#fbbf24",
    previewSurface:
      "radial-gradient(circle at 18% 20%, rgba(251,191,36,0.32), transparent 24%), radial-gradient(circle at 80% 22%, rgba(245,158,11,0.18), transparent 22%), linear-gradient(135deg, rgba(45,24,10,0.96), rgba(73,38,13,0.88) 52%, rgba(14,12,10,0.98))",
    previewLabel: "Espacio para gameplay de I'm King",
    previewImage: imKingPreview,
    previewNote:
      "Aqui podras mostrar pantalla inicial, puntuaciones o una escena representativa del juego.",
    summary:
      "I'm King es un juego web enfocado en partidas cortas, lectura visual inmediata y una sensacion arcade mas directa. Funciona muy bien dentro del portafolio porque muestra variedad en tu trabajo de gameplay y en la construccion de experiencias ligeras listas para jugar desde el navegador.",
    stack: ["Arcade", "Game feel", "Web", "Marca personal"],
    repositories: [],
    previews: [
      projectLink("Jugar ahora", "https://mratomdev.vercel.app/games/im-king"),
    ],
  },
  {
    id: "electrorbit",
    sortDate: "2024-11-16",
    createdAt: "Noviembre 2024",
    title: "Electrorbit",
    category: "Herramienta visual de quimica",
    status: "Publicado",
    accent: "violet",
    previewAccent: "#c084fc",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(192,132,252,0.3), transparent 26%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.18), transparent 22%), linear-gradient(135deg, rgba(25,12,36,0.96), rgba(43,20,62,0.88) 52%, rgba(11,10,20,0.98))",
    previewLabel: "Espacio para preview de la tabla periodica",
    previewNote:
      "Reserva este lugar para mostrar la tabla, configuraciones o la navegacion principal.",
    summary:
      "Electrorbit presenta los elementos quimicos desde una experiencia mas visual y practica, con un enfoque especial en configuracion electronica. El proyecto acerca conceptos de quimica a estudiantes y curiosos mediante una navegacion clara y una consulta inmediata.",
    stack: ["HTML", "CSS", "JavaScript", "Educacion STEM"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/electrorbit"),
      projectLink("Website", "https://castillodevx.github.io/electrorbit/")
    ],
    previews: [],
  },
  {
    id: "salud-plus",
    sortDate: "2024-04-04",
    createdAt: "Abril 2024",
    title: "SaludPlus",
    category: "API medica de hackathon",
    status: "Hackathon",
    accent: "cyan",
    previewAccent: "#93c5fd",
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(147,197,253,0.3), transparent 24%), radial-gradient(circle at 78% 20%, rgba(34,211,238,0.18), transparent 24%), linear-gradient(135deg, rgba(12,27,43,0.96), rgba(15,40,68,0.88) 52%, rgba(10,14,21,0.98))",
    previewLabel: "Espacio para preview clinico del proyecto",
    previewNote:
      "Aqui podras mostrar flujos de conversion DICOM, galerias o endpoints de la API.",
    summary:
      "SaludPlus es una API medica que convierte archivos DICOM en imagenes y GIFs accesibles sin infraestructura pesada. El proyecto fue planteado para simplificar la visualizacion de estudios, mejorar la experiencia del paciente y acercar herramientas modernas al sector salud.",
    stack: ["API", "DICOM", "Imagenes", "Salud"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/SaludPlus"),
    ],
    previews: [],
  },
  {
    id: "beesmath",
    sortDate: "2023-09-24",
    createdAt: "Septiembre 2023",
    title: "Beesmath",
    category: "Experiencia web educativa",
    status: "Publicado",
    accent: "amber",
    previewAccent: "#fcd34d",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(252,211,77,0.34), transparent 26%), radial-gradient(circle at 80% 20%, rgba(251,191,36,0.2), transparent 24%), linear-gradient(135deg, rgba(51,30,11,0.96), rgba(74,40,14,0.88) 52%, rgba(22,14,16,0.98))",
    previewLabel: "Espacio para captura del sitio educativo",
    previewNote:
      "La zona queda lista para una imagen del home, actividades o dinamicas para ninos.",
    summary:
      "Beesmath es una pagina web disenada para ninos de 3 a 6 años donde aprender a contar se vuelve una experiencia ludica, amable y facil de explorar. La propuesta combina interacciones claras, feedback visual y recursos sonoros para reforzar el aprendizaje en edades tempranas.",
    stack: ["JavaScript", "HTML", "CSS", "UX infantil"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/beesmath"),
    ],
    previews: [],
  },
  {
    id: "educamp",
    sortDate: "2023-08-20",
    createdAt: "Agosto 2023",
    title: "EduCamp",
    category: "Proyecto de hackathon educativo",
    status: "Hackathon",
    accent: "emerald",
    previewAccent: "#6ee7b7",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(110,231,183,0.3), transparent 24%), radial-gradient(circle at 80% 20%, rgba(74,222,128,0.18), transparent 22%), linear-gradient(135deg, rgba(9,34,27,0.96), rgba(13,53,36,0.88) 54%, rgba(7,12,14,0.98))",
    previewLabel: "Espacio para capturas de EduCamp",
    previewNote:
      "Puedes mostrar aqui el concepto principal o la landing construida para la propuesta.",
    summary:
      "EduCamp reune la idea de hackathon y su presentacion web en un mismo proyecto destacado. Te ayuda a mostrar no solo la solucion planteada, sino tambien tu capacidad para empaquetarla visualmente en una experiencia mas clara, navegable y lista para presentar.",
    stack: ["Hackathon", "Web", "Presentacion", "Educacion"],
    repositories: [
      projectLink(
        "GitHub Proyecto",
        "https://github.com/CastilloDevX/Hightlight_CECYTEC_Projects/tree/main/Edu-Camp"
      ),
      projectLink(
        "GitHub Web",
        "https://github.com/CastilloDevX/Hightlight_CECYTEC_Projects/tree/main/Edu-Camp-Web"
      ),
    ],
    previews: [],
  },
  {
    id: "eco-style",
    sortDate: "2022-09-18",
    createdAt: "Septiembre 2022",
    title: "EcoStyle",
    category: "Concepto web de sostenibilidad",
    status: "Concepto",
    accent: "emerald",
    previewAccent: "#86efac",
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(134,239,172,0.3), transparent 24%), radial-gradient(circle at 80% 22%, rgba(74,222,128,0.18), transparent 22%), linear-gradient(135deg, rgba(12,31,19,0.96), rgba(18,54,29,0.88) 52%, rgba(8,12,11,0.98))",
    previewLabel: "Espacio para preview de EcoStyle",
    previewNote:
      "Este lugar puede mostrar visuales del concepto, branding o la propuesta de interfaz.",
    summary:
      "EcoStyle funciona como una pieza de concepto donde se mezcla una idea de comunicacion visual con una ejecucion web accesible para presentar el proyecto. Dentro del portafolio ayuda a mostrar variedad tematica y sensibilidad de interfaz dentro de propuestas mas creativas.",
    stack: ["HTML", "CSS", "Concepto visual", "Presentacion"],
    repositories: [
      projectLink(
        "GitHub",
        "https://github.com/CastilloDevX/Hightlight_CECYTEC_Projects/tree/main/Eco-Style-main/Practicas%20VSC"
      ),
    ],
    previews: [],
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
    title: "Ploostream",
    type: "Proyecto Freelance",
    details:
      "Sportscrap es una plataforma web que automatiza la obtención y actualización de datos deportivos mediante scraping profesional. Resuelve la falta de APIs fiables o gratuitas en el sector, permitiendo ofrecer estadísticas limpias, actualizadas y listas para consumo. Su impacto es clave para comunidades deportivas, páginas de resultados y empresas que requieren información en tiempo real. Es un proyecto en expansión con potencial comercial alto.",
    align: "right",
    accent: "purple",
  },
  {
    title: "Quick Coins",
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
    clientName: "Quick Coins & Ploostream",
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

function projectLink(label, url) {
  return { label, url };
}
