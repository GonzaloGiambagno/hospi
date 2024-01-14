/* eslint-disable react/prop-types */
import { Typography,Button } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ListItem = ({ children }) => (
  <li className="flex items-start md:items-center gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography>{children}</Typography>
  </li>
);

const ResiUniversitarias = () => {
  return (
    <article>
      <Typography variant="h6">
        Residencias Universitarias
      </Typography>
      <Typography color="red">
        <i>Inscripciones Cerradas</i>
      </Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <ul className="flex flex-col gap-1">
          <ListItem>Cardiología </ListItem>
          <ListItem>Cirugía General</ListItem>
          <ListItem>Clínica Médica</ListItem>
          <ListItem>Hematología 2º Nivel</ListItem>
        </ul>
        <div className="flex flex-col gap-1 mt-2">
        <Typography className="md:text-justify">
          Las Residencias Universitarias son aquellas Carreras de
          Especialización (Modalidad Educativa Residencia) cuya inscripción se
          realiza a través del Departamento de Posgrado de la Facultad de
          Ciencias Médicas de la Universidad Nacional de La Plata y otorgan
          título de especialista universitario.
        </Typography>
        <Typography>
          Para inscribirse en estos Programas deberá consultar el Cronograma de
          Llamado a Concurso de acuerdo a Boletín Oficial emitido por
          Departamento de Posgrado de la FCM de la UNLP.
        </Typography>
        <a href="https://www.italianolaplata.org.ar/documentos/educacion/boletin_ingreso_especializacion.pdf" target="blank">
          <Button
            className="z-0 flex items-center gap-2 py-2 px-4"
            color="green"
          >
            Requisitos e información para Residencias Universitarias
          </Button>
        </a>
        </div>
      </div>
    </article>
  );
};

export default ResiUniversitarias;
