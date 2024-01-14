import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => (
    <li className="flex items-start gap-1">
      <AiOutlineCaretRight
        color="green"
        className="md:flex w-6 flex-shrink-0"
      />
      <Typography className="text-justify">{children}</Typography>
    </li>
  );

const HorarioCulto = () => {
  return (
    <aside className="bg-gray-50 p-4 rounded-2xl shadows-md w-full xl:w-96 h-full">
      <Typography variant="h6" className="text-justify">
        Misas:
      </Typography>
      <div className="">
        <ul className="flex flex-col">
            <ListItem>Sábados, Domingos, Lunes y Martes a las 17:00 hs.</ListItem>
            <ListItem>Miércoles, Jueves y Viernes 7:00 hs.</ListItem>
            <ListItem>Santo Rosario, todos los días a las 16:30 hs.</ListItem>
        </ul>
      </div>
      <div>
      <Typography variant="h6" className="md:text-justify">
      Confesiones y/o charlas espirituales:
      </Typography>
        <ul className="flex flex-col gap-3">
            <ListItem>Media hora antes de cada misa o a convenir con el Capellán.</ListItem>
        </ul>
      </div>
      <div>
      <Typography variant="h6" className="text-justify">
      Bautismos :
      </Typography>
        <ul className="flex flex-col gap-3">
            <ListItem>Sábado y domingo por la mañana a las 10 hs. u horario a convenir.</ListItem>
        </ul>
      </div>
    </aside>
  )
}

export default HorarioCulto