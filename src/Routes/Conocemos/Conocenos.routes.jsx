import { Routes, Route} from 'react-router-dom';
import QuienesSomos from '../../Pages/Conocenos/QuienesSomos.jsx';
import ModeloGestion from '../../Pages/Conocenos/ModeloGestion.jsx';
import Autoridades from '../../Pages/Conocenos/Autoridades.jsx';
import Calidad from '../../Pages/Conocenos/Calidad.jsx';

const ConocenosRoutes = () => {
  return (
    <Routes>
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/gestion" element={<ModeloGestion />} />
        <Route path="/autoridades" element={<Autoridades />} />
        <Route path="/calidadyseguridad" element={<Calidad />} />
    </Routes>
  )
}

export default ConocenosRoutes;