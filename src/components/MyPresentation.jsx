import me from "../assets/images/me-roblox.png";
import Fx from "../components/Fx.jsx";

function MyPresentation() {
  return (
    <div className="relative">
        <section className="flex items-center justify-center text-center py-20 px-4 gap-10">
            <div className="mb-6">
                <div className="w-[500px] flex items-center justify-center">
                    <img className="rounded-full" src={me} alt="Me photo (Roblox)" srcset="" />
                </div>
            </div>

            <div className="w-[550px] h-[500px] flex flex-col justify-center px-4 text-left">
                <p className="text-[30px]">Soy el Desarrollador de software</p>
                <h1 className="text-7xl font-extrabold m-0">
                    Jose Manuel<br />Castillo Queh
                </h1>
            </div>
        </section>

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

export default MyPresentation;