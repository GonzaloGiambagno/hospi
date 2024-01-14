import { Typography } from "@material-tailwind/react";
import { BsTelephone } from "react-icons/bs";

const Dialisis = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Diálisis
      </Typography>
      <section className="md:px-4">
        <div className="flex items-center gap-2 ">
          <BsTelephone color="green" size={20} />
          <Typography>
            Secretaría || Horarios de Atención: de 10 a 14 hs. - Int. 304 / 250
          </Typography>
        </div>
      </section>
    </article>
  );
};

export default Dialisis;