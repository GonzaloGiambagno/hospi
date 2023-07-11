import { Typography } from "@material-tailwind/react";

const VideoSusana = () => {
  return (
    <div className="border-b-2 border-green-300 pb-6">
      <Typography variant="h5" className="-">
        Conocé a Susana
      </Typography>
      <Typography className="text-justify">
        Les compartimos la historia de Susana, una paciente de nuestro Hospital
        que hace 12 años fue diagnosticada con Linfoma No Hodgkin. Acá nos
        cuenta cómo vivió el diagnóstico, el tratamiento y sobre la importancia
        de la donación de médula ósea.
      </Typography>
      <div className="flex justify-normal sm:justify-center mt-5">
        <iframe
          width="720"
          height="420"
          src="https://www.youtube.com/embed/t-ZcnzP6X38"
          title="testimonio de nuestra expaciente susana"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="md:rounded-2xl md:shadow-2xl"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSusana;
