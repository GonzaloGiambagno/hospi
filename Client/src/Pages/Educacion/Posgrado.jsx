import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import ContactosDocencia from "../../Components/Educacion/Formacion/ContactosDocencia";
import ImgPosgrado from "../../Components/Educacion/Formacion/Posgrado/ImgPosgrado";
import TextoPosgrado from "../../Components/Educacion/Formacion/Posgrado/TextoPosgrado";
import TabPosgrado from "../../Components/Educacion/Formacion/Posgrado/TabPosgrado";

const Posgrado = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Posgrado | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Realizá tu residencia o fellowship con nosotros"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl md:p-4">
        <Typography variant="h3" color="green" className="mb-3 p-4 sm:p-0" textGradient>
          Posgrado
        </Typography>
        <ImgPosgrado />
        <TextoPosgrado />
        <TabPosgrado />
        <ContactosDocencia />
      </article>
    </OpacityAnimated>
  );
};

export default Posgrado;