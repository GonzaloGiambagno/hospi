import "./App.css"
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import Inicio from "./Pages/Inicio";
import ScrollToTopButton from "./Components/layouts/ScrollToTop";
import Contactos from "./Pages/Contactos";
import Layout from "./Pages/Layouts";
import VosYelHospiRoutes from "./Routes/VosyelHospital/VosyElHospi.routes";



function App() {

  return (
    <>
      <Helmet>
        <title>Hospital Italiano La Plata</title>
        <meta name="description" content="Hospital Italiano de La Plata. Tu salud Primero!" />
      </Helmet>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/vosyelhospital/*" element={<VosYelHospiRoutes />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<Inicio />} />
        </Route>
        </Routes>
        <ScrollToTopButton />
    </>
  )
}

export default App
