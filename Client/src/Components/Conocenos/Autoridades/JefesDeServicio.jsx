import { Typography } from "@material-tailwind/react";
import { BiUserCircle } from "react-icons/bi";

const JefesDeServicio = () => {
  const data = [
    {
      usuario: "Nahuel Ruiz Clavijo",
      cargo: "Sector Ambulatorio",
    },
    {
      usuario: "Lic. Esteban Mostacchio",
      cargo: "Sector Guardias",
    },
    {
      usuario: "Lic. Andrea Roblero y Lic. Fabiana Romoli",
      cargo: "Sector Enfermería",
    },
    {
      usuario: "Lic. Paola Martínez",
      cargo: "Sector Planta Quirúrgica",
    },
    {
      usuario: "Abog. Micaela Fernandez",
      cargo: "Sector Legales",
    },
  ];
  const data2 = [
    {
      usuario: "Romina Barchuk",
      cargo: "Sector Hotelería",
    },
    {
      usuario: "Javier Panza",
      cargo: "Sector Compras",
    },
    {
      usuario: "Cdor. Lucas Dovale",
      cargo: "Sector Contable",
    },
    {
      usuario: "Farm. Marcela Rodo",
      cargo: "Sector Farmacia",
    },
  ];

  return (
    <div className="pt-4">
      <Typography variant="h5" color="gray" className="mb-5">
        Jefes de servicio
      </Typography>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-col gap-2 md:w-1/2 ">
          {data.map(({ usuario, cargo }) => (
            <div key={usuario} className="flex flex-col">
              <Typography key={usuario} className="flex gap-2 items-center">
                <BiUserCircle
                  size={24}
                  color="green"
                  className="flex w-6 flex-shrink-0"
                />
                {usuario}
              </Typography>
              <Typography variant="h6" color="gray" className="pl-8">
                <i>{cargo}</i>
              </Typography>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 ">
          {data2.map(({ usuario, cargo }) => (
            <div key={usuario} className="flex flex-col">
              <Typography key={usuario} className="flex gap-2 items-center">
                <BiUserCircle
                  size={24}
                  color="green"
                  className="flex w-6 flex-shrink-0"
                />
                {usuario}
              </Typography>
              <Typography variant="h6" color="gray" className="pl-8">
                <i>{cargo}</i>
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JefesDeServicio;
