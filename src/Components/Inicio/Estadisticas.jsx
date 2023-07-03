import { CardHeader, Typography } from "@material-tailwind/react";

const Estadisticas = () => {
  return (
      <CardHeader variant="gradient" color="green" className=" h-28 grid place-items-center mt-4">
        <div className="flex flex-row space-between items-center">
          <div className="p-1  text-center">
            <Typography variant="h5">
              30000
            </Typography>
            <Typography variant="paragraph">Consultas Ambulatorias</Typography>
          </div>
          <div className="p-1  text-center">
            <Typography variant="h5">
              +250
            </Typography>
            <Typography variant="paragraph">Personas En formación</Typography>
          </div>
          <div className="p-1  text-center">
            <Typography variant="h5">
              1000
            </Typography>
            <Typography variant="paragraph">Trasplantes de Medula</Typography>
          </div>
          <div className="p-1  text-center">
            <Typography variant="h5">
              +1500
            </Typography>
            <Typography variant="paragraph">Personas cuidandote</Typography>
          </div>
        </div>
      </CardHeader>
  );
};

export default Estadisticas;
