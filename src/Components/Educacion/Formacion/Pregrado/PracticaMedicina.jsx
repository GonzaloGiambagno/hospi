import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from 'react-icons/ai'

const PracticaMedicina = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Prácticas Finales de Medicina
      </Typography>
      <section className="md:px-4">
          <Typography className="md:text-justify">
            El Hospital Italiano de La Plata es una de las Unidades Académicas
            donde se desarrolla la Práctica Final Obligatoria correspondiente a
            la Carrera de Medicina de la Facultad de Ciencias Médicas de la
            Universidad Nacional de La Plata. Dicha Práctica consiste en la
            rotación por cinco módulos de 8 semanas cada uno. En nuestra
            Institución se llevan a cabo por las Especialidades de Cirugía,
            Ginecología, Obstetricia y por las Áreas de Clínica Médica y
            Pediatría.
          </Typography>
          <Typography className="pt-1 md:text-justify">
            La Secretaria Docente Asistencial de la Facultad es quien realiza la
            distribución de los alumnos que hayan cumplido con los requisitos
            para iniciar la PFO.
          </Typography>
          <Typography className="pt- md:text-justify">
            El área de Docencia e Investigación del Hospital recibe la
            adjudicación, lleva a cabo el control de la documentación de los
            alumnos y emite las notas de los ciclos evaluados a la Facultad.
          </Typography>
          <div className="flex items-center pt-2">
            <AiOutlineCaretRight
              color="green"
              className="md:flex w-6 flex-shrink-0"
            />
            <Typography><strong className="font-bold ">Director de la PFO:</strong> Dr. Alberto Ré</Typography>
          </div>
      </section>
    </article>
  );
};

export default PracticaMedicina;
