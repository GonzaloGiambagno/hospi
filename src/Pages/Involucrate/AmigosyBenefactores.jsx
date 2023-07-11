import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import Benefactores from "../../Components/Involucrate/Benefactores";

const AmigosyBenefactores = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Amigos y benefactores | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Te presentamos los amigos y benefactores de nuestro hospital"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl p-4">
        <Typography variant="h3" color="green" className="mb-3" textGradient>
            Amigos y benefactores
        </Typography>
        <Benefactores />
      </article>
    </OpacityAnimated>
  );
};

export default AmigosyBenefactores;
