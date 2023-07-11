import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => (
  <li className="flex items-start md:items-center gap-2">
    <AiOutlineCaretRight
      color="green"
      className="md:flex w-6 flex-shrink-0"
    />
    <Typography className="text-justify">{children}</Typography>
  </li>
);

const ItemsCalidad = () => {
  return (
    <article>
      <Typography className="text-justify">
        Los ejes en que se sustenta la calidad son:
      </Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <ul className="flex flex-col gap-3">
            <ListItem><strong className="font-semibold">Efectividad</strong> dada por el conocimiento y la experiencia técnica de los profesionales, la adecuación tecnológica, los avances científicos, los protocolos de atención y la adecuada comunicación con los pacientes.</ListItem>
            <ListItem><strong className="font-semibold">Oportunidad </strong>el paciente recibe la atención óptima en el momento que lo requiere.</ListItem>
            <ListItem><strong className="font-semibold">Seguridad </strong>todo tratamiento e intervención se ajusta a medidas preventivas de seguridad para no ocasionar daños colaterales a los pacientes.</ListItem>
            <ListItem><strong className="font-semibold">Eficiencia </strong>el paciente recibe la atención que precisa en el momento que lo requiera, al menor costo posible, utilizando adecuadamente las herramientas disponibles, para preservar los recursos del sistema sanitario.</ListItem>
            <ListItem><strong className="font-semibold">Equidad </strong>se atiende a todos por igual, sin importar su sexo, raza, creencia religiosa, nivel socio-económico o cualquier otro motivo de discriminación.</ListItem>
            <ListItem><strong className="font-semibold">Atención </strong>centrada en el paciente: es el valor principal de la Institución.</ListItem>
        </ul>
      </div>
    </article>
  );
};

export default ItemsCalidad;