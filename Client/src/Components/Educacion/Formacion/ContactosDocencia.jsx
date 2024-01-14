import { Typography } from "@material-tailwind/react";
import { BsTelephone, BsClock } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const ContactosDocencia = () => {
  return (
    <div className="flex flex-wrap md:justify-between mt-5 gap-6 md:gap-0 border-y-2 border-green-300 p-3">
      <Typography className="flex items-center">
        <BsClock
          color="green"
          size={24}
          className="md:flex w-12 flex-shrink-0"
        />
        Lunes a Viernes de 8 a 16 hs.
      </Typography>
      <Typography className="flex items-center">
        <BsTelephone
          color="green"
          size={24}
          className="md:flex w-12 flex-shrink-0"
        />
        (0221) 512 9500 int. 307.
      </Typography>
      <Typography className="flex items-center select-all">
        <HiOutlineMail
          color="green"
          size={24}
          className="md:flex w-12 flex-shrink-0"
        />
        docencia@italianolaplata.org.ar
      </Typography>
    </div>
  );
};

export default ContactosDocencia;
