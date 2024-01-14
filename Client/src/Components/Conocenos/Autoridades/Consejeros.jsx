import { Typography } from "@material-tailwind/react";
import { BiUserCircle } from "react-icons/bi";

const Consejeros = () => {
  const dataTitulares = [
    {
      usuario: "Bioq. Claudio Duymovich",
    },
    {
      usuario: "Cdor. Isidro Martinez Campodónico",
    },
    {
      usuario: "Sr. Gustavo César Gicolini",
    },
  ];
  const dataSuplentes = [
    {
      usuario: "Ing. Oscar Antonucci",
    },
    {
      usuario: "Ing. Anibal Prenassi",
    },
  ];

  return (
    <div className="py-3 border-b-2 border-green-100">
      <Typography variant="h5" color="gray">
        Consejeros
      </Typography>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-col md:w-1/2">
            <Typography variant="h6" color="gray" className="py-3">Titulares: </Typography>
          {dataTitulares.map(({ usuario }) => (
            <ul key={usuario}>
              <li>
                <Typography
                  className="mb-1 flex gap-2 items-center"
                >
                  <BiUserCircle size={24} color="green" className="flex w-6 flex-shrink-0" />
                  {usuario}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <div className="flex flex-col">
          <Typography variant="h6" color="gray"  className="py-3">Suplentes:</Typography>
          {dataSuplentes.map(({ usuario }) => (
            <ul key={usuario}>
              <li>
                <Typography
                  className="mb-1 flex gap-2 items-center"
                >
                  <BiUserCircle size={24} color="green" className="flex w-6 flex-shrink-0" />
                  {usuario}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consejeros;
