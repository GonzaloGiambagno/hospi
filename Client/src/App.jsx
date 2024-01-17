import "./App.css"
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
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



function App() {

  return (
    <div className="">
      <Helmet>
        <title>Hospital Italiano La Plata</title>
        <meta name="description" content="Hospital Italiano de La Plata. Tu salud Primero!" />
      </Helmet>
      <Routes>
        <Route path="/login" element={<Login />} />

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
    </div>
  )
}

export default App
