import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";

const Docencia = () => {
  const navigate = useNavigate();
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Dashboard | Hospital Italiano La Plata</title>
      </Helmet>
      <div>
        <Button size="sm" onClick={() => navigate("/dashboard/home")}>
          Ir a Home
        </Button>
      </div>
    </OpacityAnimated>
  );
};

export default Docencia;
