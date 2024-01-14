import { Typography } from "@material-tailwind/react";
import { BiUserCircle } from "react-icons/bi";

const ConsejoDirectivo = () => {
  const data1 = [
    {
      usuario: "Cav. Francisco Julio Augusto Mandolín",
      cargo: "Presidente",
    },
    {
      usuario: "Cav. Nazareno Fanelli",
      cargo: "Vicepresidente",
    },
    {
      usuario: "Sra. María Lila Ana Campodónico",
      cargo: "Secretaria",
    },]
    const data2 =[
    {
      usuario: "Cdor. Guillermo José Tittarelli",
      cargo: "Vicesecretario",
    },
    {
      usuario: "Sr. Marcelo Raúl Cinquetti",
      cargo: "Tesorero",
    },
    {
      usuario: "Cdor. Mario Migliavacca",
      cargo: "Vicetesorero",
    },
  ];

  return (
    <div className="py-3 border-b-2 border-green-100">
      <Typography variant="h5" color="gray" className="mb-5">
        Consejo Directivo
      </Typography>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-col gap-2 md:w-1/2 ">
        {data1.map(({ usuario, cargo }) => (
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

export default ConsejoDirectivo;
