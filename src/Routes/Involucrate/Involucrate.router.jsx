import { Routes, Route} from 'react-router-dom';
import DonaSangre from '../../Pages/Involucrate/DonaSangre.jsx';

const InvolucrateRoutes = () => {
  return (
    <Routes>
        <Route path="/donacion" element={<DonaSangre />} />

    </Routes>
  )
}

export default InvolucrateRoutes;