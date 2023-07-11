import { Routes, Route} from 'react-router-dom';
import DonaSangre from '../../Pages/Involucrate/DonaSangre.jsx';
import Testimonio from '../../Pages/Involucrate/Testimonio.jsx';
import AmigosyBenefactores from '../../Pages/Involucrate/AmigosyBenefactores.jsx';

const InvolucrateRoutes = () => {
  return (
    <Routes>
        <Route path="/donacion" element={<DonaSangre />} />
        <Route path="/testimonio" element={<Testimonio />} />
        <Route path="/amigosybenefactores" element={<AmigosyBenefactores />} />

    </Routes>
  )
}

export default InvolucrateRoutes;