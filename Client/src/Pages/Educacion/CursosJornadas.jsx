import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet"
import OpacityAnimated from "../../helpers/OpacityAnimated"

const CursosJornadas = () => {
  return (
    <OpacityAnimated>
    <Helmet>
      <title>Cursos y Jornadas | Hospital Italiano La Plata</title>
      <meta
        name="description"
        content="Mantenete informado sobre las proximas cursos, talleres y jornadas que damos. ¡Te esperamos para que te sumes!"
      />
    </Helmet>
    <article className="mx-auto max-w-screen-2xl md:p-4">
      <Typography variant="h3" color="green" className="mb-3 p-4 md:p-0" textGradient>
          Cursos y jornadas
      </Typography>
    </article>
  </OpacityAnimated>
  )
}

export default CursosJornadas