import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Typography
} from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";
import ReqRotaciones from "./ReqRotaciones";
import ReqVisitas from "./ReqVisitas";

const TabsRequisitos = () => {
  const data = [
    {
      label: "Rotaciones",
      value: "rotaciones",
      component: <ReqRotaciones />,
    },
    {
      label: "Visitas",
      value: "visitas",
      component: <ReqVisitas />,
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();

  const selectedTab = new URLSearchParams(location.search).get("tab");

  const handleTabChange = (value) => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", value);
    navigate(url.search, { replace: true });
  };
  return (
    <div className="mx-auto max-w-screen-2xl md:h-[500px]">
      <Tabs
        id="custom-animation"
        value={selectedTab || "rotaciones"}
        className="rounded-md"
      >
        <TabsHeader
          indicatorProps={{
            className: "bg-green-500/80 md:rounded-md h-auto",
          }}
          className="z-0"
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
              <Typography variant="h6">{label}</Typography>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, component }) => (
            <TabPanel key={value} value={value} className="py-0">
              {component}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsRequisitos;
