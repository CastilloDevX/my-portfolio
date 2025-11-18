import me from "../assets/images/me-roblox.png";
import Fx from "../components/Fx.jsx";

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
    </div>
  );
}

export default MyPresentation;