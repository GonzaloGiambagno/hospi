import { Typography } from "@material-tailwind/react";
import TablaObrasSociales from "./TableObrasSociales";

const ObrasSociales = () => {
  return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Obras Sociales
      </Typography>
      <section className="md:px-4">
        <div className="flex flex-col gap-2 divide-y">
          <Typography  color="black" variant="lead" className="mt-2 divide-y">¿Qué obras sociales atienden?</Typography>
          <Typography  className="pt-2">Las obras sociales que atendemos en el Hospital Italiano La Plata son:</Typography>
        </div>
        <TablaObrasSociales />
      </section>
    </article>
  );
};

export default ObrasSociales;