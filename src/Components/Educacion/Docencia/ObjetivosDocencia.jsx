import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => (
  <li className="flex items-start  gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography className="md:text-justify">{children}</Typography>
  </li>
);

const ObjetivosDocencia = () => {
  return (
    <div className="py-4">
      <Typography variant="h6" className="mb-3">
        Objetivos de la Dirección de Docencia e Investigación
      </Typography>
      <ul className="mt-2">
        <ListItem>Promover acciones de desarrollo para generar el posicionamiento de Hospital Universitario.</ListItem>
        <ListItem>El entendimiento, la planificación, la implementación y la evaluación de las actividades de docencia, investigación y capacitación que se desarrollen en el Hospital.</ListItem>
        <ListItem>El desarrollo de actividades continuas y permanentes en la formación, capacitación y educación de todo el personal profesional.</ListItem>
        <ListItem>El estímulo para el desarrollo de la investigación clínica básica, epidemiológica, psicosocial, administrativa y bibliográfica.</ListItem>
        <ListItem>La autorización, la orientación y la evaluación de los protocolos de investigación.</ListItem>
        <ListItem>La normatización y el funcionamiento de los programas educativos que funcionan en el Hospital.</ListItem>
        <ListItem>La participación en políticas de recursos humanos que respondan a las necesidades del Hospital respecto a la educación y capacitación contínua.</ListItem>
        <ListItem>La planificación y ejecución de un Plan de Desarrollo Profesional Continuo (PDPC) de todos los profesionales en formación, con la consecuente incorporación al staff del Hospital.</ListItem>
      </ul>
    </div>
  )
}

export default ObjetivosDocencia