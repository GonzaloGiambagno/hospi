import { CardHeader, Typography } from "@material-tailwind/react";
// import { useEffect } from "react";
import CountUp from "react-countup";

const Estadisticas = () => {
  return (
    <CardHeader
      variant="gradient"
      color="green"
      className="mx-auto w-11/12 sm:w-full sm:max-w-screen-2xl sm:h-auto lg:h-24 grid place-content-center mt-2 p-2 sm:p-0 "
    >
      <div className="flex flex-wrap justify-around w-full flex-col lg:gap-4 md:flex-row">
        <div className="p-2 flex flex-col justify-center items-center flex-wrap">
          <Typography variant="h5" className="count-number">
            <CountUp end={30000} duration={2.5} />
          </Typography>
          <Typography variant="paragraph">
            Consultas Ambulatorias por mes
          </Typography>
        </div>
        <div className="p-2  flex flex-col justify-center items-center flex-wrap">
          <Typography variant="h5" className="count-number">
            +<CountUp end={250} duration={2.5} />
          </Typography>
          <Typography variant="paragraph">Personas en formación</Typography>
        </div>
        <div className="p-2  flex flex-col justify-center items-center flex-wrap">
          <Typography variant="h5" className="count-number">
            <CountUp end={1000} duration={2.5} />
          </Typography>
          <Typography variant="paragraph">
            Trasplantes de Medula Osea
          </Typography>
        </div>
        <div className="p-2  flex flex-col justify-center items-center flex-wrap">
          <Typography variant="h5" className="count-number">
            +<CountUp end={1500} duration={2.5} />
          </Typography>
          <Typography variant="paragraph">
            Personas cuidando tu salud
          </Typography>
        </div>
      </div>
    </CardHeader>
  );
};

export default Estadisticas;
