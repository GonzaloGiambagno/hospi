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
import { BiDonateHeart, BiDonateBlood } from 'react-icons/bi';
import { GiThreeFriends } from 'react-icons/gi';
import { AiOutlineComment } from 'react-icons/ai';
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

const navListInvolucrateItems = [
  {
    color: "red",
    icon: BiDonateBlood,
    title: "Doná sangre y/o tejidos",
    description: "Salvá vidas, Tu aporte es importante!",
    linkTo: "/involucrate/donacion"
  },
  {
    color: "blue",
    icon: AiOutlineComment,
    title: "Da tu testimonio",
    description: "¡Comparti con nosotros tu experiencia!",
    linkTo: "/involucrate/testimonio"
  },
  {
    color: "green",
    icon: GiThreeFriends,
    title: "Nuestros Amigos",
    description: "¡Conocé nuestros amigos y benefactores!",
    linkTo: "/involucrate/amigosybenefactores"
  },
];

export function InvolucrateListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const renderItems = navListInvolucrateItems.map(
    ({ icon, title, description, color, linkTo }, key) => (
      <Link to={linkTo} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg" onClick={handleMobileMenuItemClick}>
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
        offset={{ mainAxis: 30 }}
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
              <BiDonateHeart className="h-[18px] w-[18px]" />
              Involucrate
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
