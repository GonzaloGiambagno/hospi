import { Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";

const DonaTiempo = () => {
  return (
    <div className="border-t-2 border-green-300 pt-5 mt-6">
      <Typography variant="h5" className="">
        Doná tu tiempo
      </Typography>
      <Typography className="font-bold my-2">¿Conocés La Inquieta?</Typography>
      <Typography className="text-justify">
        Es nuestra biblioteca itinerante que visita a los pacientes acercandoles
        libros y juegos. La Inquieta cuenta con más de 500 libros y una amplia
        variedad de juegos de mesa, recorre los pasillos de la mano de nuestros
        voluntarios de martes a jueves de 14.30hs a 16.30hs y los sábados de
        15.00 a 17.00hs. ¡Animate a donar tu tiempo, se parte de La Inquieta!
      </Typography>
      <div className="flex items-start md:items-center gap-1 mt-4">
        <HiOutlineMail color="green" size={24} className="md:flex w-6 flex-shrink-0" />
        <Typography className="font-bold hover:underline underline-offset-2">
          <a href="mailto:lainquieta@italianolaplata.org.ar?subject=Consulta">
            lainquieta@italianolaplata.org.ar
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default DonaTiempo;
