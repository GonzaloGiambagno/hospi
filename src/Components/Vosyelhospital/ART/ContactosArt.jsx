import { Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const ContactosArt = () => {
  return (
    <div>
      <Typography variant="h6" className="mt-4 px-2 md:px-0">
        Información para Aseguradoras de Riesgo de trabajo
      </Typography>
      <div className="">
        <Typography variant="h6" className="p-2 w-full">
          Coordinadores:
        </Typography>
        <div className="flex flex-wrap gap-4 md:gap-0 justify-center md:justify-between p-4 border-b">
          <div>
            <Typography className="font-semibold">
              Dr. Guillermo Johsson
            </Typography>
            <Typography> Coordinador Médico </Typography>
            <Typography variant="small">
              {" "}
              Tel (0221) 512 9500 Int. 489{" "}
            </Typography>
            <div className="flex items-center gap-1">
              <HiOutlineMail color="green" size={20} />
              <Typography> gjohsson@italianolaplata.org.ar </Typography>
            </div>
          </div>
          <div>
            <Typography className="font-semibold">
              Dra. Macuso María Lorena
            </Typography>
            <Typography> Coordinadora Médica </Typography>
            <Typography variant="small">
              {" "}
              Tel (0221) 512 9500 Int. 240{" "}
            </Typography>
            <div className="flex items-center gap-1">
              <HiOutlineMail color="green" size={20} />
              <Typography> mmacuso@italianolaplata.org.ar </Typography>
            </div>
          </div>
          <div>
            <Typography className="font-semibold">
              María Jorgelina Delacroix
            </Typography>
            <Typography> Coordinadora Administrativa </Typography>
            <Typography variant="small">
              {" "}
              Tel (0221) 512 9500 Int. 367{" "}
            </Typography>
            <div className="flex items-center gap-1">
              <HiOutlineMail color="green" size={20} />
              <Typography> mdelacroix@italianolaplata.org.ar </Typography>
            </div>
          </div>
        </div>
        <Typography variant="h6" className="p-2">
          Médicos Laborales:
        </Typography>
        <div className="flex flex-wrap gap-4 md:gap-0 justify-center md:justify-between p-4 border-b">
          <div className="">
          <Typography className="font-semibold flex-col">
            Dra. Ana Paula Pieretti
            <p className="font-normal">Médica Laboral</p>
          </Typography>
          <Typography className="flex items-center gap-1">
          <BsTelephone color="green" size={18} /> Tel (0221) 512 9500 Int. 535
          </Typography>
          </div>
          <div>
          <Typography className="font-semibold flex-col">
            Dra. Maria Noelia Malizia
            <p className="font-normal">Médica Laboral</p>
          </Typography>
          <Typography className="flex items-center gap-1">
          <BsTelephone color="green" size={18} /> Tel (0221) 512 9500 Int. 535
          </Typography>
          </div>
          <div className="md:mr-10">
          <Typography className="font-semibold flex-col">
            Dra. Maria Pia Gonzalez
            <p className="font-normal">Médica Laboral</p>
          </Typography>
          <Typography className="flex items-center gap-1">
          <BsTelephone color="green" size={18} /> Tel (0221) 512 9500 Int. 535
          </Typography>
          </div>
        </div>

        <Typography variant="h6" className="p-2">
          Administradores de siniestros
        </Typography>
        <div className="flex flex-wrap gap-4 md:gap-0 justify-center md:justify-between p-4">
          <div>
            <Typography className="font-semibold">
              Paula Morzilli
            </Typography>
            <div className="flex items-center gap-1">
              <HiOutlineMail color="green" size={20} />
              <Typography> pmorzilli@italianolaplata.org.ar </Typography>
            </div>
          </div>
          <div>
            <Typography className="font-semibold">
              Evelyn Paolucci
            </Typography>
            <div className="flex items-center gap-1">
              <HiOutlineMail color="green" size={20} />
              <Typography> epaolucci@italianolaplata.org.ar </Typography>
            </div>
          </div>
          <div>
            <Typography className="font-semibold">
              Andrea Urquiza
            </Typography>
            <div className="flex items-center gap-1">
              <HiOutlineMail color="green" size={20} />
              <Typography> aurquiza@italianolaplata.org.ar </Typography>
            </div>
          </div>
        </div>
        <div className="border-t">
            <Typography variant="h6" className="p-2">
              Consultas/derivaciones/autorizaciones:
            </Typography>
            <div className="p-2 px-4">
              <Typography className="flex items-center gap-1">
                <HiOutlineMail color="green" size={20} />{" "}
                autorizacionesart@italianolaplata.org.ar{" "}
              </Typography>
              <Typography>
                {" "}
                Tel: (0221) 512 9500 Int. 467/431{" "}
              </Typography>
              <Typography>
                {" "}
                Fax: (0221) 512 9500 Int. 365{" "}
              </Typography>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactosArt;
