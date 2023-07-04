import StickyNavbar from "./Components/layouts/StickyNavbar";
import Footer from "./Components/layouts/footer/Footer";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from "./Pages/Inicio";


function App() {

  return (
    <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
