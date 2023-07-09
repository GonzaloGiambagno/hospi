import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const DiagnosticoImagen = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Diagnóstico por imágenes
      </Typography>
      <section className="md:px-4">
      <div className="flex items-center gap-2 ">
          <BsTelephone color="green" size={20} />
          <Typography>
          Diagnóstico por Imágenes || Horario de atención: de 8 a 20 hs. - Tel: 512 9500 int. 231 / 253 / 337.
          </Typography>
        </div>
        <div className="p-4 ">
          <ul className=" flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Tomografía.</Typography>
              <Typography variant="small">Tomografia || Horario de atención: de 8 a 20 hs. - Int. 622 / 627.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Ecografía Obstétrica.</Typography>
              <Typography variant="small">Centro de la Mujer || Horario de atención: de 8 a 20 hs. - Int. 435.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Ecografía.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Mamografía.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Densitometría.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Radiología.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Resonancia Magnética</Typography>
              <Typography variant="small">Resonancia Magnética || Horario de atención: de 8 a 20 hs. - Int. 600.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Medicina Nuclear</Typography>
              <Typography variant="small">Medicina Nuclear || Horario de atención: de 08 a 20 hs. - Int 494.</Typography>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCaretRight color="green" />
              <Typography>Ecocardiografía</Typography>
              <Typography variant="small">Ecodoppler Cardiovascular y Arterial || Horario de atención: de 08.30 a 18 hs. - Int. 252.</Typography>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default DiagnosticoImagen;
