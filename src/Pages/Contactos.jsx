import { Typography } from "@material-tailwind/react";
import InfoContacto from "../Components/Contactos-Ubicacion/InfoContacto";
import Ubicacion from "../Components/Contactos-Ubicacion/Ubicacion";
import Internos from "../Components/Contactos-Ubicacion/Internos";


const Contactos = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
        <Typography variant="h2" color="green" className="py-4 text-center" textGradient>
          Contactos
        </Typography>
        <Ubicacion />
        <InfoContacto />
        <Internos />
    </div>
  )
}

export default Contactos;