import BannerCovid from "../Components/Inicio/BannerCovid";
import BannerSumate from "../Components/Inicio/BannerSumate";
import CardInicio from "../Components/Inicio/CardInicio";
import Estadisticas from "../Components/Inicio/Estadisticas";
import Hero from "../Components/Inicio/Hero";
// import InstagramCarrusel from "../Components/Inicio/InstagramCarrusel";
import Ubicacion from "../Components/Ubicacion/Ubicacion";
import NewsCarrusel from "../Components/Inicio/newsCarrusel";

const Inicio = () => {
  
  return (
    <div className="mx-auto max-w-screen-2xl">
        <Hero />
        <Estadisticas />
        <CardInicio />
        <BannerCovid />
        {/* <InstagramCarrusel /> esto una vez que tenga api de instagram para mostrar reels y publi*/} 
        <NewsCarrusel />
        <BannerSumate />
        <Ubicacion />
    </div>
  )
}

export default Inicio;