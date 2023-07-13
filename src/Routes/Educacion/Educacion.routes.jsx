import { Routes, Route } from "react-router-dom";
import Docencia from "../../Pages/Educacion/Docencia";
import Pregrado from "../../Pages/Educacion/Pregrado.jsx";
import Posgrado from "../../Pages/Educacion/Posgrado";
import Rotaciones from "../../Pages/Educacion/Rotaciones";
import Enfermeria from "../../Pages/Educacion/Enfermeria";
import CursosJornadas from "../../Pages/Educacion/CursosJornadas";

const EducacionRoutes = () => {
  return (
    <Routes>
      <Route path="/docenciaeinvestigacion" element={<Docencia />} />
      <Route path="/pregrado" element={<Pregrado />} />
      <Route path="/posgrado" element={<Posgrado />} />
      <Route path="/rotacionesyvisitas" element={<Rotaciones />} />
      <Route path="/enfermeria" element={<Enfermeria />} />
      <Route path="/cursosyjornadas" element={<CursosJornadas />} />
    </Routes>
  );
};

export default EducacionRoutes;
