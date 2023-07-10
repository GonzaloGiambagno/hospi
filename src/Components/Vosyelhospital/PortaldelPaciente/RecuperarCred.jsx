import { Typography } from "@material-tailwind/react";
import { RiLockPasswordLine, RiUserSettingsLine } from "react-icons/ri";

const RecuperarCred = () => {
  return (
    <section className="px-4">
      <div className="flex flex-col gap-2 mt-2 p-2 sm:p-0 border-t-2 border-green-300">
        <Typography variant="lead" className="mt-2">
          ¿Como recupero mis credenciales de Ingreso?
        </Typography>
        <div className="flex flex-wrap place-content-center justify-center gap-3 mt-2">
          <div className="bg-gray-100 shadow-sm rounded-xl w-96 p-2">
            <Typography className="flex gap-2 font-semibold p-2"><RiUserSettingsLine size={24} color="green" />Recuperar Usuario</Typography>
            <Typography className="p-2">
            Si no recordás el email con el que te registraste, por favor comunicate con el área de Orientación al Paciente para poder solicitar el reingreso. <br />
            </Typography>
          </div>
          <div className="bg-gray-100 shadow-sm rounded-xl w-96 p-2">
            <Typography className="flex gap-2 font-semibold p-2"><RiLockPasswordLine size={24} color="green"/>Recuperar Contraseña</Typography>
            <Typography className="p-2">
            <a href="https://portal.italianolaplata.org.ar/Cuenta/OlvidoDeClave" className="font-normal text-green-500">Ingresá aca</a>, una vez que completes el formulario, te enviaremos a tu casilla de correo las instrucciones para restablecerla.
            </Typography>
          </div>
        </div>
        <Typography className="text-center font-semibold mt-5">Podés realizar cualquier consulta sobre el Portal del Paciente comunicándote al interno 264 o via e-mail</Typography>
      </div>
    </section>
  );
};

export default RecuperarCred;
