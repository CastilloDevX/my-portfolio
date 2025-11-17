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
                        title="Full-stack Development"
                        desc="Building complete, scalable web applications from frontend to backend, ensuring high performance, clean architecture, and seamless user experiences."
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
                        title="Apps Development"
                        desc="Designing and developing intuitive mobile and web apps tailored to your needs, focused on usability, performance, and long-term maintainability."
                        icons={[
                            javaIcon,
                            kotlinIcon,
                            jetpackIcon,
                        ]}
                    />,

                    <ServiceItem
                        title="Videogames"
                        desc="Creating fun, interactive, and optimized gaming experiences, including Roblox development with LuaU, custom mechanics, game systems, and user-focused gameplay design."
                        icons={[
                            robloxStudioIcon,
                            godotIcon,
                            unityIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Desktop Apps Development"
                        desc="Developing cross-platform desktop applications using Flutter and Electron, delivering fast, responsive, and modern software for Windows, Linux, and macOS."
                        icons={[
                            javaIcon,
                            pythonIcon,
                            electronIcon,
                            flutterIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Embedded Systems"
                        desc="Building embedded solutions with ESP32, Arduino, and PLC systems, integrating hardware and software to automate, control, and connect real-world devices."
                        icons={[
                            esp32Icon,
                            arduinoIcon,
                            plcIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Data Science"
                        desc="Extracting insights from data using Python and SQL with Pandas, NumPy, and visualization tools, plus designing efficient databases for reliable data-driven decisions."
                        icons={[
                            pythonIcon,
                            numpyIcon,
                            mysqlIcon,
                            firebaseIcon,
                            mongodbIcon
                        ]}
                    />,

                    <ServiceItem
                        title="Scripting (Web Scraping & Automation)"
                        desc="Automating repetitive tasks and collecting structured data from the web through custom scripts, improving efficiency and unlocking valuable information for your projects."
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
        <div className="">
            <h3 
                className="text-5xl text-center mb-5 font-semibold"
            >
                {title}
            </h3>

            <Carousel3D
                items={icons}
                speed={2500}
            />
            <p 
                className="text-3xl text-center max-w-3xl mx-auto mt-10"
            >
                {desc}
            </p>
        </div>
    );
}