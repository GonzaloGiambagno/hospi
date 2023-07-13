import { Typography } from "@material-tailwind/react";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";
import TextoEspiritualidad from "../../Components/Conocenos/Espiritualidad/TextoEspiritualidad";
import HorarioCulto from "../../Components/Conocenos/Espiritualidad/HorarioCulto";


const Espiritualidad = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Espiritualidad | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Nuestra conexion con la fé - conoce horarios de culto "
        />
      </Helmet>
      <div className="mx-auto max-w-screen-2xl px-2 lg:p-0">
        <Typography variant="h3" color="green" className="p-2" textGradient>
            Espiritualidad
        </Typography>
        <section className="flex flex-col xl:flex-row px-2 gap-4">
        <TextoEspiritualidad />
        <HorarioCulto />
        </section>
      </div>
    </OpacityAnimated>
  )
}

export default Espiritualidad;