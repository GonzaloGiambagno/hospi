import { Outlet } from "react-router-dom";
import StickyNavbar from "../Components/layouts/StickyNavbar";
import Footer from "../Components/layouts/footer/Footer";
import ScrollAnimated from "../helpers/ScrollAnimated";


function Layout() {

  return (
    <div>
      <StickyNavbar />

      <Outlet />
      
      <ScrollAnimated><Footer /></ScrollAnimated>
      
    </div>
  );
}

export default Layout;