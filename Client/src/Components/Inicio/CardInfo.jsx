// import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { BsClock } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { IoInformationCircleOutline } from "react-icons/io5";
import "./cardcss.css";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import fondo from "../../assets/rawBg.svg";

const contenidoCard = [
  {
    icon: BsClock,
    titulo: "Nuestros Horarios",
    descripcion:
      "Guardia: Todo el año las 24 hs. Atención ambulatoria: de lunes a viernes de 8 a 20hs. y sábados de 8 a 12hs.",
    btn: "Ver más",
    link: "/vosyelhospital/informacionUtil?tab=horarios",
  },
  {
    icon: BiUser,
    titulo: "Portal del paciente",
    descripcion:
      "Sacá turnos, mirá los resultados de tus últimos estudios y accedé a toda la información sobre tu salud.",
    btn: "Sacá turno",
    link: "https://portal.italianolaplata.org.ar/login",
  },
  {
    icon: IoInformationCircleOutline,
    titulo: "Informacion adicional",
    descripcion:
      "Descubre nuestros servicios, especialidades, obras sociales, y documentación necesaria para agilizar tus trámites en nuestro hospital.",
    btn: "Ver más",
    link: "/vosyelhospital/informacionUtil?tab=serviciosyespecialidades",
  },
];

export default function CardInfo() {
  return (
    <article className=" flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
      {contenidoCard.map((card, index) => (
        <div className="mt-5 w-96" key={index}>
          <Link to={card.link}>
            <div className="w-full bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md hover:bg-gray-100">
              <div className="flex flex-col gap-3 h-36">
                <Typography variant="h6">{card.titulo}</Typography>
                <Typography className="">{card.descripcion}</Typography>
              </div>
              <div className="flex justify-between">
                <card.icon className="w-8 h-8 mr-2 inline-block text-red-500" />
                <div className="text-sm flex gap-2">
                  <Button variant="outlined" color="green" size="sm">
                    {card.btn}
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </article>
  );
}

// {card.icon && (
//     <Typography variant="h5" color="blue-gray" classNameName="mb-2">
//       {
//         <card.icon className="w-8 h-8 mr-2 inline-block text-red-300" />
//       }
//       {card.titulo}
//     </Typography>
//   )}
