import {
  CardBody,
  CardFooter,
  Typography,
  Card,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { BsClock } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaSuitcaseMedical } from "react-icons/fa6";
import "./cardcss.css";
import { Link } from "react-router-dom";

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
    titulo: "Portal del Paciente",
    descripcion:
      "Sacá turnos, mirá los resultados de tus últimos estudios y accedé a toda la información sobre tu salud.",
    btn: "Sacá turno",
    link: "https://portal.italianolaplata.org.ar/login",
  },
  {
    icon: FaSuitcaseMedical,
    titulo: "Especialidades",
    descripcion:
      "Contamos con profesionales y especialidades para brindarte una atención integral y completa.",
    btn: "Conocelas",
    link: "/vosyelhospital/informacionUtil?tab=serviciosyespecialidades",
  },
];

export default function CardInicio() {
  return (
    <article className=" flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
      {contenidoCard.map((card, index) => (
        <Card className="mt-5 w-96 shadow-xl bg-gray-50 card" key={index}>
          <Link to={card.link} target="_blank">
            <CardBody>
              {/* Icono */}
              {card.icon && (
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {
                    <card.icon className="w-8 h-8 mr-2 inline-block text-red-300" />
                  }
                  {card.titulo}
                </Typography>
              )}
              <Typography className="parrafo">{card.descripcion}</Typography>
            </CardBody>

            <CardFooter className="pt-0">
              <div className="go-arrow go-corner">
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </div>
              {/* {card.btn && (
              <Link to={card.link} className="inline-block">
                <Button
                size="sm"
                variant="text"
                color="green"
                className="flex items-center gap-2"
                >
                {card.btn}
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
                </Link>
              )} */}
            </CardFooter>
          </Link>
        </Card>
      ))}
    </article>
  );
}
