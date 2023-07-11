import { Typography } from "@material-tailwind/react";

const Reorganizacion = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-3 lg:gap-10 border-b-2 border-green-300 pb-7">
      <section className="lg:w-3/5">
        <Typography className="text-justify">
          El Hospital Italiano La Plata posee una importante presencia
          institucional en la ciudad por su valiosa y sostenida historia de
          atención en salud. El edificio saca provecho de su excepcional
          emplazamiento dado que ocupa una manzana completa con destino único
          hospitalario. Forma parte del eje cívico fundacional y cuenta con muy
          buena accesibilidad por encontrarse adyacente al boulevard de
          circunvalación, la vía circulatoria más eficiente de la ciudad.
        </Typography>
        <Typography className="text-justify">
          A partir del recurso físico existente, con su trazado original de
          bloques separados por amplios patios y jardines, se propone una nueva
          concepción de conjunto que favorece al funcionamiento interno del
          Hospital, y al confort del paciente. Considerando los permanentes
          cambios del sector de la salud, se plantea un crecimiento flexible y
          adaptable en el tiempo.
        </Typography>
      </section>
      <section className="flex justify-center lg:justify-normal">
        <iframe
          width="480"
          height="270"
          src="https://www.youtube.com/embed/rcLtezIQqqQ"
          title="plan Maestro"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-lg shadow-lg"
        />
      </section>
    </article>
  );
};

export default Reorganizacion;
