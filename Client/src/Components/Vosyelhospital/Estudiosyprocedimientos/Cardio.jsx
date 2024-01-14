import { Typography } from "@material-tailwind/react";
import { BsTelephone } from "react-icons/bs";

const Cardiologia = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Prácticas Cardiológicas
      </Typography>
      <section className="md:px-4">
        <div className="flex items-center gap-2 ">
          <BsTelephone color="green" size={20} />
          <Typography>
            Secretaría || Horarios de Atención: lunes a viernes de 8 a 20 hs. y sábados de 8 a 12hs. - Int. 223
          </Typography>
        </div>
      </section>
    </article>
  );
};

export default Cardiologia;