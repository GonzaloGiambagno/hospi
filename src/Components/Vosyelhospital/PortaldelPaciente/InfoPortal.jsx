import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const InfoPortal = () => {
  return (
    <section className="px-4 ">
      <div className="flex flex-col gap-2 mt-2 p-2 sm:p-0">
        <Typography variant="lead" className="mt-2" color="black">
          Ingreso al Portal
        </Typography>
        <Typography className="pt-2 text-justify">
          Para utilizar el Portal del Paciente del HOSPITAL ITALIANO LA PLATA
          tenés que:
        </Typography>
      </div>
      <div className="p-4 w-full">
        <ul className="flex flex-col flex-wrap gap-3 divide-y md:divide-y-0">
          <li className="flex sm:gap-2">
            <AiOutlineCaretRight color="green" className="hidden md:block" />
            <Typography>Ser mayor de 18 años.</Typography>
          </li>
          <li className="flex sm:gap-2 items-start">
            <AiOutlineCaretRight color="green" className="hidden md:block " />
            <Typography className="flex flex-col text-justify gap-2 md:gap-0">
              Tener un nombre de usuario y contraseña, para generar tu cuenta:
              <span className="md:pl-4">
                {" "}
                - Si ya estás empadronado o empadronada, solo debes{" "}
                <strong className="font-semibold">registrate</strong>.{" "}
              </span>
              <span className="md:pl-4">
                {" "}
                - Si aún no te empadronaste, para que podamos comprobar tu
                identidad deberás completar un breve formulario.
              </span>
            </Typography>
          </li>
          <li className="flex sm:gap-2">
            <AiOutlineCaretRight color="green" className="hidden md:block" />
            <Typography className="text-justify">
              Si es la primera vez que lo haces, completa un breve registro
              online para comprobar tu identidad y ya quedas empadronado o
              empadronada en el hospital.
            </Typography>
          </li>
        </ul>
      </div>
      {/* que podes hacer en el portal  */}
      <div className="flex flex-col gap-2 mt-2 p-2 sm:p-0 border-t-2 border-green-300">
        <Typography variant="lead" className="mt-2" color="black">
          ¿Qué podés hacer en el Portal?
        </Typography>
      </div>
      <div className="p-4 w-full">
        <ul className="flex flex-col flex-wrap gap-3 divide-y md:divide-y-0">
          <li className="flex sm:gap-2">
            <AiOutlineCaretRight color="green" className="hidden md:block" />
            <Typography>
              Reservar y visualizar turnos desde tu computadora o cualquier
              dispositivo móvil.
            </Typography>
          </li>
          <li className="flex sm:gap-2">
            <AiOutlineCaretRight color="green" className="hidden md:block" />
            <Typography>Ver tu historial de consultas.</Typography>
          </li>
          <li className="flex sm:gap-2 items-start">
            <AiOutlineCaretRight color="green" className="hidden md:block " />
            <Typography className="flex flex-col text-justify gap-2 md:gap-0">
              Consultar los resultados de las prácticas de laboratorio,
              radiología, tomografía, hematología, gastroenterología, entre
              otros.
            </Typography>
          </li>
          <li className="flex sm:gap-2">
            <AiOutlineCaretRight color="green" className="hidden md:block" />
            <Typography className="text-justify">
              Recibir recordatorios de los próximos turnos.
            </Typography>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InfoPortal;
