import StickyNavbar from "./Components/layouts/StickyNavbar";
import Footer from "./Components/layouts/footer/Footer";
import "./App.css"
import Hero from "./Components/Inicio/Hero";

function App() {

  return (
    <>
      <div className="">
        <StickyNavbar />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
