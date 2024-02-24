import React, { useState } from "react";
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BsInfoCircle, BsFolder, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaHospitalUser, FaRegHospital, FaUserInjured } from 'react-icons/fa6';
import { HiOutlineDesktopComputer, HiOutlineNewspaper } from 'react-icons/hi';
import { Link } from "react-router-dom";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  red: "bg-red-50 text-red-500",
};

  const navListInicioItems = [
    {
      color: "blue",
      icon: BsInfoCircle,
      title: "Informacion Util",
      description: "Informacion para el paciente",
      linkTo: "/vosyelhospital/informacionUtil"
    },
    {
      color: "green",
      icon: HiOutlineDesktopComputer,
      title: "Portal del paciente",
      description: "Ingresa a tu Portal, podes ver tus estudios y citas",
      linkTo: "/vosyelhospital/portalDelPaciente"
    },
    {
      color: "orange",
      icon: FaHospitalUser,
      title: "Estudios y Procedimientos",
      description: "Conoce los estudios y procedimientos que realizamos",
      linkTo: "/vosyelhospital/estudiosyprocedimientos"
    },
    {
      color: "teal",
      icon: BsFolder,
      title: "Tus derechos",
      description: "Conocé tus derechos y responsabilidades",
      linkTo: "/vosyelhospital/derechosyresponsabilidades"
    },
    {
      color: "red",
      icon: FaUserInjured,
      title: "ART",
      description: "Medicina Laboral",
      linkTo: "/vosyelhospital/art"
    },
    {
      color: "purple",
      icon: HiOutlineNewspaper,
      title: "Noticias",
      description: "Mira las ultimas noticias del hospital",
      linkTo: "/vosyelhospital/noticias"
    }
  ];

  export function InicioListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuItemClick = () => {
      setIsMobileMenuOpen(false);
    };

    const renderItems = navListInicioItems.map(
      ({ icon, title, description, color, linkTo }, key) => (
        <Link to={linkTo} key={key}>
          <MenuItem className="flex items-center gap-3 rounded-lg"  onClick={handleMobileMenuItemClick}>
            <div className={`rounded-lg p-5 ${colors[color]}`}>
              {React.createElement(icon, {
                strokeWidth: 1,
                className: "h-6 w-6",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm"
              >
                {title}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {description}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      )
    );

    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 30, crossAxis: 175 }}
          placement="bottom"
          allowHover={true}
          
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-normal">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <FaRegHospital className="h-[18px] w-[18px]" />
                Vos y el Hospital
                <BsChevronDown
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <BsChevronUp
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
            <MenuList className="hidden lg:block max-w-screen-xl mx-auto rounded-xl">
            <ul className="grid grid-cols-3 gap-y-2 focus:outline-none hover:outline-none">{renderItems}</ul>
            </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
    );
  }
