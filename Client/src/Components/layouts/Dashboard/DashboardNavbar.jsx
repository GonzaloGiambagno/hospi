import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Breadcrumbs,
  Button,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../../Context/AuthContext";

export function DashboardNavbar() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [layout, page, components] = pathname
    .split("/")
    .filter((el) => el !== "");

  return (
    <Navbar
      color="transparent"
      className="rounded-xl transition-all px-0 py-1"
      fullWidth
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center p-2">
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
              <Link to={`/${layout}/${page}`}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal transition-all hover:text-blue-500 hover:opacity-100"
                >
                  {page}
                </Typography>
              </Link>
            {components && (
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {components}
              </Typography>
            )}
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>

        {user && (
          <Button
            variant="text"
            color="blue-gray"
            className="hidden items-center gap-1 px-4 lg:flex normal-case"
          >
            <UserCircleIcon className="h-5 w-5 text-green-800" />
            <Typography variant="small">{user.name}</Typography>
          </Button>
        )}
      </div>
    </Navbar>
  );
}


export default DashboardNavbar;
