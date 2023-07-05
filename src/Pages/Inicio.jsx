import BannerCovid from "../Components/Inicio/BannerCovid";
import BannerSumate from "../Components/Inicio/BannerSumate";
import CardInicio from "../Components/Inicio/CardInicio";
import Estadisticas from "../Components/Inicio/Estadisticas";
import Hero from "../Components/Inicio/Hero";
import InstagramCarrusel from "../Components/Inicio/InstagramCarrusel";
import Ubicacion from "../Components/Inicio/Ubicacion";

const Inicio = () => {
  return (
    <section className="mx-auto max-w-screen-2xl">
        <Hero />
        <Estadisticas />
        <CardInicio />
        <BannerCovid />
        <InstagramCarrusel />
        <BannerSumate />
        <Ubicacion />
    </section>
  )
}

export default Inicio;