import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ListItem = ({ text }) => (
  <li className="flex items-center gap-2 w-full">
    <AiOutlineCaretRight
      color="green"
      className="md:flex w-6 flex-shrink-0"
    />
    <Typography>{text}</Typography>
  </li>
);

const Responsabilidades = () => {
  return (
    <article className="w-full mt-2">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Conocé tus responsabilidades como paciente
      </Typography>
      <section className="md:px-4">
        <div className="p-4">
          <ul className="flex flex-col gap-2 justify-start">
            <ListItem text="Ser considerado con otros pacientes y con el personal, y ayudar a controlar el ruido y otras distracciones." />
            <ListItem text="Respetar la propiedad de terceros y del establecimiento." />
            <ListItem text="Informar si entiende claramente el curso de tratamiento planeado y lo que se espera de él." />
            <ListItem text="Respetar las citas y, cuando no pueda asistir por alguna razón, notificar a la institución y al médico." />
            <ListItem text="Proporcionar al equipo de salud la información más precisa y completa sobre los síntomas actuales, enfermedades y hospitalizaciones anteriores, cambios inesperados en su condición o cualquier otra cuestión relacionada con su salud." />
            <ListItem text="Cumplir con las normas estipuladas del hospital durante su estadía y tratamiento y, en caso de que no se cumplan las instrucciones, perderá el derecho a recibir atención en el establecimiento y será responsable del resultado." />
            <ListItem text="Cumplir con el plan de tratamiento recomendado por su médico." />
            <ListItem text="Identificar problemas de seguridad para sí mismo." />
          </ul>
        </div>
      </section>
    </article>
  );
};



export default Responsabilidades;

