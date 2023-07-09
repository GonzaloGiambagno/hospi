import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

  const HorariosVisita = () => {
    const horariosData = [
        {
            servicio: "Internación General:",
            horarios: "De 11 a 12hs y de 17 a 19hs. Parte de 8 a 12 hs.",
        },
        {
            servicio: "Maternidad:",
            horarios: "de 11 a 12hs y de 17 a 19hs.",
        },
        {
            servicio: "Trasplantes e inmunocomprometidos:",
            horarios: "Parte médico a las 11hs y visitas de 16 a 18hs.",
        },
        {
            servicio: "Unidad Coronaria ",
            horarios: "de 11.30 a 12.30hs y de 20 a 20.30hs. Parte médico 11.30 hs.",
        },
        {
            servicio: "Unidad de Cuidados Intensivos Adultos (PB, 2° y 3° piso):",
            horarios: "de 12 a 13hs y de 18 a 19 hs. Parte médico 12 hs.",
        },
        {
            servicio: "Neonatología:",
            horarios: "Domingos de 16 a 18hs, abuelos y hermanos del paciente.",
        },
    ]
    return (
      <div>
        <Card className="mb-4 w-full shadow-none">
          <CardBody className="p-0">
            <div className="px-4">
                {horariosData.map(({ servicio, horarios }) => (
                    <div key={servicio}>
                        <Typography color="black" variant="paragraph" className="my-1 flex items-center font-bold">
                            <AiOutlineCaretRight color="#5BB35F" />{servicio}
                        </Typography>
                        <Typography>{horarios}</Typography>
                    </div>
                    ))}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default HorariosVisita;