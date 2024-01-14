import { Outlet } from "react-router-dom";
import StickyNavbar from "../Components/layouts/StickyNavbar";
import Footer from "../Components/layouts/footer/Footer";
import ScrollAnimated from "../helpers/ScrollAnimated";


function Layout() {

  return (
    <div>
      <StickyNavbar />

      <Outlet />
      
      <footer>
      <ScrollAnimated><Footer /></ScrollAnimated>
      </footer>
      
    </div>
  );
}

export default Layout;