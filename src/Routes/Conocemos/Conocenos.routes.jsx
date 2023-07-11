import { Routes, Route} from 'react-router-dom';
import QuienesSomos from '../../Pages/Conocenos/QuienesSomos.jsx';
import ModeloGestion from '../../Pages/Conocenos/ModeloGestion.jsx';
import Autoridades from '../../Pages/Conocenos/Autoridades.jsx';
import Calidad from '../../Pages/Conocenos/Calidad.jsx';
import Espiritualidad from '../../Pages/Conocenos/Espiritualidad.jsx';
import PlanMaestro from '../../Pages/Conocenos/PlanMaestro.jsx';

const ConocenosRoutes = () => {
  return (
    <Routes>
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/gestion" element={<ModeloGestion />} />
        <Route path="/autoridades" element={<Autoridades />} />
        <Route path="/calidadyseguridad" element={<Calidad />} />
        <Route path="/espiritualidad" element={<Espiritualidad />} />
        <Route path="/planmaestro" element={<PlanMaestro />} />
    </Routes>
  )
}

export default ConocenosRoutes;