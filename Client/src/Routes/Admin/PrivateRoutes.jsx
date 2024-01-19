import { Routes, Route, Navigate } from "react-router-dom";
import DashboardHome from "../../Pages/Administracion/DashboardHome.jsx";
import DashboardLayout from "../../Components/layouts/Dashboard/DashboardLayouts.jsx";

const PrivateRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="home" element={<DashboardHome />} />
        {/* Agrega más rutas privadas según sea necesario */}
      </Routes>
    </DashboardLayout>
  );
};

export default PrivateRoutes;
