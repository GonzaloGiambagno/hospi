import { useLocation, Link } from "react-router-dom";
import { Navbar, Typography, Breadcrumbs } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../../Context/AuthContext";

export function DashboardNavbar() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color="transparent"
      className="rounded-xl transition-all px-0 py-1"
      fullWidth
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs className="bg-transparent p-0 transition-all">
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        <Typography
          variant="text"
          color="blue-gray"
          className="hidden items-center gap-1 px-4 lg:flex normal-case"
        >
          {user && (
            <>
              <UserCircleIcon className="h-5 w-5 text-green-800" />
              <Typography variant="small">{user.name}</Typography>
            </>
          )}
        </Typography>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
