import { Routes, Route, Navigate } from "react-router-dom";
import DashboardHome from "../../Pages/Administracion/DashboardHome.jsx";
import Docencia from "../../Pages/Administracion/Docencia.jsx";
import DashboardLayout from "../../Components/layouts/Dashboard/DashboardLayouts.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useEffect } from "react";

const icon = {
  className: "w-5 h-5 text-inherit",
};

const PrivateRoutes = () => {
  // const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      <Navigate to="/login" replace={true} />;
    }
  }, [isAuthenticated]);

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/docencia" element={<Docencia />} />
      </Routes>
    </DashboardLayout>
  );
};

export default PrivateRoutes;
