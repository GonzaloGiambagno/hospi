import { Typography } from "@material-tailwind/react";
import HorariosVisita from "./HorariosVisita";

const InfoInternacion = () => {
  const data = [
    {
      pregunta:
        "¿Qué documentación debo presentar en el Hospital para ser atendido?",
      respuesta:
        "Para poder ser atendido en nuestro Hospital tenés que traer tu DNI y el carnet de tu obra social.",
    },
    {
      pregunta: "¿Cómo solicitar un turno por primera vez?",
      respuesta:
        "Podés solicitar un turno llamando a la central de turnos (0221) 4573001 de Lunes a Viernes de 8 a 16hs, o bien al (0221) 512 9500 donde te van a derivar con la secretaría de la especialidad correspondiente. Si estás registrado en el Portal del Paciente, podés solicitar un turno por allí.",
    },
    {
      pregunta: "¿Qué debo hacer si necesito cancelar una cita?",
      respuesta:
        "Podés cancelar un turno llamando a la central de turnos (0221) 4573001 de Lunes a Viernes de 8 a 16hs, o bien al (0221) 512 9500 donde te van a derivar con la secretaría de la especialidad correspondiente. Si estás registrado en el Portal del Paciente, podés realizar la cancelación del turno por allí.",
    },
    {
      pregunta:
        "¿Qué requisitos o documentación necesito para hacerme un estudio?",
      respuesta: [
        "Dependiendo el estudio que tengas que realizarte, tenés que sacar el turno, necesitas autorizar la orden en tu obra social o bien dejarla en el sector donde te vas a realizar el estudio para que desde el Hospital gestionemos la autorización.",
        "En caso que el estudio requiera preparación previa, se te indicará cuando saques el turno en secretaría.",
      ],
    },
    {
      pregunta: "¿Qué trámites tengo que hacer si tengo que internarme?",
      respuesta: [
        "Antes de la cirugía: A la salida del consultorio donde el médico te indicó qué día te vas operar, acercate por la Oficina de Programación de Internación o Reserva; ahí te indicarán los estudios pre quirúrgicos y pasos a seguir.",
        "El día de la cirugía: Para realizar los trámites de internación, tenés que acercarte personalmente al sector Admisión y sacar número para ser atendido por la secretaría correspondiente. No te olvides traer tu DNI y el último recibo de sueldo.",
      ],
    },
    {
      pregunta: "¿Cuáles son los horarios de visita de internación?",
      respuesta: <HorariosVisita />,
    },
    {
      pregunta: "Cómo puedo contactar con la habitación en la que se encuentra un paciente hospitalizado?",
      respuesta: "Para saber el lugar donde se encuentra un paciente hospitalizado, tenés que consultar en el mostrador de Informes que se encuentra en el Hall de Entrada del Hospital, o en Orientación al Paciente. Allí te van a indicar dónde se encuentra y cómo llegar a la visita.",
    },
    {
      pregunta: "¿Cómo puedo acceder a mi historia clínica?",
      respuesta: ["Si lo que necesitas es acceder a tus estudios o historial de atención, los podés visualizar, registrándote en el Portal del Paciente.",
      "Si lo que necesitás es la historia clínica para hacer trámites, comunicate al (0221) 512 9500 interno 264 o 341 o bien acercate con DNI original al sector de Orientación al Paciente."],
    },
    {
      pregunta: "¿Dónde puedo informar un problema que tuve con el hospital?",
      respuesta: "Si tuviste algún inconveniente con nuestro Hospital, comunicate al mail info@italianolaplata.org.ar, al teléfono (0221) 512 9500 interno 341 o 264 o personalmente en el Sector Orientación al Paciente.",
    },
    {
      pregunta: "¿El Hospital Italiano La Plata es un hospital público/privado?",
      respuesta: "El Hospital Italiano es un Hospital de carácter Privado",
    },
  ];

  return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Atención al paciente, documentación y trámites
      </Typography>
      <section className="md:px-4">
        {data.map(({ pregunta, respuesta }) => (
          <div key={pregunta} className="flex flex-col gap-2 divide-y">
            <Typography color="black" variant="lead" className="mt-2">
              {pregunta}
            </Typography>
            <Typography className="pt-2 text-justify">{respuesta}</Typography>
          </div>
        ))}
      </section>
    </article>
  );
};

export default InfoInternacion;
