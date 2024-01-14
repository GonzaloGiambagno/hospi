import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => (
  <li className="flex items-start md:items-center gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography className="text-justify">{children}</Typography>
  </li>
);

const TextoCompromiso = () => {
  return (
    <div className="py-4 border-b-2 border-green-200">
      <Typography variant="h6" className="mb-3">
        Compromiso por la comunidad
      </Typography>
      <Typography>
        La Dirección de Docencia e Investigación es una de las posiciones dentro
        de la organización del Hospital Italiano La Plata, de fundamental
        importancia para mantener y mejorar junto a sus pares, la Dirección
        Médica Asistencial y la Dirección de Calidad y Seguridad del Paciente,
        el programa “Compromiso por la Comunidad” que se basa en cuatro pilares:
        calidad, seguridad, eficiencia y accesibilidad a la atención sanitaria.
        Sosteniéndose en cuatro conceptos básicos:
      </Typography>
      <ul className="mt-2">
        <ListItem>Enseñar.</ListItem>
        <ListItem>Investigar</ListItem>
        <ListItem>Asistir.</ListItem>
        <ListItem>Gestionar.</ListItem>
      </ul>
    </div>
  );
};

export default TextoCompromiso;
