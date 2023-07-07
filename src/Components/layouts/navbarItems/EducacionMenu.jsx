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
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { IoSchoolOutline, IoCalendarOutline } from 'react-icons/io5';
import { GiHealing } from 'react-icons/gi';
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

const navListEducacionItems = [
  {
    color: "green",
    icon: FaChalkboardTeacher,
    title: "Docencia e Investigacion",
    description: "Nuestro compromiso por la comunidad",
    linkTo: "/"
  },
  {
    color: "blue",
    icon: FaUserGraduate,
    title: "Formación profesional",
    description: "¡Realiza con nosotros tus prácticas Profesionales!",
    linkTo: "/"
  },
  {
    color: "purple",
    icon: GiHealing,
    title: "Tecnicatura en Enfermería",
    description: "Estudiá con nosotros.",
    linkTo: "/"
  },
  {
    color: "cyan",
    icon: IoCalendarOutline,
    title: "Cursos y Jornadas",
    description: "Enterate sobre nuestras jornadas y talleres",
    linkTo: "/"
  },
];

export function EducacionListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListEducacionItems.map(
    ({ icon, title, description, color, linkTo }, key) => (
      <Link to={linkTo} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
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
        offset={{ mainAxis: 30, crossAxis: -110 }}
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
              <IoSchoolOutline className="h-[18px] w-[18px]" />
              Educacion
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
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2 focus:outline-none hover:outline-none">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
