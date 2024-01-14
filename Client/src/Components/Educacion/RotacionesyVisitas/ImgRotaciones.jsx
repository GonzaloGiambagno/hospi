/* eslint-disable react/prop-types */
import Banner from "../../../assets/banner_visitas.png";
import { Typography } from "@material-tailwind/react";

const ImgRotaciones = () => {
  return (
    <>
      <figure className="md:relative h-full w-full">
        <img
          src={Banner}
          alt="imagen del portal del paciente"
          className="w-full h-52 md:h-auto md:rounded-xl sm:shadow-md object-cover object-left "
        />
        <figcaption className="md:absolute bottom-6 md:left-2/4 md:w-[calc(100%-4rem)] md:-translate-x-2/4 rounded-xl bg-white/10 md:py-2 px-6 shadow-lg shadow-black/5 md:backdrop-blur-sm">
          <div className="items-center flex">
            <Typography className="opacity-90 md:text-white text-center">
              <i>
              ¡Viví tu Experiencia!,{" "} 
                Podés coordinar visitas a la especialidad e informarte sobre cada programa enviando consultas a:
                docencia@italianolaplata.org.ar
              </i>
            </Typography>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default ImgRotaciones;
