import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button size="sm" onClick={() => navigate("/dashboard/docencia")}>
        Ir a docencia
      </Button>
    </div>
  );
};

export default DashboardHome;
