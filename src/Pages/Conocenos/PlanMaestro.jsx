import { Typography } from "@material-tailwind/react";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";
import Reorganizacion from "../../Components/Conocenos/PlanMaestro/Reorganizacion";
import DescriPlan from "../../Components/Conocenos/PlanMaestro/DescriPlan";

const PlanMaestro = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Plan Maestro | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="El Plan Maestro define una nueva organización funcional,Informate sobre nuestro proyecto"
        />
      </Helmet>
      <div className="mx-auto max-w-screen-2xl p-4 ">
        <Typography variant="h3" color="green" className="mb-3" textGradient>
            Reorganización funcional
        </Typography>
        <Reorganizacion />
        <DescriPlan />
      </div>
    </OpacityAnimated>
  )
}

export default PlanMaestro