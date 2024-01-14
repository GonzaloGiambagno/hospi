import {
  CardBody,
  CardFooter,
  Typography,
  Button,
  Card,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { IoCalendarOutline } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { AiOutlineForm } from "react-icons/ai";
import "./CardEnf.css";

const contenidoCard = [
  {
    icon: IoCalendarOutline,
    titulo: "Cronograma de Ingreso",
    link: "https://www.italianolaplata.org.ar/documentos/educacion/cronograma_de_ingreso_2023.pdf",
  },
  {
    icon: FaListCheck,
    titulo: "Requisitos de inscripción",
    link: "https://www.italianolaplata.org.ar/documentos/educacion/requisitos_de_inscripcion_2023.pdf",
  },
  {
    icon: AiOutlineForm,
    titulo: "Formulario de pre-inscripción",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSddPcIRWlaWVsNovYBte_60lfRsMLgjNxGLFBWRq9a4T7B-qQ/closedform",
  },
];

export default function CardsEnfermeria() {
  return (
    <article className="flex flex-row flex-wrap justify-center items-center cards p-2 gap-4 mt-2 shadow-xl bg-gradient-to-r from-green-200 via-gray-200 to-red-200 lg:rounded-xl pb-6">
      {contenidoCard.map((card, index) => (
        <Card className="mt-5 w-96 shadow-xl card" key={index}>
          <CardBody>
            {/* Icono */}
            {card.icon && (
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex flex-col justify-center items-center gap-5"
              >
                {
                  <card.icon
                    className="w-10 h-10 mr-2 inline-block text-green-300 border-1"
                    size={28}
                  />
                }
                {card.titulo}
              </Typography>
            )}
          </CardBody>
          <CardFooter className="pt-0 w-full text-center">
            {card.link && (
              <a href={card.link} className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  color="green"
                  className="flex items-center gap-2"
                >
                  Leer más
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </a>
            )}
          </CardFooter>
        </Card>
      ))}
    </article>
  );
}
