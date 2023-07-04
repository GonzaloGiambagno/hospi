import {
  CardBody,
  CardFooter,
  Typography,
  Button,
  Card,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { BsClock } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaSuitcaseMedical } from "react-icons/fa6";
import "./cardcss.css"


const contenidoCard = [
  {
    icon: BsClock,
    titulo: "Nuestros Horarios",
    descripcion:
      "Guardia: Todo el año las 24 hs. Atención ambulatoria: de lunes a viernes de 8 a 20hs. y sábados de 8 a 12hs.",
    btn: "Ver más",
  },
  {
    icon: BiUser,
    titulo: "Portal del Paciente",
    descripcion:
      "Sacá turnos, mirá los resultados de tus últimos estudios y accedé a toda la información sobre tu salud.",
    btn: "Sacá turno",
  },
  {
    icon: FaSuitcaseMedical,
    titulo: "Especialidades",
    descripcion:
      "Contamos con profesionales y especialidades para brindarte una atención integral y completa.",
    btn: "Conocelas",
  },
];

export default function CardInicio() {
  return (
    <section className="flex flex-row flex-wrap justify-center items-center gap-4 cards ">
    {contenidoCard.map((card, index) => (
      <Card className="mt-5 w-96 shadow-xl bg-slate-200 card" key={index}>
        <CardBody>
          {/* Icono */}
          {card.icon && (
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {<card.icon className="w-8 h-8 mr-2 inline-block text-red-300" />}
              {card.titulo}
            </Typography>
          )}
          <Typography>{card.descripcion}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {card.btn && (
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                color="green"
                className="flex items-center gap-2"
              >
                {card.btn}
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    ))}
  </section>
  );
}
