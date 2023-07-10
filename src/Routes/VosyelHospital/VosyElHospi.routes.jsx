import { Routes, Route} from 'react-router-dom';
import InfoUtil from '../../Pages/VosyElHospi/InfoUtil.jsx'
import PortalDelPaciente from '../../Pages/VosyElHospi/PortalDelPaciente.jsx';
import Estudios from '../../Pages/VosyElHospi/Estudios.jsx';
import Derechos from '../../Pages/VosyElHospi/Derechos.jsx';
import Art from '../../Pages/VosyElHospi/Art.jsx';

const VosYelHospiRoutes = () => {
  
    return (
      <Routes>
            <Route path="/informacionUtil" element={<InfoUtil />} />
            <Route path="/portalDelPaciente" element={<PortalDelPaciente />} />
            <Route path="/estudiosyprocedimientos" element={<Estudios />} />
            <Route path="/derechosyresponsabilidades" element={<Derechos/>} />
            <Route path="/art" element={<Art/>} />
      </Routes>
    );
  };

export default VosYelHospiRoutes;