import { Typography } from "@material-tailwind/react";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";
import ItemsCalidad from "../../Components/Conocenos/CalidadYSeguridad/ItemsCalidad";

const Calidad = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Calidad y seguridad | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Calidad en salud, mejora de procesos para los pacientes y sus familias."
        />
      </Helmet>
      <div className="mx-auto max-w-screen-2xl px-6 lg:p-0">
        <Typography variant="h3" color="green" className="py-4" textGradient>
            Calidad en la salud
        </Typography>
        <Typography className="text-justify">
            El Hospital Italiano de la Plata promueve la investigación, la mejora continua de los procesos, la capacitación permanente del recurso humano y la gestión sustentable, enfocando sus acciones de calidad al paciente y su familia.
        </Typography>
        <ItemsCalidad />
      </div>
    </OpacityAnimated>
  )
}

export default Calidad;