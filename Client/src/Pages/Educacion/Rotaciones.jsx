import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import ContactosDocencia from "../../Components/Educacion/Formacion/ContactosDocencia";
import ImgRotaciones from "../../Components/Educacion/RotacionesyVisitas/ImgRotaciones";
import TextoRotaciones from "../../Components/Educacion/RotacionesyVisitas/TextoRotaciones";
import TabsRequisitos from "../../Components/Educacion/RotacionesyVisitas/TabsRequisitos";

const Rotaciones = () => {
  return (
    <OpacityAnimated>
    <Helmet>
      <title>Rotaciones y visitas | Hospital Italiano La Plata</title>
      <meta
        name="description"
        content="Rotaciones y visitas en el hospital para medicos, vivi tu experiencia"
      />
    </Helmet>
    <article className="mx-auto max-w-screen-2xl md:p-4">
      <Typography variant="h3" color="green" className="mb-3 p-4 sm:p-0" textGradient>
        Rotaciones y visitas
      </Typography>
        <ImgRotaciones />
        <TextoRotaciones />
        <TabsRequisitos />
      <ContactosDocencia />
    </article>
  </OpacityAnimated>
);
}

export default Rotaciones