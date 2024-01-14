import Gestion from "../../../assets/gestion.png";
import { Typography } from "@material-tailwind/react";


const ImgGestion = () => {
  return (
    <>
      <figure className="md:relative h-full w-full flex-col flex-wrap">
        <img
          src={Gestion}
          alt="imagen del portal del paciente"
          className="w-full h-52 md:h-auto md:rounded-xl md:shadow-md"
        />
        <figcaption className="lg:absolute bottom-6 lg:left-2/4 flex flex-wrap md:w-[calc(100%-4rem)] lg:-translate-x-2/4 lg:justify-between rounded-xl bg-white/20 py-2 px-6 shadow-lg shadow-black/5 backdrop-blur-sm">
          <div className="items-center flex">
            <Typography  className="opacity-90 lg:text-white">
              La gestión de calidad promueve además la necesidad de un cambio cultural, orientado a centrar la atención en el paciente y su familia. Este cambio garantiza que ante controversias en las decisiones siempre se priorizarán sus necesidades y expectativas.
            </Typography>
          </div>
        </figcaption>
      </figure>
    </>
  );
};


export default ImgGestion;