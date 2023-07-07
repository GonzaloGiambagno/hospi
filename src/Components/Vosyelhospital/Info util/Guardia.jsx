import { Typography } from "@material-tailwind/react";

const Guardia = () => {
  return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="p-4">
        Guardia y Emergencias
      </Typography>
      <section className="md:px-6 ">
        <div className="divide-y">
          <Typography variant="lead" className="my-2">
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
        <div className="divide-y">
            <Typography variant="lead" className="my-2">
            ¿Qué es el triage?
            </Typography>
            <Typography className="pt-3">
                Es un sistema que nos permite priorizar la atención de los pacientes en la Guardia del Hospital.
                Al llegar a la Guardia, un enfermero evaluará tus síntomas y determinará el nivel de prioridad de tu atención:
            </Typography>
        </div>
      </section>
    </article>
  );
};

export default Guardia;
