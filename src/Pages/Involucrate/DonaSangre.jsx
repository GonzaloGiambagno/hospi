import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet"
import OpacityAnimated from "../../helpers/OpacityAnimated"
import ImgDonacion from "../../Components/Involucrate/ImgDonacion";



const DonaSangre = () => {
  return (
    <OpacityAnimated>
        <Helmet>
        <title>Doná | Hospital Italiano La Plata</title>
        <meta name="description" content="Informacion sobre la donacion de sangre y/o tejidos, ¡Salva vidas¡" />
      </Helmet>
    <article className="mx-auto max-w-screen-2xl p-4">
      <Typography
        variant="h3"
        color="green"
        className="mb-3"
        textGradient
      >
        Doná sangre y/o tejidos
      </Typography>
        <ImgDonacion />
        
    </article>
    </OpacityAnimated>
  )
}

export default DonaSangre
