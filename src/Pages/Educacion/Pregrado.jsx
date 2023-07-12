import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import ContactosDocencia from "../../Components/Educacion/Formacion/ContactosDocencia";
import TabsPracticas from "../../Components/Educacion/Formacion/Pregrado/TabsPracticas.jsx";

const Pregrado = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Pregrado | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Practicas profesionales en nuestro hosptital"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl p-4">
        <Typography variant="h3" color="green" className="mb-3" textGradient>
          Formacion Profesional
        </Typography>
        <Typography>
          El Hospital Italiano de La Plata es una de las Unidades Académicas que
          ofrece las Prácticas Obligatorias para carreras afines a la salud.
          Dichas prácticas consisten en la posibilidad de que el estudiante
          universitario pueda tener una experiencia profesional en nuestro
          Hospital, cumpliendo así con los requisitos solicitados en su plan de
          estudios.
        </Typography>
        <TabsPracticas />
        <ContactosDocencia />
      </article>
    </OpacityAnimated>
  );
};

export default Pregrado;
