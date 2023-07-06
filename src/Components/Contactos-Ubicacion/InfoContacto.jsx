import {
  Card,
  CardBody,
//   CardFooter,
  Typography,
//   Button,
} from "@material-tailwind/react";
import { HiMail } from "react-icons/hi";
import { BsHeadset } from "react-icons/bs";
import { FaSuitcaseMedical } from "react-icons/fa6";

const InfoContacto = () => {
  return (
    <div>
      <Card className="mt-6 w-full bg-gray-200">
        <CardBody>
          <Typography variant="h5" color="green" className="mb-2">
            Otros contactos y Telefonos Utiles
          </Typography>
          <div className="grid grid-cols-3 gap-20 mt-5 p-2">
            <div className="flex flex-col justify-center items-center gap-3 w-full bg-gray-100 rounded-2xl py-3 shadow-md ">
              <HiMail size={32} color="#5BB35F"/>
              <Typography variant="paragraph">
              Info@Italianolaplata.org.ar
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full bg-gray-100 rounded-2xl py-3 shadow-md">
              <BsHeadset size={32} color="#5BB35F"/>
              <Typography variant="paragraph">
              <strong>Central de turnos:</strong> (0221) 457-3001
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full bg-gray-100 rounded-2xl py-3 shadow-md">
              <FaSuitcaseMedical size={32} color="#5BB35F" />
              <Typography variant="paragraph">
              <strong>Guardias y urgencias:</strong> (0221) 512 9500 int. 232
              </Typography>
            </div>

          </div>
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default InfoContacto;
