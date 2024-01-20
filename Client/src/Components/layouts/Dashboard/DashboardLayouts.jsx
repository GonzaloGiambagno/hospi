/* eslint-disable react/prop-types */
import { Card, Typography, List, Button } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "../../../Context/AuthContext";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = ({ children }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
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
    <aside className="flex flex-row gap-3">
      <Card
        className="bg-gradient-to-br from-gray-800 to-gray-900 
       inset-0  m-3 h-[calc(100vh-32px)] w-96 rounded-xl"
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
            onClick={handleLogout}
          >
            <PowerIcon className="h-5 w-5" />{" "}
            <Typography color="white" className="font-medium capitalize">
              Cerrar Sesión
            </Typography>
          </Button>
        </List>
      </Card>
      <div className="flex flex-col w-screen mr-4 my-3">
        <DashboardNavbar />
        <section className="mt-4">{children}</section>
      </div>
    </aside>
  );
};

export default DashboardLayout;
