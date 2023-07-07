import { Routes, Route} from 'react-router-dom';
import InfoUtil from '../../Pages/VosyElHospi/InformacionUtil/InfoUtil.jsx'

const VosYelHospiRoutes = () => {
  
    return (
      <Routes>
            <Route path="/informacionUtil" element={<InfoUtil />} />
      </Routes>
    );
  };

export default VosYelHospiRoutes;