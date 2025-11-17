import Title from "../components/Title.jsx";
import Carousel from "../components/Carousel.jsx";
import Fx from "../components/Fx.jsx";

import client1 from "../assets/images/clients/pia-project.jpeg";

export default function Experience() {
  return (
    <div className="section-wrapper">
      <div>
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
      className="w-full max-w-[1000px] p-10 rounded-lg 
            border border-white/20 flex gap-4 "
    >
      <div className="flex items-center">
        <img
          className="rounded-full min-w-[300px]"
          src={clientAvatar}
          alt="Client avatar"
        />
      </div>

      <div className="flex items-center justify-center flex-col">
        <p className="text-white font-semibold text-xl italic mb-4">
          "{testimonial}"
        </p>

        <p>
          <span className="font-bold text-xl">{clientName}</span>,{" "}
          {clientPosition}
        </p>
      </div>
    </div>
  );
}
