import { Routes, Route} from 'react-router-dom';
import Login from '../../Pages/Administracion/Login'

const ConocenosRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default ConocenosRoutes;