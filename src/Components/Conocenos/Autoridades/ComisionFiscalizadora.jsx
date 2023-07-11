import { Typography } from "@material-tailwind/react";
import { BiUserCircle } from "react-icons/bi";

const Fiscalizadora = () => {
  const data1 = [
    {
      usuario: "Walter Florentino Franceschini",
      cargo: "Presidente",
    },
    {
      usuario: "Cav. Evaristo Pedro Cinquetti",
      cargo: "Secretario",
    },
  ];
  const data2 = [
    {
      usuario: "Lic. Gabriela Dalfi Tanzi",
      cargo: "Miembro Titular",
    },
    {
      usuario: "Lic. Bárbara Lilia Milone",
      cargo: "Miembro Suplente",
    },
  ];

  return (
    <div className="py-4 border-b-2 border-green-100">
      <Typography variant="h5" color="gray" className="mb-5">
        Comisión fiscalizadora
      </Typography>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-col gap-2 md:w-1/2">
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
        <div className="flex flex-col gap-2">
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

export default Fiscalizadora;
