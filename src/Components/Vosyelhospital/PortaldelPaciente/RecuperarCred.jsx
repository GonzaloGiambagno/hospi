/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { RiLockPasswordLine, RiUserSettingsLine } from "react-icons/ri";


const RecoveryOption = ({ icon, title, description }) => (
  <div className="bg-gray-100 shadow-sm rounded-xl w-96 p-2">
    <Typography className="flex gap-2 font-semibold p-2">{icon}{title}</Typography>
    <Typography className="p-2">{description}</Typography>
  </div>
);

const RecuperarCred = () => {
  return (
    <section className="sm:px-4">
      <div className="flex flex-col gap-2 mt-2 p-2 sm:p-0 border-t-2 border-green-300">
        <Typography variant="lead" className="mt-2">
          ¿Cómo recupero mis credenciales de ingreso?
        </Typography>
        <div className="flex flex-wrap place-content-center justify-center gap-3 mt-2">
          <RecoveryOption
            icon={<RiUserSettingsLine size={24} color="green" />}
            title="Recuperar Usuario"
            description="Si no recordás el email con el que te registraste, por favor comunicate con el área de Orientación al Paciente para poder solicitar el reingreso."
          />
          <RecoveryOption
            icon={<RiLockPasswordLine size={24} color="green" />}
            title="Recuperar Contraseña"
            description={
              <Typography>
                <a href="https://portal.italianolaplata.org.ar/Cuenta/OlvidoDeClave" target="blank" className="font-normal text-green-500">
                  Ingresá acá
                </a>
                , una vez que completes el formulario, te enviaremos a tu casilla de correo las instrucciones para restablecerla.
              </Typography>
            }
          />
        </div>
        <Typography className="text-center font-semibold mt-5">
          Podés realizar cualquier consulta sobre el Portal del Paciente comunicándote al interno 264 o vía e-mail.
        </Typography>
      </div>
    </section>
  );
};


export default RecuperarCred;