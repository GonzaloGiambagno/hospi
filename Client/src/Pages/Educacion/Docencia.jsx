import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet"
import OpacityAnimated from "../../helpers/OpacityAnimated"
import Leyenda from "../../Components/Educacion/Docencia/Leyenda";
import TextoCompromiso from "../../Components/Educacion/Docencia/TextoCompromiso";
import ObjetivosDocencia from "../../Components/Educacion/Docencia/ObjetivosDocencia";

const Docencia = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Docencia e Investagación | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Nuestro compromiso con la educacion"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl p-4">
        <Typography variant="h3" color="green" className="mb-3" textGradient>
            Filosofía
        </Typography>
        <Leyenda />
        <TextoCompromiso />
        <ObjetivosDocencia />
      </article>
    </OpacityAnimated>
  );
};

export default Docencia;
