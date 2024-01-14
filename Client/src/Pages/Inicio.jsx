import { lazy, Suspense } from 'react';
// import BannerCovid from "../Components/Inicio/BannerCovid";
import BannerSumate from "../Components/Inicio/BannerSumate";
import CardInicio from "../Components/Inicio/CardInicio";
import Estadisticas from "../Components/Inicio/Estadisticas";
import Hero from "../Components/Inicio/Hero";
// import InstagramCarrusel from "../Components/Inicio/InstagramCarrusel";
import Ubicacion from "../Components/Contactos-Ubicacion/Ubicacion";
// import NewsCarrusel from "../Components/Inicio/newsCarrusel";
import { Typography } from "@material-tailwind/react";
import ScrollAnimated from "../helpers/ScrollAnimated";
import { Helmet } from 'react-helmet';

const NewsCarrusel = lazy(() => import('../Components/Inicio/newsCarrusel'));

const Inicio = () => {
  return (
    <main className="mx-auto max-w-screen-2xl md:px-4">
        <Helmet>
        <title>Hospital Italiano La Plata</title>
        <meta name="description" content="Hospital Italiano de La Plata, Todo sobre nosotros!" />
      </Helmet>
      <ScrollAnimated>
        <Hero />
      </ScrollAnimated>
      <ScrollAnimated>
        <Estadisticas />
      </ScrollAnimated>
      <ScrollAnimated>
        <CardInicio />
      </ScrollAnimated>
      {/* <ScrollAnimated>
        <BannerCovid />
      </ScrollAnimated> */}
      <ScrollAnimated>
        <BannerSumate />
      </ScrollAnimated>
      <ScrollAnimated>
        <Suspense fallback={<div>Cargando...</div>}>
          <NewsCarrusel />
        </Suspense>
      </ScrollAnimated>


      <ScrollAnimated>
        <Typography variant="h4" color="green" className="p-5 mt-5">
          Donde Estamos?
        </Typography>
        <Ubicacion />
      </ScrollAnimated>
    </main>
  );
};

export default Inicio;