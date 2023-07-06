import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BannerTop from "./BannerTop";
import { LogoHeader } from "../../assets/Logoheader.jsx";
import { InicioListMenu } from "./navbarItems/HospitalMenu";
import { ConocenosListMenu } from "./navbarItems/ConocenosMenu";
import { InvolucrateListMenu } from "./navbarItems/InvolucrateMenu";
import { EducacionListMenu } from "./navbarItems/EducacionMenu";
import { BsTelephone } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <InicioListMenu />
      <ConocenosListMenu />
      <InvolucrateListMenu />
      <EducacionListMenu />
      <Typography
        as="a"
        href="https://fundacion.italianolaplata.org.ar/"
        variant="small"
        color="blue-gray"
        className="font-normal"
        target="blank"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <LuHeartHandshake className="h-[18px] w-[18px]" />
          Fundacion
        </ListItem>
      </Typography>
    </List>
  );
}

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);



  return (
    <>
      <BannerTop />
      <Navbar className="mx-auto max-w-screen-2xl px-4 py-2 sticky top-0 z-10 rounded-t-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="/"><LogoHeader /></a> 
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden lg:flex">
            <Button
              variant="gradient"
              size="sm"
              className="flex items-center gap-2 rounded-full px-5"
              color="green"
              onClick={()=>navigate("/contactos")}
            >
              <BsTelephone size={22} />
              Contactanos
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden" >
            <Button variant="gradient" size="sm" fullWidth className="flex items-center justify-center gap-4" onClick={()=>navigate("/contactos")}>
              <BsTelephone size={24} />
              Contactanos
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
