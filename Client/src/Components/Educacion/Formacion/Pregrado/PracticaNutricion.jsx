import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const PracticaNutricion = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Prácticas Finales de Nutrición
      </Typography>
      <section className="md:px-4">
        <Typography className="md:text-justify">
          A partir del año 2022 el Hospital Italiano La Plata se convirtió en
          una de las Unidades Académicas donde se llevan adelante las Prácticas
          Finales Obligatorias de la carrera de Licenciatura en Nutrición de la
          Facultad de Ciencias Médicas de la Universidad Nacional de La Plata.
          Dicha práctica consiste en la rotación por dos áreas de 3 (tres) meses
          cada uno:
        </Typography>
        <Typography className="pt-2 md:text-justify">
          Alimentación y Dietoterapia y Nutrición Clínica.
        </Typography>
        <Typography className="pt-2 md:text-justify">
          La designación y distribución de estudiantes se realiza desde la
          Facultad.
        </Typography>
        <div className="flex items-center pt-2">
          <AiOutlineCaretRight
            color="green"
            className="md:flex w-6 flex-shrink-0"
          />
          <Typography>
            <strong className="font-bold ">Referente:</strong>
            Lic. María Eugenia Obregozo.
          </Typography>
        </div>
      </section>
    </article>
  );
};

export default PracticaNutricion;
