/* eslint-disable react/prop-types */

import { Typography, Button } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ListItem = ({ children }) => (
  <li className="flex items-start  gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography>{children}</Typography>
  </li>
);

const ReqVisitas = () => {
  return (
    <article className="mt-2">
      <Typography variant="h6">Requisitos:</Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <ul className="flex flex-col gap-1">
            <ListItem>Currículum Vitae abreviado.</ListItem>
            <ListItem>Formulario de Solicitud de Visita.</ListItem>
            <ListItem>Fotocopia del DNI.</ListItem>
            <ListItem>
              Fotocopia de título profesional habilitante o certificado de
              título en trámite, expedido por Universidad Estatal o Privada,
              oficialmente reconocida.
            </ListItem>
            <ListItem>Constancia de vacunas contra Hepatitis B.</ListItem>
            <ListItem>
              Constancia de Seguro de Accidentes Personales (SAP) o ART según
              corresponda. <br /> <strong className="font-bold">Aclaración:</strong> el SAP deberá ser específico para este
              Hospital y podrá gestionarse en cualquier compañía de seguros,
              para el tiempo total aprobado para la actividad.
            </ListItem>
            <ListItem>Constancia de Cobertura de Salud.</ListItem>
            <ListItem>
              Certificado original del Colegio de Médicos de la Provincia de
              Buenos Aires (si aplica).
            </ListItem>
            <ListItem>Conocer el Marco Reglamentario para Visitantes.</ListItem>
        </ul>
        <Typography className="mt-2">
          <strong className="font-bold">Aclaración:</strong> aspirantes
          extranjeros, deberán contar con el correspondiente título convalidado
          ante el Ministerio de Educación de la Nación Argentina
        </Typography>
        <div className="flex gap-5 mt-5">
          <a
            href="https://www.italianolaplata.org.ar/documentos/educacion/Marco_reglamentario_para_rotantes.pdf"
            target="blank"
          >
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Marco Reglamentario
            </Button>
          </a>
          <a
            href=""
            target="blank"
          >
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Inscripciones
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ReqVisitas;
