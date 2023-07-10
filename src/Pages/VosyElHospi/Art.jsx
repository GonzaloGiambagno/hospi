import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import InfoART from '../../Components/Vosyelhospital/ART/InfoArt';
// import PlantillasArt from '../../Components/Vosyelhospital/ART/PlantillasArt';
import ContactosArt from '../../Components/Vosyelhospital/ART/ContactosArt';



const Derechos = () => {
  return (
    <>
      <Helmet>
        <title>Pacientes de ART | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Que hacer en caso de Accidente laboral, descarga las plantillas de denuncia"
        />
      </Helmet>
      <article className="mx-auto max-w-screen-2xl">
        <Typography
          variant="h3"
          color="green"
          className="py-5 text-center sm:text-left"
          textGradient
        >
          ART - Medicina Laboral
        </Typography>
        <Typography variant="lead" className="p-2 border-b-2 border-green-300">
          Lo que tenés que saber
        </Typography>
        
        <section className="md:px-4">
            <div className="mt-4 flex flex-wrap border-b-2 border-green-300 pb-2 divide-x">
              <InfoART  className="md:grow-1"/>
              {/* <PlantillasArt/> */}
            </div>
            <ContactosArt />
        </section>
      </article>
    </>
  );
};

export default Derechos;
