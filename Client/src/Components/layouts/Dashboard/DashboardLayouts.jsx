/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const menus = [
    { name: "Home", link: "/dashboard/home", icon: <HomeIcon /> },
    {
      name: "Docencia",
      link: "/dashboard/docencia",
      icon: <AcademicCapIcon />,
    },
  ];

  return (
    <div className="flex flex-row gap-4">
      <Card
        className="bg-gradient-to-br from-gray-800 to-gray-900 
       inset-0  m-3 h-[calc(100vh-32px)] w-72 rounded-xl"
      >
        <Link to="/dashboard/home" className="p-6 text-center">
          <Typography variant="h5" color="white">
            Hospital Italiano
          </Typography>
        </Link>
        <List className="p-4">
          {menus.map(({ name, link, icon }, key) => (
            <ul className="mb-4 flex flex-col gap-1" key={key}>
              <li>
                <NavLink to={link}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={isActive ? "green" : "white"}
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      <i className="h-5 w-5">{icon}</i>
                      <Typography
                        color="inherit"
                        className="font-medium capitalize font-semibold"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            </ul>
          ))}
          <hr className="my-2 border-blue-gray-50" />
          <Button
            variant="text"
            color="white"
            className="flex items-center gap-4 px-4 capitalize"
            fullWidth
          >
            <PowerIcon className="h-5 w-5" />{" "}
            <Typography color="white" className="font-medium capitalize">
              Cerrar Sesión
            </Typography>
          </Button>
        </List>
      </Card>
      <div className="">{children}</div>
    </div>
  );
};

export default DashboardLayout;
