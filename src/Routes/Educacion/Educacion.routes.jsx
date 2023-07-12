import { Routes, Route } from "react-router-dom";
import Docencia from "../../Pages/Educacion/Docencia";
import Pregrado from "../../Pages/Educacion/Pregrado.jsx";

const EducacionRoutes = () => {
  return (
    <Routes>
      <Route path="/docenciaeinvestigacion" element={<Docencia />} />
      <Route path="/pregrado" element={<Pregrado />} />
    </Routes>
  );
};

export default EducacionRoutes;
