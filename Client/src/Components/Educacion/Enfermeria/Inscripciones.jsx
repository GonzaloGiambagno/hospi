import { Button, Typography } from "@material-tailwind/react";
import planEstudios from "../../../assets/pdf/Plan_de_estudios.pdf";
import resolucion from "../../../assets/pdf/RM_854_16_Tecnicatura_Enfermeria_curricula.pdf";
import { BiUserCircle } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const ListItem = ({ cargo, usuario }) => (
  <div className="flex flex-col">
  <Typography className="flex gap-2 items-center">
    <BiUserCircle
      size={24}
      color="green"
      className="flex w-6 flex-shrink-0"
    />
      {usuario}
  </Typography>
  <Typography variant="h6" color="gray" className="pl-8">
    <i>{cargo}</i>
  </Typography>
</div>
);

const Inscripciones = () => {
  return (
    <div className="mt-5 divide-y p-4 md:p-0">
      <div className="pb-2">
      <Typography variant="h5">Inscripciones 2023</Typography>
      <Typography className="py-3">
        Conocé todos los requisitos para estudiar con nosotros.
      </Typography>
      <Typography>
        Preinscripciones abiertas.{" "}
        <strong className="font-bold">¡Te esperamos para que te sumes!</strong>
      </Typography>
      </div>
      <div className="pt-2 pb-4">
        <Typography variant="h5" className="mt-2">
          Plan de estudios
        </Typography>
        <Typography className="py-1">
          Conocé el plan de estudios y sus correlatividades de los tres años de
          la tecnicatura superior en enfermería. Descargá todo el material
          necesario aquí:
        </Typography>
        <div className="flex flex-wrap gap-5 mt-2 justify-center">
          <a href={planEstudios} download={planEstudios}>
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Plan de estudio
            </Button>
          </a>
          <a href={resolucion} download={resolucion}>
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Resolucion del Ministerio 854/16
            </Button>
          </a>
        </div>
      </div>
      <div className="py-2">
        <Typography variant="h5" className="mt-2">
          Autoridades y plantel docente
        </Typography>
        <ul className="p-4 flex flex-wrap justify-between">
          <ListItem usuario="Lic. Virginia Mainetti" cargo="Directora"/>
          <ListItem usuario="Prof. Victoria, Lamanna" cargo="Secretaria"/>
          <ListItem usuario="Sra. María Lila Ana, Campodónico" cargo="Representante legal"/>
          <ListItem usuario="Lic. Gabriela, Dalfi Tanzi" cargo="Representante legal"/>
        </ul>
      </div>
    </div>
  );
};

export default Inscripciones;
