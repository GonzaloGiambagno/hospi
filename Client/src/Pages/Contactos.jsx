import { Typography } from "@material-tailwind/react";
import InfoContacto from "../Components/Contactos-Ubicacion/InfoContacto";
import Ubicacion from "../Components/Contactos-Ubicacion/Ubicacion";
import Internos from "../Components/Contactos-Ubicacion/Internos";
import OpacityAnimated from "../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";

const Contactos = () => {
  return (
    <OpacityAnimated>
        <Helmet>
        <title>Contactos | Hospital Italiano La Plata</title>
        <meta name="description" content="Contactate con el hospital y encontranos, ¡no dudes en consultar¡" />
      </Helmet>
    <div className="mx-auto max-w-screen-2xl p-4">
      <Typography
        variant="h3"
        color="green"
        className="mb-3"
        textGradient
      >
        Contactos
      </Typography>
      <Ubicacion />
      <InfoContacto />
      <Internos />
    </div>
    </OpacityAnimated>
  );
};

export default Contactos;
