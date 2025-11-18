import Title from "../components/Title.jsx";
import Carousel from "../components/Carousel.jsx";
import Fx from "../components/Fx.jsx";

import client1 from "../assets/images/clients/pia-project.jpeg";

export default function Experience() {
  return (
    <div className="section-wrapper">
      <div className="px-4 sm:px-6 md:px-8">
        <Title>Clientes</Title>
        <Carousel
          mode="single"
          autoPlay={true}
          fxPerElement={false}
          items={[
            <ClientTestimonial
              clientAvatar={client1}
              clientName={"PIA Project"}
              clientPosition={"Founder"}
              testimonial={
                "Jose Manuel ha sido una experiencia sumamente positiva. Desde el inicio, demostró un alto nivel de responsabilidad y compromiso con cada tarea asignada. Tiene una gran capacidad para aprender por cuenta propia y adaptarse rápidamente a nuevos entornos o tecnologías, lo que fue clave para el éxito del proyecto."
              }
            />,
          ]}
        />
      </div>

      <Fx color={"blue"} position={"left-[-20%] top-[100px]"} />
      <Fx color={"blue"} position={"right-[-20%] top-[100px]"} />
    </div>
  );
}

function ClientTestimonial({
  testimonial,
  clientAvatar,
  clientName,
  clientPosition,
}) {
  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[1000px] mx-auto rounded-lg 
            border border-white/20 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8"
    >
      <div className="flex items-center justify-center flex-shrink-0">
        <img
          className="rounded-full w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] object-cover aspect-square"
          src={clientAvatar}
          alt="Client avatar"
        />
      </div>

      <div className="flex items-center justify-center flex-col text-center lg:text-left">
        <p className="text-white font-semibold text-base sm:text-base md:text-lg lg:text-xl italic mb-3 sm:mb-4 break-words">
          "{testimonial}"
        </p>

        <p className="text-sm sm:text-base md:text-lg break-words">
          <span className="font-bold text-lg sm:text-xl md:text-2xl">{clientName}</span>,{" "}
          {clientPosition}
        </p>
      </div>
    </div>
  );
}