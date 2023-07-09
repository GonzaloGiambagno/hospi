import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";


const Responsabilidades = () => {
  return (
    <article className="w-full mt-2">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
      Conocé tus responsabilidades como paciente
      </Typography>
      <section className="md:px-4">
        <div className="p-4 ">
            <ul className="flex flex-col gap-2 justify-start">
                <li className="flex items-center gap-2 w-full"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Ser considerado con otros pacientes y con el personal, y ayudar a controlar el ruido y otras distracciones.</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Respetar la propiedad de terceros y del establecimiento.</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Informar si entiende claramente el curso de tratamiento planeado y lo que se espera de él.</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Respetar las citas y, cuando no pueda asistir por alguna razón, notificar a la institución y al médico.</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Proporcionar al equipo de salud la información más precisa y completa sobre los síntomas actuales, enfermedades y hospitalizaciones anteriores,cambios inesperados en su condición o cualquier otra cuestión relacionada con su salud.</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Cumplir con las normas estipuladas del hospital durante su estadía y tratamiento y, en caso de que no se cumplan las instrucciones, perderá el derecho a recibir atención en el establecimiento y será responsable del resultado.</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Cumplir con el plan de tratamiento recomendado por su médico.</Typography></li>
                <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Identificar problemas de seguridad para sí mismo.</Typography></li>

            </ul>
        </div>
      </section>
    </article>
  );
};

export default Responsabilidades;
