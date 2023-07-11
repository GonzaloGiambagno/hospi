import { Typography } from "@material-tailwind/react";
import { BiUserCircle } from "react-icons/bi";

const DirectorGeneral = () => {
  
    return (
      <div className="border-b-2 py-3 border-green-100">
        <Typography variant="h5" color="gray">
            Director general
        </Typography>
        <div className="flex items-center py-3">
                <div className="flex flex-col md:w-1/2">
                  <Typography
                    className="flex gap-2 items-center"
                  >
                    <BiUserCircle size={24} color="green" className="flex w-6 flex-shrink-0" />
                    Cav. Prof. Dr. Roberto D. Martínez 
                  </Typography>
                  <Typography variant="h6" color="gray" className="pl-8"><i>Consejero Honorario</i></Typography>
                </div>
        </div>
      </div>
    );
  };
  
  export default DirectorGeneral;