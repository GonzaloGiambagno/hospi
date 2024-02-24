import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import OpacityAnimated from "../../helpers/OpacityAnimated";




const Noticias = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Ultimas Noticias | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Ultimas Noticias del hospital italiano de la plata"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl sm:p-4 mt-2 sm:mt-0">
        <Typography
          variant="h4"
          color="green"
          className="text-center sm:text-left"
          textGradient
        >
          Ultimas Noticias
        </Typography>
        <section className="">
        </section>
      </article>
    </OpacityAnimated>
  );
};

export default Noticias;
