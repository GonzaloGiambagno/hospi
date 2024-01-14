import { Typography, Button } from "@material-tailwind/react";
import Canossianas from "../../../assets/pdf/Canossianas.pdf";

const TextoEspiritualidad = () => {
  return (
    <article className="w-full xl:w-4/5">
      <Typography variant="h6" className="">
        Nuestra conexión con la Fe
      </Typography>
      <Typography className="text-justify">
        La Espiritualidad es la parte más profunda e íntima de cada persona, que
        permite con sabiduría, valor y autocontrol alcanzar metas más elevadas
        que las cotidianas, para alcanzar con humildad los objetivos que el
        Hospital propone. Este valor, es el que nos impulsa día a día continuar
        creciendo, conectándonos con nosotros mismos.
      </Typography>
      <section className="flex flex-col gap-2 pr-4">
        <Typography className="text-justify">
          La capilla es un lugar en el que los pacientes se encuentran con Dios
          y consigo, un ámbito de reflexión y aceptación de las realidades que
          atraviesa nuestra vida.{" "}
        </Typography>
        <Typography className="text-justify">
          En este lugar sagrado se ofrece servicio sacramental y consejería
          espiritual a cargo del Capellán.
        </Typography>
        <Typography className="text-justify">
          El capellán además, recorre habitualmente las habitaciones y
          administra los sacramentos a quienes de manera libre y espontánea los
          solicitan.
        </Typography>
        <Typography className="text-justify">
          En este lugar sagrado se ofrece servicio sacramental y consejería
          espiritual a cargo del Capellán y LAS HERMANAS CANOSIANAS.
        </Typography>
      </section>
      <a href={Canossianas} download={Canossianas}>
        <Button
          variant="gradient"
          color="green"
          className="rounded-full mt-3 normal-case"
        >
          Conocé la tarea de las Hermanas Canossianas
        </Button>
      </a>
    </article>
  );
};

export default TextoEspiritualidad;
