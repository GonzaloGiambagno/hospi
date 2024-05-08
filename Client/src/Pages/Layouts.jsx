import { Outlet } from "react-router-dom";
import StickyNavbar from "../Components/layouts/StickyNavbar";
import Footer from "../Components/layouts/footer/Footer";
import ScrollAnimated from "../helpers/ScrollAnimated";
// import SocialBar from "../Components/layouts/SocialBar";

function Layout() {
  return (
    <div className="bg-white/50">
      {/* <SocialBar /> */}
      <StickyNavbar />

      <Outlet />

      <footer>
        <ScrollAnimated>
          <Footer />
        </ScrollAnimated>
      </footer>
    </div>
  );
}

export default Layout;
