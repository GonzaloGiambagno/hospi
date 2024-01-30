import "./App.css";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import ScrollToTopButton from "./Components/layouts/ScrollToTop";
import Contactos from "./Pages/Contactos";
import NotFound from "./Pages/NotFound.jsx";
import Layout from "./Pages/Layouts";
import VosYelHospiRoutes from "./Routes/VosyelHospital/VosyElHospi.routes";
import ConocenosRoutes from "./Routes/Conocemos/Conocenos.routes";
import InvolucrateRoutes from "./Routes/Involucrate/Involucrate.router";
import EducacionRoutes from "./Routes/Educacion/Educacion.routes";
import Login from "./Pages/Administracion/Login.jsx";
import PrivateRoutes from "./Routes/Admin/PrivateRoutes.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Hospital Italiano de La Plata. Tu salud Primero!"
        />
      </Helmet>
      <Routes>
        {/* Rutas Privadas (con autenticacion) */}
        <Route path="/dashboard/*" element={<PrivateRoutes />} />

        <Route path="/login" element={<Login />} />

        {/* Rutas Publicas  */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/vosyelhospital/*" element={<VosYelHospiRoutes />} />
          <Route path="/educacion/*" element={<EducacionRoutes />} />
          <Route path="/conocenos/*" element={<ConocenosRoutes />} />
          <Route path="/involucrate/*" element={<InvolucrateRoutes />} />
          <Route path="/contactos" element={<Contactos />} />-
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </AuthProvider>
  );
}

export default App;
