import { Suspense } from "react";
import BannerSumate from "../Components/Inicio/BannerSumate";
// import CardInicio from "../Components/Inicio/CardInicio";
import CardInfo from "../Components/Inicio/CardInfo";
import Estadisticas from "../Components/Inicio/Estadisticas";
import Carrusel from "../Components/Inicio/Carrusel.jsx";
// import Hero from "../Components/Inicio/Hero";
// import InstagramCarrusel from "../Components/Inicio/InstagramCarrusel";
import Ubicacion from "../Components/Contactos-Ubicacion/Ubicacion";
import { Typography } from "@material-tailwind/react";
import ScrollAnimated from "../helpers/ScrollAnimated";
import { Helmet } from "react-helmet";
import SectionUltimasNoticias from "../Components/Inicio/SectionUltimasNoticias.jsx";

const Inicio = () => {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <Helmet>
        <title>Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Hospital Italiano de La Plata, Todo sobre nosotros!"
        />
      </Helmet>
      <ScrollAnimated>{/* <Hero /> */}</ScrollAnimated>
      <ScrollAnimated>
        <Suspense fallback={<div>Cargando...</div>}>
          {/* <NewsCarrusel /> */}
          <Carrusel />
        </Suspense>
      </ScrollAnimated>
      <ScrollAnimated>
        <Estadisticas />
      </ScrollAnimated>
      <ScrollAnimated>
        {/* <CardInicio /> */}
        <CardInfo />
      </ScrollAnimated>
      <ScrollAnimated>
        <SectionUltimasNoticias />
      </ScrollAnimated>
      <ScrollAnimated>
        <BannerSumate />
      </ScrollAnimated>

      <ScrollAnimated>
        <Typography variant="h4" color="green" className="px-4 my-6">
          Donde Estamos?
        </Typography>
        <Ubicacion />
      </ScrollAnimated>
    </main>
  );
};

export default Inicio;
