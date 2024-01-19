import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Docencia = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button size="sm" onClick={() => navigate("/dashboard/home")}>
        Ir a Home
      </Button>
    </div>
  );
};

export default Docencia;
