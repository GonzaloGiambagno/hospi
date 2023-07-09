import { Typography } from "@material-tailwind/react";
import { BsTelephone } from "react-icons/bs";

const Hematologia = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Hematología Y Hemoterapia
      </Typography>
      <section className="md:px-4">
        <div className="flex items-center gap-2 ">
          <BsTelephone color="green" size={20} />
          <Typography>
            Secretaría || Horario de atención: de 8 a 20 hs. - Int. 224.
          </Typography>
        </div>
      </section>
    </article>
  );
};

export default Hematologia;
