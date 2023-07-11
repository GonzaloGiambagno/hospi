/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const ListItem = ({ text, variant = '', additionalText = '' }) => (
  <li className="flex md:flex-row md:items-start gap-2">
    <AiOutlineCaretRight color="green" />
    <div className="flex flex-col md:flex-col md:items-start">
      <Typography>{text}</Typography>
      {variant && additionalText && (
        <Typography variant={variant}>{additionalText}</Typography>
      )}
    </div>
  </li>
);

const DiagnosticoImagen = () => {
  return (
    <article className="w-full">
      <Typography variant="h5" color="gray" className="px-4 mb-4 mt-2 md:mt-0">
        Diagnóstico por imágenes
      </Typography>
      <section className="md:px-4">
        <div className="flex items-center gap-2">
          <BsTelephone color="green" size={20} />
          <Typography>
            Diagnóstico por Imágenes || Horario de atención: de 8 a 20 hs. - Tel: 512 9500 int. 231 / 253 / 337.
          </Typography>
        </div>
        <div className="p-4">
          <div className="flex flex-row flex-wrap md:gap-10">
            <div className="w-1/2">
            <ListItem
              text="Tomografía."
              variant="small"
              additionalText="Horario de atención: de 8 a 20 hs. - Int. 622 / 627."
            />
            <ListItem
              text="Ecografía Obstétrica."
              variant="small"
              additionalText="Horario de atención: de 8 a 20 hs. - Int. 435."
            />
            <ListItem text="Ecografía." />
            <ListItem text="Mamografía." />
            <ListItem text="Densitometría." />
            </div>
            <div>
            <ListItem text="Radiología." />
            <ListItem
              text="Resonancia Magnética"
              variant="small"
              additionalText="Horario de atención: de 8 a 20 hs. - Int. 600."
            />
            <ListItem
              text="Medicina Nuclear"
              variant="small"
              additionalText="Horario de atención: de 08 a 20 hs. - Int 494."
            />
            <ListItem
              text="Ecocardiografía"
              variant="small"
              additionalText="Horario de atención: de 08.30 a 18 hs. - Int. 252."
            />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};


export default DiagnosticoImagen;