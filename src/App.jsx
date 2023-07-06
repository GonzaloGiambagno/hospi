import StickyNavbar from "./Components/layouts/StickyNavbar";
import Footer from "./Components/layouts/footer/Footer";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from "./Pages/Inicio";
import ScrollToTopButton from "./Components/layouts/ScrollToTop";
import Contactos from "./Pages/Contactos";


function App() {

  return (
    <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
