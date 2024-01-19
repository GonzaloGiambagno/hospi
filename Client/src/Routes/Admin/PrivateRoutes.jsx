import { Routes, Route, Navigate } from "react-router-dom";
import DashboardHome from "../../Pages/Administracion/DashboardHome.jsx";
import DashboardLayout from "../../Components/layouts/Dashboard/DashboardLayouts.jsx";

const PrivateRoutes = () => {
  // Asume que aquí manejas la lógica de autenticación (por ejemplo, usando el contexto de autenticación)
  const isAuthenticated = false; // Cambia esto según tu lógica de autenticación

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

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
