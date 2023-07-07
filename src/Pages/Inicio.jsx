import BannerCovid from "../Components/Inicio/BannerCovid";
import BannerSumate from "../Components/Inicio/BannerSumate";
import CardInicio from "../Components/Inicio/CardInicio";
import Estadisticas from "../Components/Inicio/Estadisticas";
import Hero from "../Components/Inicio/Hero";
// import InstagramCarrusel from "../Components/Inicio/InstagramCarrusel";
import Ubicacion from "../Components/Contactos-Ubicacion/Ubicacion";
import NewsCarrusel from "../Components/Inicio/newsCarrusel";
import { Typography } from "@material-tailwind/react";
import ScrollAnimated from "../helpers/ScrollAnimated";

const Inicio = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <ScrollAnimated>
        <Hero />
      </ScrollAnimated>
      <ScrollAnimated>
        <Estadisticas />
      </ScrollAnimated>
      <ScrollAnimated>
        <CardInicio />
      </ScrollAnimated>
      <ScrollAnimated>
        <BannerCovid />
      </ScrollAnimated>
      <ScrollAnimated>
        <NewsCarrusel />
      </ScrollAnimated>

      <ScrollAnimated>
        <BannerSumate />
      </ScrollAnimated>

      <ScrollAnimated>
        <Typography variant="h4" color="green" className="p-5">
          Donde Estamos?
        </Typography>
        <Ubicacion />
      </ScrollAnimated>
    </div>
  );
};

export default Inicio;
