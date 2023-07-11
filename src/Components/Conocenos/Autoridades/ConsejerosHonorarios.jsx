import { Typography } from "@material-tailwind/react";
import { BiUserCircle } from "react-icons/bi";

const ConsejerosHonorarios = () => {
  
    return (
      <div className="border-b-2 pt-3 pb-6 border-green-100">
        <Typography variant="h5" color="gray">
            Consejeros honorarios
        </Typography>
        <div className="flex items-center py-3">
                <div className="flex flex-col md:w-1/2">
                  <Typography
                    className="flex gap-2 items-center"
                  >
                    <BiUserCircle size={24} color="green" className="flex w-6 flex-shrink-0" />
                    Dr. Jorge Camilletti 
                  </Typography>
                </div>
                <div className="flex flex-col md:w-1/2">
                  <Typography
                    className="flex gap-2 items-center"
                  >
                    <BiUserCircle size={24} color="green" className="flex w-6 flex-shrink-0" />
                    Dr. Jorge Milone
                  </Typography>
                </div>
        </div>
      </div>
    );
  };
  
  export default ConsejerosHonorarios;