import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ListItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <AiOutlineCaretRight
      color="green"
      className="md:flex w-6 flex-shrink-0"
    />
    <Typography>{text}</Typography>
  </li>
);

const PoliticaCalidad = () => {
  return (
    <article>
      <Typography variant="lead" className="font-semibold">
        Política de calidad
      </Typography>
      <Typography className="text-justify">
        Mejorar en forma continua nuestra atención, a modo de satisfacer las
        necesidades de los pacientes y sus familias, y de cumplir los requisitos
        de organismos reguladores, financiadores y otras partes interesadas,
        promoviendo:
      </Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <ul className="flex flex-col gap-3">
          <ListItem
            text="La definición de resultados de calidad esperados (objetivos de calidad)."
          />
          <ListItem
            text="El diseño y control de procedimientos efectivos en relación a los resultados de calidad esperados."
          />
          <ListItem
            text="La utilización de indicadores para el monitoreo y evaluación de los resultados esperados y procedimientos."
          />
          <ListItem
            text="La participación, capacitación y desarrollo del recurso humano, trabajando coordinadamente en la identificación y aplicación de medidas preventivas, correctivas y oportunidades de mejora."
          />
          <ListItem
            text="La utilización de tecnologías, que optimicen la calidad de atención en todas sus dimensiones, simplifiquen la tarea diaria y favorezcan la integración del hospital con la comunidad."
          />
        </ul>
      </div>
    </article>
  );
};

export default PoliticaCalidad;