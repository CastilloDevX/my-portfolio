import me from "../assets/images/me-roblox.png";
import Fx from "../components/Fx.jsx";

import shape1 from "../assets/images/shapes/shape1.svg"
import shape2 from "../assets/images/shapes/shape2.svg"

function MyPresentation() {
  return (
    <div className="relative">
        <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left py-10 md:py-20 px-4 gap-6 md:gap-10">
            <div className="mb-6 lg:mb-0">
                <div className="w-[300px] lg:w-[500px] flex items-center justify-center">
                    <img className="rounded-full w-full" src={me} alt="Me photo (Roblox)" />
                </div>
            </div>

            <div className="w-full sm:w-[90%] md:w-[600px] lg:w-[550px] h-auto lg:h-[500px] flex flex-col justify-center px-4 lg:px-0 lg:text-left text-center">
                <p className="text-xl md:text-[28px] lg:text-[30px] mb-2">
                    Soy el Desarrollador de software
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold m-0">
                    Jose Manuel<br />Castillo Queh
                </h1>
            </div>
        </section>

        <Fx 
            color={"purple"} 
            position={"left-[50%] top-[100px]"}
            className=""
        />

        <Fx 
            color={"blue"} 
            position={"right-[-10%] top-[-30%]"}
            className="right-[50%] lg:right-[-10%]"
            translateX={"0%"}
            translateY={"0%"}
        />

       <img 
            src={shape1} 
            alt="Shape 1" 
            className="
                absolute z-0
                top-[-35px] sm:top-[0px] md:top-[-15px] lg:top-[-50px] 
                right-[0px] sm:right-[25px] md:right-[50px] lg:right-[100px] 
                w-[150px] md:w-[250px] lg:w-[300px]
                rotate-[15deg] lg:rotate-[5deg]
            "
        />

        <img 
            src={shape2} 
            alt="Shape 2" 
            className="
                absolute 
                left-0 sm:left-[50px] lg:left-[calc(50%)]
                bottom-[-100px] lg-[-75px]
                
                w-[185px] md:w-[250px] lg:w-[300px]
                rotate-[5deg]
            "
        />
    </div>
  );
}

export default MyPresentation;