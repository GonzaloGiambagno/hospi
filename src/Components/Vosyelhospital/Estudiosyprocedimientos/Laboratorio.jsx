import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const ListItem = ({ text }) => (
  <li className="flex items-center gap-2">
    <AiOutlineCaretRight color="green" />
    <Typography>{text}</Typography>
  </li>
);

const Laboratorio = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Laboratorio
      </Typography>
      <section className="md:px-4">
        <div className="flex items-center gap-2">
          <BsTelephone color="green" size={20} />
          <Typography>
            Secretaría Laboratorio || Horario de atención: de 10 a 19 hs. Int.
            238.
          </Typography>
        </div>
        <div className="p-4">
          <ul className="flex flex-row flex-wrap md:gap-10">
            <div>
              <ListItem text="Química Clínica." />
              <ListItem text="Endocrinología/Marcadores Tumorales." />
              <ListItem text="Inmunología." />
              <ListItem text="Hematología/Hemostasia." />
            </div>
            <div>
              <ListItem text="Microbiología." />
              <ListItem text="Medio Interno." />
              <ListItem text="Proteínas séricas." />
              <ListItem text="Biología Molecular." />
            </div>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Laboratorio;
