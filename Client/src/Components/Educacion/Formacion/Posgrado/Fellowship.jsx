/* eslint-disable react/prop-types */
import { Typography, Button } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ListItem = ({ children }) => (
  <li className="flex items-start md:items-center gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography>{children}</Typography>
    <a href=""></a>
  </li>
);

const Fellowship = () => {
  return (
    <article>
      <Typography variant="h6">Fellowships hospitalarios</Typography>
      <Typography>
        <i>Inscripciones desde el 12/06/2023 hasta el 11/08/2023</i>
      </Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <Typography className="font-bold">De primer nivel:</Typography>
        <ul className="flex flex-wrap gap-2 border-b-2 py-2">
          <div className="flex flex-col gap-1 md:w-1/2">
            <ListItem>Clínica Médica</ListItem>
            <ListItem>Dermatología</ListItem>
            <ListItem>Enfermedades Infecciosas</ListItem>
          </div>
          <div className="flex flex-col gap-1">
            <ListItem>Oncología</ListItem>
            <ListItem>Terapia Intensiva</ListItem>
          </div>
        </ul>
        <Typography className="font-bold py-2">De segundo nivel:</Typography>
        <ul className="flex flex-wrap gap-2 ">
          <div className="flex flex-col gap-1 md:w-1/2">
            <ListItem>Angio TAC cardiovascular</ListItem>
            <ListItem>Cardiología Nuclear</ListItem>
            <ListItem>Cardiología Nuclear</ListItem>
            <ListItem>Cirugía Esófago-Gástrica</ListItem>
            <ListItem>Cirugía Hepato-Bilio-Pancreática</ListItem>
            <ListItem>Cirugía de Paredes Abdominales</ListItem>
            <ListItem>
              Cirugía y Patologías de la Mano y Miembro Superior
            </ListItem>
            <ListItem>Cirugía Oncoginecológica</ListItem>
            <ListItem>Cirugía de Pierna, Tobillo y Pie</ListItem>
            <ListItem>Cirugía Plástica y Reparadora</ListItem>
            <ListItem>Cirugía de Tórax</ListItem>
            <ListItem>Coloproctología </ListItem>
            <ListItem>Cuidados Críticos Cardiológicos</ListItem>
          </div>
          <div className="flex flex-col gap-1">
            <ListItem>Eco Doppler Cardiovascular</ListItem>
            <ListItem>Enfermedades Infecciosas</ListItem>
            <ListItem>Gastroenterología y Endoscopía Digestiva</ListItem>
            <ListItem>Hepatología Clínica</ListItem>
            <ListItem>
              Laparoscopía Urológica, Endourología y Litiasis Urinaria
            </ListItem>
            <ListItem>Microbiología</ListItem>
            <ListItem>Mastología </ListItem>
            <ListItem>Nutrición clínica</ListItem>
            <ListItem>Oncología</ListItem>
            <ListItem>Oncohematología</ListItem>
            <ListItem>Reumatología</ListItem>
            <ListItem>Trasplante de Médula Ósea</ListItem>
          </div>
        </ul>
        <div className="flex flex-wrap mt-5">
          <a
            href="https://italnet.italianolaplata.org.ar/contenidoArchivos/incidentes/154166/Archivos/Requisitos_fellow_2023.pdf"
            target="blank"
            className=" w-1/2"
          >
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Requisitos para Fellowship Hospitalarios
            </Button>
          </a>
          <a
            href="https://docs.google.com/forms/d/1M4FiPebYaUq5qBGtSyVIUkC6BLB84n1xfxst6HWpHdM/viewform?edit_requested=true#responses2"
            target="blank"
          >
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Inscripciones a Fellowship Hospitalarios
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Fellowship;
