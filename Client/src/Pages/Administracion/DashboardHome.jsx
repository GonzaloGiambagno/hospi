import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";
import { Dashboard } from "../../Components/Admin/Dashboard/Dashboard";

const DashboardHome = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Dashboard | Hospital Italiano La Plata</title>
      </Helmet>
      <div className="flex flex-col gap-4">
        <Dashboard />
      </div>
    </OpacityAnimated>
  );
};

export default DashboardHome;
