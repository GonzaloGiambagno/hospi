import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import DerechosComp from "../../Components/Vosyelhospital/DerechosyResp/DerechosComp";
import Responsabilidades from "../../Components/Vosyelhospital/DerechosyResp/Responsabilidades";

const Derechos = () => {
  return (
    <>
      <Helmet>
        <title>Derechos y Responsabilidades | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Conocé tus derechos y tus responsabilidades como paciente"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl">
        <Typography
          variant="h3"
          color="green"
          className="py-5 text-center sm:text-left"
          textGradient
        >
          Derechos y responsabilidades
        </Typography>
        <Typography className="px-2">
          Como paciente de cualquier centro de salud tenes ciertos derechos y
          responsabilidades. Que los conozcas es importante para que puedas
          exigirlos y cumplirlas, que trabajemos en conjunto para lograrlo es
          fundamental para que tu paso por el Hospital sea lo más satisfactorio
          posible.
        </Typography>
        <DerechosComp />
        <Responsabilidades />
      </article>
    </>
  );
};

export default Derechos;
