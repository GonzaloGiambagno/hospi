/* eslint-disable react/prop-types */

import { Typography, Button } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ListItem = ({ children }) => (
  <li className="flex items-start md:items-center gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography className="text-justify">{children}</Typography>
  </li>
);

const ResiHospitalarias = () => {
  return (
    <article>
      <Typography variant="h6" className="text-justify">
        Residencias Hospitalarias
      </Typography>
      <Typography className="text-justify">
        <i>Inscripciones desde el 12/06/2023 hasta el 04/08/2023</i>
      </Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <ul className="flex flex-wrap gap-2">
          <div className="flex flex-col gap-1 md:w-1/2">
            <ListItem>
              Bioquímica Clínica |{" "}
              <a
                href="https://italnet.italianolaplata.org.ar/contenidoArchivos/incidentes/154304/Archivos/RH_Bioquimica_clinica_2023.pdf"
                className="text-red-500 hover:underline underline-offset-2"
              >
                Vacantes 2023
              </a>
            </ListItem>
            <ListItem>
              Clínica Médica |{" "}
              <a
                href="https://italnet.italianolaplata.org.ar/contenidoArchivos/incidentes/154241/Archivos/RH_Clínica_médica.pdf"
                className="text-red-500 hover:underline underline-offset-2"
              >
                Vacantes 2023
              </a>
            </ListItem>
            <ListItem>
              Diagnóstico por Imágenes | {" "}
              <a
                href="https://italnet.italianolaplata.org.ar/contenidoArchivos/incidentes/154241/Archivos/RH_Diagnostico_por_imagenes.pdf"
                className="text-red-500 hover:underline underline-offset-2"
              >
                Vacantes 2023
              </a>
            </ListItem>
            <ListItem>Hematología (1º nivel)</ListItem>
          </div>
          <div className="flex flex-col gap-1">
            <ListItem>Hematología (2º nivel) |{" "}
              <a
                href="https://italnet.italianolaplata.org.ar/contenidoArchivos/incidentes/154241/Archivos/RH_Hematología_nivel_2.pdf"
                className="text-red-500 hover:underline underline-offset-2"
              >
                Vacantes 2023
              </a></ListItem>
            <ListItem>Ortopedia y Traumatología</ListItem>
            <ListItem>Tocoginecología</ListItem>
            <ListItem>Urología (2º nivel)</ListItem>
          </div>
        </ul>
        <div className="flex flex-wrap mt-5">
          <a
            href="https://www.italianolaplata.org.ar/documentos/educacion/requisitos_residencias_2022_b.pdf"
            target="blank"
            className=" w-1/2"
          >
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Requisitos para Residencias Hospitalarios
            </Button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZ2oOizF60RdUnispWbX2iXT3pO5LDk4DHuZwIz_k4t8KshQ/viewform"
            target="blank"
          >
            <Button
              className="z-0 flex items-center gap-2 py-2 px-4"
              color="green"
            >
              Inscripciones a Residencias Hospitalarios
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ResiHospitalarias;
