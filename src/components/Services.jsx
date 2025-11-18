import Title from "../components/Title.jsx";
import Carousel from "../components/Carousel.jsx";
import Carousel3D from "../components/Carousel3D.jsx";
import Fx from "../components/Fx.jsx";

// Images for services icons
// Full-stack Development
import htmlIcon from "../assets/images/icons/html5.svg";
import cssIcon from "../assets/images/icons/css3.svg";
import jsIcon from "../assets/images/icons/javascript.svg";
import tsIcon from "../assets/images/icons/typescript.svg";
import reactIcon from "../assets/images/icons/react.svg";
import nodeIcon from "../assets/images/icons/nodejs.svg";
import pythonIcon from "../assets/images/icons/python.svg";
import bootstrapIcon from "../assets/images/icons/bootstrap.svg";
import tailwindIcon from "../assets/images/icons/tailwind-css.svg";
import nextjsIcon from "../assets/images/icons/nextjs.svg";
import jqueryIcon from "../assets/images/icons/jquery.svg";
import flask from "../assets/images/icons/flask.svg";

// Apps Development
import javaIcon from "../assets/images/icons/java.svg";
import kotlinIcon from "../assets/images/icons/kotlin.svg";
import jetpackIcon from "../assets/images/icons/jetpack-compose.svg";

// Videogames
import robloxStudioIcon from "../assets/images/icons/roblox-studio.svg";
import godotIcon from "../assets/images/icons/godot.svg";
import unityIcon from "../assets/images/icons/unity.svg";

// Desktop Apps Development
import electronIcon from "../assets/images/icons/electron.svg";
import flutterIcon from "../assets/images/icons/flutter.svg";

// Embedded Systems
import esp32Icon from "../assets/images/icons/esp32.svg";
import arduinoIcon from "../assets/images/icons/arduino.svg";
import plcIcon from "../assets/images/icons/plc.svg";

// Data Science
import numpyIcon from "../assets/images/icons/numpy.svg";
import mysqlIcon from "../assets/images/icons/mysql.svg";
import firebaseIcon from "../assets/images/icons/firebase.svg";
import mongodbIcon from "../assets/images/icons/mongodb.svg";

// Scripting (Web Scraping & Automation)
import beautifulsoupIcon from "../assets/images/icons/beautiful-soup.svg";

export default function MyServices() {
    return (
    <div className="section-wrapper">
        <div>
            <Title>Servicios</Title>

            <Carousel
                mode="single"
                autoPlay={false}
                fxPerElement={false}
                items={[
                    <ServiceItem
                        title="Desarrollo Full-stack"
                        desc="Construcción de aplicaciones web completas y escalables desde el frontend hasta el backend, garantizando alto rendimiento, arquitectura limpia y experiencias de usuario fluidas."
                        icons={[
                            htmlIcon,
                            cssIcon,
                            jsIcon,
                            tsIcon,
                            pythonIcon,
                            jqueryIcon,
                            bootstrapIcon,
                            tailwindIcon,

                            reactIcon,
                            nodeIcon,
                            nextjsIcon,
                            flask
                        ]}
                    />,

                    <ServiceItem
                        title="Desarrollo de Aplicaciones"
                        desc="Diseño y desarrollo de aplicaciones móviles y web intuitivas adaptadas a tus necesidades, centradas en la usabilidad, el rendimiento y el mantenimiento a largo plazo."
                        icons={[
                            javaIcon,
                            kotlinIcon,
                            jetpackIcon,
                        ]}
                    />,

                    <ServiceItem
                        title="Videojuegos"
                        desc="Creación de experiencias de juego divertidas, interactivas y optimizadas, incluyendo desarrollo en Roblox con LuaU, mecánicas personalizadas, sistemas de juego y diseño de gameplay centrado en el usuario."
                        icons={[
                            robloxStudioIcon,
                            godotIcon,
                            unityIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Desarrollo de Aplicaciones de Escritorio"
                        desc="Desarrollo de aplicaciones de escritorio multiplataforma usando Flutter y Electron, entregando software rápido, responsive y moderno para Windows, Linux y macOS."
                        icons={[
                            javaIcon,
                            pythonIcon,
                            electronIcon,
                            flutterIcon,
                            jsIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Sistemas Embebidos"
                        desc="Construcción de soluciones embebidas con sistemas ESP32, Arduino y PLC, integrando hardware y software para automatizar, controlar y conectar dispositivos del mundo real."
                        icons={[
                            esp32Icon,
                            arduinoIcon,
                            plcIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Ciencia de Datos"
                        desc="Extracción de insights de datos usando Python y SQL con Pandas, NumPy y herramientas de visualización, además de diseñar bases de datos eficientes para decisiones confiables basadas en datos."
                        icons={[
                            pythonIcon,
                            numpyIcon,
                            mysqlIcon,
                            firebaseIcon,
                            mongodbIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Scripting (Web Scraping & Automatización)"
                        desc="Automatización de tareas repetitivas y recolección de datos estructurados de la web mediante scripts personalizados, mejorando la eficiencia y desbloqueando información valiosa para tus proyectos."
                        icons={[
                            pythonIcon,
                            beautifulsoupIcon,
                            jsIcon,
                        ]}
                    />
                ]}
            />
        </div>
        
        <Fx 
            color={"purple"} 
            position={"left-[50%] top-[100px]"
        }/>

        <Fx color={"blue"} 
            position={"right-[-10%] top-[-30%]"}
            translateX={"0%"}
            translateY={"0%"}
        />
    </div>
    );
}

function ServiceItem({ title, desc, icons}) {
    return (
        <div className="w-[300px] sm:w-[600px] lg:w-[1000px] text-center flex flex-col justify-center items-center">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl">
                {title}
            </p>

            <Carousel3D items={icons} speed={1500} />

            <p className="sm:px-20 text-xl sm:text-2xl">
                {desc}
            </p>
        </div>
    );
}