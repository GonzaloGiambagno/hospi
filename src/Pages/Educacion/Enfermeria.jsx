import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet"
import OpacityAnimated from "../../helpers/OpacityAnimated"
import ImgAlumnos from "../../Components/Educacion/Enfermeria/ImgAlumnos";
import CardsEnfermeria from "../../Components/Educacion/Enfermeria/CardsEnfermeria";
import Inscripciones from "../../Components/Educacion/Enfermeria/Inscripciones";
import Filosofia from "../../Components/Educacion/Enfermeria/Filosofia";
import ContactosInstituto from "../../Components/Educacion/Enfermeria/ContactosInstituto";



const Enfermeria = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Tecnicatura Superior en Enfermería | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Conocé todos los requisitos para estudiar con nosotros.¡Te esperamos para que te sumes!"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl md:p-4">
        <Typography variant="h3" color="green" className="mb-3 p-4 md:p-0" textGradient>
            Tecnicatura Superior en Enfermería
        </Typography>
        <ImgAlumnos />
        <Inscripciones />
        <CardsEnfermeria />
        <Filosofia />
        <ContactosInstituto />
      </article>
    </OpacityAnimated>
  )
}

export default Enfermeria