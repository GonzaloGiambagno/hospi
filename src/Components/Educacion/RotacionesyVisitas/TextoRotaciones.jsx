import { Typography } from "@material-tailwind/react";

const TextoRotaciones = () => {
  return (
    <section className="flex flex-wrap  mt-2 mb-5">
      <div className="lg:w-1/2 p-4">
        <Typography variant="h5" className="pb-2">
          Rotaciones
        </Typography>
        <Typography className=" sm:text-justify">
          Aprendizaje programado dentro de un Área, Unidad, Sector o
          Especialidad, con el objetivo de adquirir mayores conocimientos,
          durante un período de tiempo mínimo de un mes y máximo de tres, en el
          que se realizarán actividades teóricas y prácticas.
        </Typography>
      </div>
      <div className="lg:w-1/2 p-4">
        <Typography variant="h5" className="pb-2">
          Visitas
        </Typography>
        <Typography className="sm:text-justify">
          Actividad de carácter observacional, sobre el movimiento asistencial
          y/o científico de algún Área, Unidad, Sector o Especialidad. El
          visitante prescindirá de tareas asistenciales con responsabilidad
          directa en el Hospital, y su estadía será transitoria.
        </Typography>
      </div>
    </section>
  );
};

export default TextoRotaciones;
