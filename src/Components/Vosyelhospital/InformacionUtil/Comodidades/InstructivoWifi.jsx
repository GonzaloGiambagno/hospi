import { Typography } from "@material-tailwind/react";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";

const InstructivoWifi = () => {
  return (
    <>
        <div className="flex flex-col gap-2 divide-y">
          <Typography variant="lead" className="mt-2 divide-y">¿Cómo me conecto al wi-fi?</Typography>
          <Typography className="pt-2">En todas nuestras habitaciones ofrecemos una red exclusiva de wifi para vos y tu familia.</Typography>
        </div>
        <div className="p-4 ">
            <ul className=" flex flex-col gap-3">
                <li className="flex items-center gap-2"><TbCircleNumber1 color="green" size={24}/><Typography>Activá el wi-fi de tu dispositivo móvil.</Typography></li>
                <li className="flex items-center gap-2"><TbCircleNumber2 color="green" size={24}/><Typography>Seleccioná la red Ap_Internados.</Typography></li>
                <li className="flex items-center gap-2"><TbCircleNumber3 color="green" size={24}/><Typography>Abrí tu navegador web e introducí:</Typography></li>
                <div className="pl-7 border w-72 rounded-2xl bg-gray-50 shadow-md md:ml-7">
                <li className="flex items-center gap-2"><Typography><strong className="font-semibold">Tu Usuario:</strong> Número de carpeta </Typography></li>
                <li className="flex items-center gap-2"><Typography><strong className="font-semibold">Contraseña:</strong> Tu DNI </Typography></li>
                </div>
            </ul>
        </div>
        <Typography>¡Listo! Ya podes navegar y disfrutar de cualquier contenido online</Typography>
    </>
  )
}

export default InstructivoWifi