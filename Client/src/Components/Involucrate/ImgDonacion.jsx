import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsTelephone, BsClock, BsPinMap } from "react-icons/bs";
import DonaSangreImg from '../../assets/dona.png'

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => (
  <li className="flex items-start md:items-center gap-1">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography className="text-justify">{children}</Typography>
  </li>
);

const ImgDonacion = () => {
  return (
    <section className="">
      <Typography variant="h5" className="">
        Donar es fácil y no duele
      </Typography>
      <Typography className="text-justify">
        ¿Sabías que un donante de sangre puede salvar hasta 4 vidas, y un
        donante de tejidos puede beneficiar a más de 100 personas? Tu aporte es
        importante, ayudanos a que nunca falte.
      </Typography>
      <div className="mt-2 pb-5 flex-wrap flex justify-center lg:justify-between items-center border-b-2 border-green-300 gap-5 md:gap-0">
        <div>
        <Typography className="font-bold mb-2">¿Puedo donar sangre?</Typography>
        <ListItem>
          Todos aquellos que quieran dar vida y que cumplan con los requisitos
          de donación.
        </ListItem>
        <Typography variant="h6" className="my-2">Requisitos:</Typography>
        <ListItem>Concurrir con algún documento que acredite identidad</ListItem>
        <ListItem>Tener entre 16 y 65 años</ListItem>
        <ListItem>Pesar más de 50 kilos</ListItem>
        <ListItem>Desayunar antes de donar</ListItem>
        <ListItem>Sentirse en buen estado de salud</ListItem>
        <Typography className="font-bold my-2">¿Me puede ocasionar algún trastorno en la salud?</Typography>
        <ListItem>Donar sangre no ocasiona trastornos al organismo.</ListItem>
        <ListItem>No debilita, no engorda, no adelgaza, no perjudica en nada.</ListItem>
        <ListItem>El material que se usa es estéril y descartable, sin riesgo de contagio.</ListItem>
        </div>
        <img src={DonaSangreImg} alt="Requisitos para donar sangre" className="mg:w-1/3"/>
      </div>
        <Typography className="font-bold my-2">¿Dónde y en qué horarios puedo donar sangre?</Typography>
      <div className="flex flex-wrap md:justify-between mt-5 gap-6 md:gap-0">
        <Typography className="flex items-center"><BsClock color="green"  size={24} className="md:flex w-12 flex-shrink-0"/>De lunes a viernes de 7 a 15 hs - Sabados de 7 a 13Hs</Typography>
        <Typography className="flex items-center"><BsTelephone color="green"  size={24} className="md:flex w-12 flex-shrink-0"/>0800-666-2258</Typography>
        <Typography className="flex items-center"><BsPinMap color="green" size={24}  className="md:flex w-12 flex-shrink-0"/>Calle 71 e/ 26 y 27 - La Plata</Typography>
      </div>
    </section>
  );
};

export default ImgDonacion;
