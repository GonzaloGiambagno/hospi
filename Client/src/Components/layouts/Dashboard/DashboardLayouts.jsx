/* eslint-disable react/prop-types */
import { Card, Typography, List, Button } from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon, NewspaperIcon  } from "@heroicons/react/24/outline";
import { useAuth } from "../../../Context/AuthContext";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  const menus = [
    { name: "Inicio", link: "/dashboard/inicio", icon: <HomeIcon /> },
    { name: "Noticias", link: "/dashboard/noticias", icon: <NewspaperIcon /> },
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
       inset-0  m-3 h-[calc(100vh-24px)] w-96 rounded-xl"
      >
        <Link to="/" className="p-6 text-center">
          <Typography variant="h4" color="white">
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
          <Button
            variant="text"
            color="white"
            className="flex items-center gap-4 px-4 normal-case"
            fullWidth
            onClick={()=>navigate("/")}
          >
            <ArrowTopRightOnSquareIcon class="h-5 w-5" />
            <Typography color="white" className="font-medium">
              Ir a la web
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
