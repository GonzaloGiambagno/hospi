import { Carousel } from "@material-tailwind/react";
import InnIoma from "../../assets/carruselNoticias/Innauguracion_IOMA_banner_web.webp";
import añosHospi from "../../assets/carruselNoticias/136_Aniversario_banner_web.webp";
import portada from "../../assets/carruselNoticias/portada.webp";
import residencia from "../../assets/carruselNoticias/banner_web.webp";
import premio from "../../assets/carruselNoticias/premio_RSE_banner_web.webp";
import bannerpami from "../../assets/carruselNoticias/banner_pami.webp";
import convenioIoma from "../../assets/carruselNoticias/Convenio_IOMA_rrss_banner_web.webp";
import enfermeria from "../../assets/carruselNoticias/RRSS_Instituto_de_Enfermería-web.webp";

export default function Carrusel() {
  return (
    <Carousel
      className="md:rounded-xl mx-auto mt-2"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-gray-300" : "w-4 bg-gray-300/70"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={portada}
        alt="puerta hospital italiano"
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
      <img
        src={añosHospi}
        alt="cumple 136 años hospi "
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
      <img
        src={InnIoma}
        alt="Innauguracion centro traumatologico con ioma"
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
      <img
        src={residencia}
        alt="Residencia, inscripciones"
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
      <img
        src={premio}
        alt="premio responsabilidad social"
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
      <img
        src={bannerpami}
        alt="firma convenio con pami"
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
      <img
        src={convenioIoma}
        alt="convenio directo con IOMA"
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
      <img
        src={enfermeria}
        alt="Iscripciones escuela de enfermeria"
        className="h-72 md:h-full w-full"
        loading="lazy"
      />
    </Carousel>
  );
}
