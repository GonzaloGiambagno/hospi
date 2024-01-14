import { Typography } from "@material-tailwind/react";

const TextoPosgrado = () => {
  return (
    <section className="flex flex-wrap border-b-2 border-green-300">
      <div className="lg:w-1/2 p-4">
        <Typography variant="h6" className="">
          Residencia
        </Typography>
        <Typography className=" sm:text-justify">
          La Residencia es un sistema de formación integral de postgrado para el
          graduado reciente en las disciplinas que integran el equipo de salud,
          cuyo objeto es completar su formación en manera exhaustiva,
          ejercitándolo en el desempeño responsable y eficaz de la disciplina
          correspondiente, bajo la modalidad de formación en el trabajo. Régimen
          de actividad a tiempo completo, con dedicación exclusiva y mediante la
          ejecución personal, bajo supervisión, de actos profesionales de
          complejidad y responsabilidad crecientes.
        </Typography>
      </div>
      <div className="lg:w-1/2 p-4">
        <Typography variant="h6" className="">
          Fellowship
        </Typography>
        <Typography className="sm:text-justify">
          El Fellowship es una beca de perfeccionamiento. Práctica directa,
          metódica y progresiva que posibilita al médico especialista, la
          obtención de conocimientos, destrezas y aptitudes sobre la patología
          de consulta frecuente en el ámbito ambulatorio y en la internación,
          con un claro enfoque en la terapéutica y su aplicación en la práctica
          diaria. <br />
          El Fellow es aquel que se halla en la fase inicial de su carrera
          profesional como especialista (especialista junior) y que se integra
          temporalmente en un grupo súper-especializado ya consolidado con el
          objetivo de adquirir y consolidar nuevos conocimientos, tanto teóricos
          como prácticos, interviniendo activamente en las actividades de dicho
          grupo, recibiendo la tutela de los miembros expertos.
        </Typography>
      </div>
    </section>
  );
};

export default TextoPosgrado;
