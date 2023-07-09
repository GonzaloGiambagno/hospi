import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Laboratorio = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Laboratorio
      </Typography>
      <section className="md:px-4">
      <div className="flex items-center gap-2 ">
          <BsTelephone color="green" size={20} />
          <Typography>
            Secretaría Laboratorio || Horario de atención: de 10 a 19 hs. Int. 238.
          </Typography>
        </div>
        <div className="p-4 ">
          <ul className=" flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Química Clínica.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Endocrinología/Marcadores Tumorales.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Inmunología.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Hematología/Hemostasia.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Microbiología.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Medio Interno.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Microbiología.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Proteínas séricas.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Biología Molecular.</Typography>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Laboratorio;
