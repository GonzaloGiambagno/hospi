import { Typography } from "@material-tailwind/react"; // Reemplaza 'tu-librería-de-componentes' con la librería que estés utilizando
import { AiOutlineCaretRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => (
  <li className="flex items-center gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography><i>{children}</i></Typography>
  </li>
);

const NuevoConcepto = () => {
  return (
    <section className="mt-5">
      <Typography variant="h4" color="gray">
        Un nuevo concepto de medicina hospitalaria
      </Typography>
      <div className="mt-3">
        <Typography className="text-justify">
          En el sistema de salud podemos distinguir tres niveles de gestión
          estrechamente relacionados. En primer lugar, la gestión sanitaria
          macro o política y regulación sanitaria. En segundo lugar, la gestión
          sanitaria meso o gestión de organizaciones de salud y en tercer lugar
          la gestión sanitaria micro, o gestión clínica.
        </Typography>
        <Typography className="text-justify">
          En relación a la gestión de organizaciones de salud o MESO GESTIÓN, el
          Hospital Italiano de La Plata, toma como modelo de referencia a la 
          <strong className="font-semibold"> GESTIÓN DE CALIDAD</strong>, basada en 9 principios rectores:
        </Typography>
      </div>
      <div className="px-4">
        <ul className="flex flex-col gap-3">
          <ListItem>Enfoque basado en procesos.</ListItem>
          <ListItem>Decisiones basadas en evidencia.</ListItem>
          <ListItem>Mejora continua.</ListItem>
          <ListItem>Enfoque al paciente.</ListItem>
          <ListItem>Liderazgo.</ListItem>
          <ListItem>Desarrollo y participación del personal.</ListItem>
          <ListItem>Gestión de las Relaciones.</ListItem>
          <ListItem>Trabajo en equipo interdisciplinario.</ListItem>
          <ListItem>
            Respeto del marco ético-profesional-Compromiso Social.
          </ListItem>
        </ul>
      </div>
      <div className="p-4 border-b-2 border-green-300">
        <Typography className="text-justify">
          El diseño e implementación de un sistema de gestión de calidad, basado
          en estos 9 principios, aumenta la probabilidad de alcanzar los
          OBJETIVOS ESTRATÉGICOS. <br />
          La GESTIÓN CLÍNICA o MICRO GESTIÓN pretende mejorar los RESULTADOS DE
          LA PRÁCTICA CLÍNICA, y a su vez incrementar la participación e
          implicación de los profesionales en la gestión de los recursos que
          utilizan en su actividad asistencial. La disciplina fundamental de la
          gestión clínica es la Medicina y la evolución de su práctica hacia el
          creciente fundamento en la evidencia, la interiorización sobre los
          costos de oportunidad de las acciones y una mayor humanización de la
          atención y el cuidado del paciente.
          <br />
          Para llevar adelante la gestión clínica, el Hospital Italiano
          puntualiza dos estrategias fundamentales:
        </Typography>
      </div>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 divide-x">
        <div className="px-4">
          <Typography variant="h6">Modelo de Medicina Hospitalaria</Typography>
          <Typography className="text-justify">
            La implementación del Modelo de Medicina Hospitalaria se basa en la
            coordinación de la atención del paciente internado a cargo de un
            médico hospitalista preparado para tal efecto. Esta figura, cumple
            un doble rol: por un lado, integra la asistencia individual del
            paciente para evitar la fragmentación y variabilidad en este
            proceso, y por el otro, conoce y controla el cumplimiento de normas,
            políticas y procedimientos administrativos-asistenciales que ordenan
            el accionar el equipo de salud en busca de la accesibilidad,
            continuidad, calidad, seguridad y eficiencia de la atención.
          </Typography>
        </div>
        <div className="px-4">
          <Typography variant="h6">Unidades de Gestión Clínica</Typography>
          <Typography className="text-justify">
            El desarrollo de Unidades de Gestión Clínica (UGC) que pueden
            coincidir con una especialidad médica o integrar a varias de ellas,
            de acuerdo a la necesidad de interrelación de los procesos
            asistenciales. Las UGC definen un plan de gestión alineado a las
            políticas y objetivos organizacionales, el cual se formaliza en un
            acuerdo de gestión. En este acuerdo se establecen objetivos de
            actividad, calidad y seguridad que son cuantificables y monitoreados
            mediante diversos indicadores.
          </Typography>
        </div>
      </div>
      <Typography className="text-justify p-4">
        Todos los niveles de gestión requieren información para evaluar la
        evolución de la organización y el cumplimiento de sus objetivos. Es por
        ello que desarrollamos un <strong className="font-semibold">TABLERO DE COMANDO</strong> (o panel de indicadores),
        para automatizar las medidas y dar respuesta oportuna a preguntas tales
        como: qué problemas tienen los pacientes, qué acciones se llevan a cabo,
        qué resultados se obtienen y a qué costo.
      </Typography>
    </section>
  );
};

export default NuevoConcepto;
