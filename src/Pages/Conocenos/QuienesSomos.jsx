import { Typography } from "@material-tailwind/react";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";
import TabsConocenos from "../../Components/Conocenos/TabsConocenos";

const QuienesSomos = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Quienes Somos | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Conoce la historia de nuestro hospital"
        />
      </Helmet>
      <div className="mx-auto max-w-screen-2xl">
        <Typography variant="h3" color="green" className="py-4" textGradient>
          Queremos que nos conozcas
        </Typography>
        <Typography className="text-justify">
          En 1882 un grupo de inmigrantes con trabajo, esfuerzo y sabiduría
          hacían realidad la ciudad soñada de Dardo Rocha. Cuatro años más
          tarde, el Hospital Italiano se convertía en una de las primeras
          instituciones surgidas en el seno de aquella comunidad de pioneros.
          Este hecho hace que la historia de nuestra institución haya sido
          también reflejo de la historia de nuestra institución. Hoy,
          reafirmamos nuestro compromiso con la comunidad y con la colectividad
          italiana, honrando los hechos fundacionales y preparando el camino
          hacia el futuro.
        </Typography>
        <TabsConocenos />
      </div>
    </OpacityAnimated>
  );
};

export default QuienesSomos;
