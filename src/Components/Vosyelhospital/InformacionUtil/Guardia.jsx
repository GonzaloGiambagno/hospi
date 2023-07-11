import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const Guardia = () => {
  return (
    <article className="w-full">
      <Typography variant="h4" className="px-4 mb-4">
        Guardia y Emergencias
      </Typography>
      <section className="md:px-4 ">
        <div className="mt-6 divide-y">
          <Typography variant="lead" className="mt-2" color="black">
            ¿Cómo actuar ante una urgencia médica?
          </Typography>
          <Typography className="pt-3">
            Si vos o alguna persona tiene una emergencia, lo primero que debe
            hacerse es llamar al{" "}
            <strong className="font-bold">107 (SAME)</strong> o al servicio de
            ambulancia contratado si lo posee. Si se dispone de un vehículo,
            deben trasladarse a la guardia general del Hospital más cercano.
            <br />
            La guardia general del Hospital Italiano La Plata funciona durante
            las 24hs. del día para Clínica médica, Cirugía, Obstetricia,
            Cardiología, Hematología, Pediatría y Traumatología. <strong>Esta se encuentra en el subsuelo, frente a la capilla.</strong>
            <br />De lunes a viernes de 8 a 17 hs para consulta espontánea o guardia de
            Ginecología.
          </Typography>
        </div>
        <div className="">
        <Typography variant="lead" className="my-2" color="black">
            ¿Qué es el triage?
            </Typography>
            <Typography className="pt-3">
                Es un sistema que nos permite priorizar la atención de los pacientes en la Guardia del Hospital.
                Al llegar a la Guardia, un enfermero evaluará tus síntomas y determinará el nivel de prioridad de tu atención:
            </Typography>
            <div className="mt-4 mb-10 p-4 bg-gray-50 rounded-xl shadow-xl">
                  <Typography variant="lead" className="my-2 flex items-center" color="black">
                    <AiOutlineCaretRight color="red" /><span>Rojo: Prioridad 1</span>
                  </Typography>
                  <Typography>
                    Pacientes con riesgo de vida o en estado crítico. <strong>Atención inmediata</strong> 
                  </Typography>
                  <Typography variant="lead" color="black" className="my-2 flex items-center">
                    <AiOutlineCaretRight className="text-yellow-700" /><span>Amarillo: Prioridad 2</span>
                  </Typography>
                  <Typography>
                    Pacientes con afecciones graves o incapacitantes. Posibles complicaciones. Tiempo de espera: aproximadamente 20 minutos.
                  </Typography>
                  <Typography variant="lead" color="black"className="my-2 flex items-center">
                    <AiOutlineCaretRight color="green" /><span>Verde: Prioridad 3</span>
                  </Typography>
                  <Typography>
                    Pacientes con afecciones leves que no requieren atención urgente. Tiempo de espera: Aproximadamente 45 minutos como mínimo.
                  </Typography>
            </div>
        </div>
      </section>
    </article>
  );
};

export default Guardia;
