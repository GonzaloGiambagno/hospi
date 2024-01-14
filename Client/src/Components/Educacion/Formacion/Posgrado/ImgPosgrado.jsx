/* eslint-disable react/prop-types */
import PosgradoImg from "../../../../assets/banner_inscripciones.png";
import { Typography, Button } from "@material-tailwind/react";

const ButtonLink = ({ href, text, icon, color }) => (
  <a href={href} target="blank">
    <Button className="z-0 flex items-center gap-2 py-2 px-4" color={color}>
      {text} {icon}
    </Button>
  </a>
);

const ImgPosgrado = () => {
  return (
    <>
      <figure className="md:relative h-full w-full flex-col flex-wrap">
        <img
          src={PosgradoImg}
          alt="imagen del portal del paciente"
          className="w-full h-52 md:h-auto md:rounded-xl sm:shadow-md"
        />
        <figcaption className="md:absolute bottom-6 md:left-2/4 flex flex-wrap md:w-[calc(100%-4rem)] md:-translate-x-2/4 md:justify-between rounded-xl bg-white/10 md:py-2 px-6 shadow-lg shadow-black/5 md:backdrop-blur-sm">
          <div className="items-center flex">
            <Typography variant="h6" className="opacity-90 md:text-white">
              <i>
                Llamado a residencias y fellowship 2023 
              </i>
            </Typography>
          </div>
          <div className="flex gap-2 flex-wrap w-full justify-center p-2 sm:w-auto">
            <ButtonLink
              href="https://italnet.italianolaplata.org.ar/contenidoArchivos/incidentes/154166/Archivos/R_Cronograma_2023.pdf"
              text="Cronograma Residencias"
              color="green"
            />
            <ButtonLink
              href="https://italnet.italianolaplata.org.ar/contenidoArchivos/incidentes/154166/Archivos/F_Cronograma_2023.pdf"
              text="Cronograma Fellowship"
              color="green"
            />
          </div>
        </figcaption>
      </figure>
    </>
  );
};


export default ImgPosgrado;