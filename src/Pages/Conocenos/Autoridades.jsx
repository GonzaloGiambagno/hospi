import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet"
import OpacityAnimated from "../../helpers/OpacityAnimated"
import ConsejoDirectivo from "../../Components/Conocenos/Autoridades/ConsejoDirectivo";
import Consejeros from "../../Components/Conocenos/Autoridades/Consejeros";
import Fiscalizadora from "../../Components/Conocenos/Autoridades/ComisionFiscalizadora";
import DirectorGeneral from "../../Components/Conocenos/Autoridades/DirectorGeneral";
import ConsejerosHonorarios from "../../Components/Conocenos/Autoridades/ConsejerosHonorarios";
import DireccionesYGerencias from "../../Components/Conocenos/Autoridades/DireccionesYGerencias";
import JefesDeServicio from "../../Components/Conocenos/Autoridades/JefesDeServicio";

const Autoridades = () => {
    return (
        <OpacityAnimated>
        <Helmet>
          <title>Autoridades | Hospital Italiano La Plata</title>
          <meta
            name="description"
            content="Les presentamos las autoridades de nuestra institucion"
          />
        </Helmet>
        <main className="mx-auto max-w-screen-2xl p-4">
          <Typography variant="h4" color="green" className="text-center sm:text-left" textGradient>
            Autoridades
          </Typography>
          <article className="px-4 md:px-0">
            <ConsejoDirectivo />
            <Consejeros />
            <Fiscalizadora />
            <DirectorGeneral />
            <ConsejerosHonorarios />
            <DireccionesYGerencias />
            <JefesDeServicio />
        </article>
        </main>
      </OpacityAnimated>
    );
  };
  
  export default Autoridades;
  