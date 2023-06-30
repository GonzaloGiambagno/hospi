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
import { BsChevronDown, BsChevronUp, BsBuildings } from 'react-icons/bs';
import { FaRegHandshake, FaChurch } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { GiHealthIncrease } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

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

const navListConocenosItems = [
  {
    color: "blue",
    icon: FcAbout,
    title: "Quienes somos",
    description: "Queremos que nos conozcas",
  },
  {
    color: "green",
    icon: GiHealthIncrease,
    title: "Gestión Hospitalaria",
    description: "Un nuevo concepto de medicina hospitalaria",
  },
  {
    color: "red",
    icon: HiUserGroup,
    title: "Autoridades",
    description: "Nuestro equipo de trabajo",
  },
  {
    color: "teal",
    icon: MdOutlineHealthAndSafety,
    title: "Calidad y seguridad",
    description: "Calidad en la salud",
  },
  {
    color: "cyan",
    icon: FaChurch,
    title: "Espiritualidad",
    description: "Nuestra conexión con la Fe",
  },
  {
    color: "orange",
    icon: BsBuildings,
    title: "Plan Maestro",
    description: "Reorganización funcional",
  },
];

export function ConocenosListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListConocenosItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
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
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
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
              <FaRegHandshake className="h-[18px] w-[18px]" />
              Conocenos
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
          <ul className="grid grid-cols-3 gap-y-2 focus:outline-none hover:outline-none">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
