import { Helmet } from "react-helmet"
import ImgGestion from "../../Components/Conocenos/ModeloGestion/ImgGestion"
import OpacityAnimated from "../../helpers/OpacityAnimated"
import { Typography } from "@material-tailwind/react";
import NuevoConcepto from "../../Components/Conocenos/ModeloGestion/NuevoConcepto";

const ModeloGestion = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Modelo de Gestion | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Conocé nuestro modelo de gestion Hospitalaria"
        />
      </Helmet>
      <main className="mx-auto max-w-screen-2xl">
        <Typography variant="h4" color="green" className="py-5 text-center sm:text-left" textGradient>
            Modelo de Gestión hospitalaria
        </Typography>
        <article>
            <ImgGestion />
            <NuevoConcepto />
        </article>
      </main>
    </OpacityAnimated>
  )
}

export default ModeloGestion