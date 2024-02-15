import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardHome from "../../Pages/Administracion/DashboardHome.jsx";
import Docencia from "../../Pages/Administracion/Docencia.jsx";
import DashboardLayout from "../../Components/layouts/Dashboard/DashboardLayouts.jsx";
import { useEffect } from "react";
import { CarouselProvider } from "../../Context/CarouselContext.jsx";

const PrivateRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <DashboardLayout>
      <Routes>
        <Route
          path="/Inicio"
          element={
            <CarouselProvider>
              <DashboardHome />
            </CarouselProvider>
          }
        />
        <Route path="/docencia" element={<Docencia />} />
      </Routes>
    </DashboardLayout>
  );
};

export default PrivateRoutes;
