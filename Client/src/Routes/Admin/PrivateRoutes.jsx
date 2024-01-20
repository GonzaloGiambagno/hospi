import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardHome from "../../Pages/Administracion/DashboardHome.jsx";
import Docencia from "../../Pages/Administracion/Docencia.jsx";
import DashboardLayout from "../../Components/layouts/Dashboard/DashboardLayouts.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useEffect } from "react";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

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
