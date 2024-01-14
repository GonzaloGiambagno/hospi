/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";

const ButtonLink = ({ href, children }) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button
          variant="gradient"
          color="green"
          className="rounded-full mt-3  py-2"
        >
          {children}
        </Button>
      </a>
    );
  };

const Encuestas = () => {
  return (
    <div className="border-b-2 border-green-300 pb-5 mt-5">
      <Typography variant="h6" className="">
        ¿Te atendiste con nosotros? ¡Contanos tu experiencia!
      </Typography>
      <Typography className="text-justify">
        Brindanos tu testimonio completando la encuesta. Contanos cómo te fue
        cuando estuviste internado o cuando viniste a una consulta médica
        ambulatoria. Todos los datos recolectados en estas encuestas nos sirven
        para conocer tu experiencia y brindar cada día un mejor servicio.
      </Typography>
      <div className="flex  flex-wrap justify-center gap-2">
        <ButtonLink href="https://es.surveymonkey.com/r/NRNSB95">Encuesta de satisfacción Internados</ButtonLink>
        <ButtonLink href="https://es.surveymonkey.com/r/RZ796MX">Encuesta de satisfacción Ambulatoria</ButtonLink>
      </div>
    </div>
  );
};

export default Encuestas;
