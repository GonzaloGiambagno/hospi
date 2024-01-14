import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const PracticaFarmacia = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Prácticas en Farmacia Hospitalaria
      </Typography>
      <section className="md:px-4">
        <Typography className="md:text-justify">
          A partir del 11 de abril del 2012 el Hospital Italiano La Plata se
          convirtió en una de las Unidades Docentes donde se llevarán a cabo las
          Prácticas Farmacéuticas, pertenecientes a la Carrera de Farmacia de la
          Facultad de Ciencias Exactas de la Universidad Nacional de La Plata.
        </Typography>
        <Typography className="pt-2 md:text-justify">
          Las mismas cuentan con un total de 250 horas prácticas y 50 horas
          teóricas.
        </Typography>
        <Typography className="pt-2 md:text-justify">
          La adjudicación y la documentación de los alumnos así como la emisión
          de las evaluaciones a la Facultad es gestionada por la Dirección de
          Docencia e Investigación del Hospital.
        </Typography>
        <div className="flex items-center pt-2">
          <AiOutlineCaretRight
            color="green"
            className="md:flex w-6 flex-shrink-0"
          />
          <Typography>
            <strong className="font-bold ">
              Titular de la Cátedra de Prácticas Farmacáuticas:
            </strong>{" "}
            Prof. Miguel A. Hermida.
          </Typography>
        </div>
        <div className="flex items-center pt-2">
          <AiOutlineCaretRight
            color="green"
            className="md:flex w-6 flex-shrink-0"
          />
          <Typography>
            <strong className="font-bold ">Docentes:</strong> Fca. Laura Giosso,
            Fca. Eugenia Martínez Mónaco.
          </Typography>
        </div>
      </section>
    </article>
  );
};

export default PracticaFarmacia;
