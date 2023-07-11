import { Typography } from "@material-tailwind/react"
import { AiOutlineCaretRight } from 'react-icons/ai'

// eslint-disable-next-line react/prop-types
const ListItem = ({ text }) => (
  <li className="flex items-center gap-2 w-full">
    <AiOutlineCaretRight
      color="green"
      className="md:flex w-6 flex-shrink-0"
    />
    <Typography>{text}</Typography>
  </li>
);

const InfoArt = () => {
  return (
    <div className="md:w-3/4 px-4">
      <Typography variant="h6">
        ¿Qué es un Accidente de Trabajo?
      </Typography>
      <Typography className="py-2 text-justify">
        Un Accidente de Trabajo es un acontecimiento inesperado ocurrido en el trabajo o en el trayecto entre el domicilio del trabajador y el lugar de trabajo o viceversa.
      </Typography>
      <Typography variant="h6">
        ¿Cuáles son los derechos del trabajador?
      </Typography>
      <ul className="flex flex-col gap-2 justify-start py-2">
        <ListItem text="Trabajar en un ambiente sano y seguro." />
        <ListItem text="Conocer los riesgos asociados a su tarea." />
        <ListItem text="Recibir capacitación sobre métodos de prevención del Accidente de Trabajo." />
        <ListItem text="Estar cubierto por una ART a través de la afiliación de su empleador." />
        <ListItem text="Recibir los elementos de protección personal." />
        <ListItem text="Conocer cuál es su ART." />
      </ul>
    </div>
  );
};

export default InfoArt;
