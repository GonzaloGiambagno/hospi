import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ServiciosYEsp = () => {
  return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Servicios y especialidades
      </Typography>
      <section className="md:px-4">
        <div className="flex flex-col gap-2 divide-y">
          <Typography variant="lead" className="mt-2 divide-y">¿Qué prestaciones ofrece el Hospital Italiano La Plata?</Typography>
          <Typography className="pt-2">El Hospital Italiano La Plata ofrece las siguientes prestaciones:</Typography>
        </div>
        <div className="p-4 ">
            <ul className=" flex flex-col gap-3">
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green"/><Typography>Atención ambulatoria por especialidades</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green"/><Typography>Guardia general las 24hs</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green"/><Typography>Internación general en piso, Unidad Coronaria, Unidad de Cuidados Intensivos, Hospital de Día Polivalente, Maternidad, Neonatología</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green"/><Typography>Estudios de diagnóstico de alta complejidad</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green"/><Typography>Demanda espontánea de atención ambulatoria de lunes a viernes</Typography></li>

            </ul>
        </div>
      </section>
    </article>
  );
};

export default ServiciosYEsp;
