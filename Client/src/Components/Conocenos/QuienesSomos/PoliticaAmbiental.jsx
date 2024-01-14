/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ListItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <AiOutlineCaretRight color="green" className="md:flex w-6 flex-shrink-0" />
    <Typography>{text}</Typography>
  </li>
);

const PoliticaAmbiental = () => {
  return (
    <article>
      <Typography variant="lead" className="font-semibold">
        Política ambiental
      </Typography>
      <Typography className="text-justify">
        Crecer en armonía con el medio ambiente, cumplimentando la legislación
        ambiental vigente, fomentando:
      </Typography>
      <div className="mt-4 md:mt-0 md:p-4">
        <ul className="flex flex-col gap-3">
          <ListItem text="La reducción, control, tratamiento y disposición adecuada de residuos comunes, especiales y patogénicos o infecciosos." />
          <ListItem text="La reducción y control de las emisiones generadas en el interior de las instalaciones." />
          <ListItem text="El reemplazo de sustancias nocivas para el medio ambiente." />
          <ListItem text="Las ideas que incorporen la supresión del papel (papel cero) en el desarrollo de los procedimientos." />
          <ListItem text="El reciclado y reutilización de materiales." />
          <ListItem text="La reducción de contaminación visual y sonora." />
          <ListItem text="La sensibilización y capacitación del recurso humano como agente de cambio tanto interno como externo (extramuros)." />
        </ul>
      </div>
    </article>
  );
};

export default PoliticaAmbiental;
