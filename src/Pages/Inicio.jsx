import BannerCovid from "../Components/Inicio/BannerCovid";
import CardInicio from "../Components/Inicio/CardInicio";
import Estadisticas from "../Components/Inicio/Estadisticas";
import Hero from "../Components/Inicio/Hero";

const Inicio = () => {
  return (
    <section className="mx-auto max-w-screen-2xl">
        <Hero />
        <Estadisticas />
        <CardInicio />
        <BannerCovid />
    </section>
  )
}

export default Inicio;