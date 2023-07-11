/* eslint-disable react/prop-types */
import Portal from "../../../assets/bg-portal.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Typography, Button } from "@material-tailwind/react";

const ButtonLink = ({ href, text, icon, color }) => (
  <a href={href} target="blank">
    <Button className="z-0 flex items-center gap-2 py-2 px-4" color={color}>
      {text} {icon}
    </Button>
  </a>
);

const ImagenPortal = () => {
  return (
    <>
      <figure className="md:relative h-full w-full flex-col flex-wrap">
        <img
          src={Portal}
          alt="imagen del portal del paciente"
          className="w-full h-52 md:h-auto sm:rounded-xl sm:shadow-md"
        />
        <figcaption className="md:absolute bottom-6 md:left-2/4 flex flex-wrap md:w-[calc(100%-4rem)] md:-translate-x-2/4 md:justify-between rounded-xl bg-white/20 py-2 px-6 shadow-lg shadow-black/5 backdrop-blur-sm">
          <div className="items-center flex">
            <Typography variant="h6">
              <i>
                Una vez realizado el registro, podés ingresar al Portal con tu número de DNI y la contraseña que elegiste.
              </i>
            </Typography>
          </div>
          <div className="flex gap-2 flex-wrap w-full justify-center p-2 sm:w-auto">
            <ButtonLink
              href="https://portal.italianolaplata.org.ar/Cuenta/Login"
              text="Ingresar"
              icon={<ArrowLongRightIcon strokeWidth={2} className="hidden sm:block h-5 w-5" />}
              color="green"
            />
            <ButtonLink
              href="https://portal.italianolaplata.org.ar/Cuenta/Registro"
              text="Registrate"
              icon={<ArrowLongRightIcon strokeWidth={2} className="hidden sm:block h-5 w-5" />}
              color="green"
            />
          </div>
        </figcaption>
      </figure>
    </>
  );
};


export default ImagenPortal;