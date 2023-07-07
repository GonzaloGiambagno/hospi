import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Inicio from "./Pages/Inicio";
import ScrollToTopButton from "./Components/layouts/ScrollToTop";
import Contactos from "./Pages/Contactos";
import Layout from "./Pages/Layouts";


function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<Inicio />} />
        </Route>
        </Routes>
        <ScrollToTopButton />
    </>
  )
}

export default App
