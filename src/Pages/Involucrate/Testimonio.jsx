import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import VideoSusana from "../../Components/Involucrate/testimonio/VideoSusana";
import Encuestas from "../../Components/Involucrate/testimonio/Encuestas";
import Comentarios from "../../Components/Involucrate/testimonio/Comentarios";

const Testimonio = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Testimonios | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Compartí tu experiencia con nosotros!"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl p-4">
        <Typography variant="h3" color="green" className="mb-3" textGradient>
          Da tu testimonio
        </Typography>
        <VideoSusana />
        <Encuestas />
        <Comentarios />
      </article>
    </OpacityAnimated>
  );
};

export default Testimonio;
