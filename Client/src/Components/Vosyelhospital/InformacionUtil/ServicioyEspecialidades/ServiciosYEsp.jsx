import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import TablaEspecialidades from "./TablaEspecialidades";

// eslint-disable-next-line react/prop-types
const ListItem = ({ text }) => (
  <li className="flex items-center gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography>{text}</Typography>
  </li>
);

const ServiciosYEsp = () => {
  return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Servicios y especialidades
      </Typography>
      <section className="md:px-4">
        <div className="flex flex-col gap-2 divide-y">
          <Typography color="black" variant="lead" className="mt-2">
            ¿Qué prestaciones ofrece el Hospital Italiano La Plata?
          </Typography>
          <Typography className="pt-2">
            El Hospital Italiano La Plata ofrece las siguientes prestaciones:
          </Typography>
        </div>
        <div className="p-4">
          <ul className="flex flex-col gap-3">
            <ListItem text="Atención ambulatoria por especialidades" />
            <ListItem text="Guardia general las 24hs" />
            <ListItem
              text="Internación general en piso, Unidad Coronaria, Unidad de Cuidados Intensivos, Hospital de Día Polivalente, Maternidad, Neonatología"
            />
            <ListItem text="Estudios de diagnóstico de alta complejidad" />
            <ListItem text="Demanda espontánea de atención ambulatoria de lunes a viernes" />
          </ul>
        </div>
        <div className="flex flex-col gap-2 divide-y">
          <Typography color="black" variant="lead" className="mt-2">
            ¿Qué especialidades médicas tiene el Hospital?
          </Typography>
          <Typography className="pt-2">
            Las especialidades médicas que atendemos en el Hospital Italiano La Plata son:
          </Typography>
        </div>
        <TablaEspecialidades />
      </section>
    </article>
  );
};

export default ServiciosYEsp;
