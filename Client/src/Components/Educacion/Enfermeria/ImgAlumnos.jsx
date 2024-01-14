/* eslint-disable react/prop-types */
import Banner from "../../../assets/alumnos1.png";
import { Typography, Button } from "@material-tailwind/react";

const ImgAlumnos = () => {
  return (
    <>
      <figure className="md:relative h-full w-full">
        <img
          src={Banner}
          alt="imagen del portal del paciente"
          className="w-full h-52 md:h-auto md:rounded-xl sm:shadow-md object-cover "
        />
        <figcaption className="md:absolute bottom-6 md:left-2/4 md:-translate-x-2/4 rounded-xl bg-white/10 md:py-2 px-6 shadow-lg shadow-black/5 md:backdrop-blur-sm">
          <div className="items-center flex flex-wrap gap-2 p-2 md:p-0 justify-center">
            <Typography className="opacity-90 md:text-white text-center">
              <i>
                Información para alumnos:
              </i>
            </Typography>
            <Button
              href="https://portal.italianolaplata.org.ar/Cuenta/Login"
              color="green"
              className="p-2 normal-case"
            >Cronograma 2° Cuatrimestre</Button>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default ImgAlumnos;