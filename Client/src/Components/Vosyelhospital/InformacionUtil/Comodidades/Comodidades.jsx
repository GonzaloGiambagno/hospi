import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import InstructivoWifi from "./InstructivoWifi";

// eslint-disable-next-line react/prop-types
const ListItem = ({ text }) => (
  <li className="flex items-center gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography>{text}</Typography>
  </li>
);

const Comodidades = () => {
  return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Nuestras Comodidades
      </Typography>
      <section className="md:px-4">
        <div className="flex flex-col gap-2 divide-y">
          <Typography color="black" variant="lead" className="mt-2">
            ¿Qué tipo de habitación me ofrecen?
          </Typography>
          <Typography className="pt-2">
            En el Hospital Italiano La Plata disponemos de diferentes habitaciones de internación:
          </Typography>
        </div>
        <div className="p-4">
          <ul className="flex flex-col gap-3">
            <ListItem text="Habitaciones dobles a compartir sin costo adicional." />
            <ListItem text="Habitación individual. Dependiendo de la habitación y de la obra social del paciente puede tener o no costo adicional." />
            <ListItem text="Departamentos privados. Con costo adicional que depende de la obra social del paciente." />
          </ul>
        </div>
        <Typography className="p-4">
          La designación de las habitaciones o departamentos queda ajustada a las posibilidades y disponibilidad del Hospital en el momento en que el paciente se interna.
        </Typography>

        <InstructivoWifi />
      </section>
    </article>
  );
};

export default Comodidades;