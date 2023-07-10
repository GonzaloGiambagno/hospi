import { Routes, Route} from 'react-router-dom';
import QuienesSomos from '../../Pages/Conocenos/QuienesSomos.jsx';

const ConocenosRoutes = () => {
  return (
    <Routes>
        <Route path="/quienesSomos" element={<QuienesSomos />} />
    </Routes>
  )
}

export default ConocenosRoutes;