/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ListItem = ({ text }) => (
    <li className="flex items-start gap-2">
      <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
      <Typography>{text}</Typography>
    </li>
  );

const PoliticaSeguridad = () => {
  return (
    <article>
      <Typography variant="lead" className="font-semibold">
        Política de seguridad de los pacientes
      </Typography>
      <Typography className="text-justify">
        Minimizar los riesgos para el paciente, bajo la máxima 'Primun non
        nocere' (lo primero es no hacer daño), impulsando:
      </Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <ul className="flex flex-col gap-3">
          <ListItem text="El desarrollo de la cultura de la seguridad." />
          <ListItem text="La priorización de la seguridad del paciente al rediseñar procedimientos o tomar decisiones (procesos seguros)." />
          <ListItem text="La notificación, detección, clasificación y tratamiento de incidentes de seguridad." />
          <ListItem text="La obligatoriedad del análisis exhaustivo de eventos centinela y su prevención." />
          <ListItem text="La identificación de los 'Never Event' (eventos que nunca deberían suceder) y el fortalecimiento de las barreras de seguridad a tal fin." />
          <ListItem text="La obligatoriedad del lavado de manos con la técnica adecuada." />
          <ListItem text="La capacitación continua del equipo de salud." />
          <ListItem text="La incorporación de la disciplina de manera transversal en los programas formativos." />
          <ListItem text="El desarrollo de ateneos de seguridad." />
          <ListItem text="La implementación de rondas de seguridad, con listados de verificación definidos previamente." />
        </ul>
      </div>
    </article>
  );
};



export default PoliticaSeguridad;
