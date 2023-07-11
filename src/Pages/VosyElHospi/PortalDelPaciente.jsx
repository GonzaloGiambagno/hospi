import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import ImagenPortal from "../../Components/Vosyelhospital/PortaldelPaciente/ImagenPortal";
import InfoPortal from "../../Components/Vosyelhospital/PortaldelPaciente/InfoPortal";
import RecuperarCred from "../../Components/Vosyelhospital/PortaldelPaciente/RecuperarCred";
import OpacityAnimated from "../../helpers/OpacityAnimated";

const PortalDelPaciente = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Portal del paciente | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Descubri todas las funcionalidades del portal del paciente! Saca turno con nuestros profesionales y mira tus estudios realizados"
        />
      </Helmet>
      <div className="mx-auto max-w-screen-2xl p-4">
        <Typography variant="h3" color="green" className="py-5 text-center sm:text-left" textGradient>
          Portal del paciente
        </Typography>
        <article>
            <ImagenPortal />
            <InfoPortal />
            <RecuperarCred />
        </article>
      </div>
    </OpacityAnimated>
  );
};

export default PortalDelPaciente;
