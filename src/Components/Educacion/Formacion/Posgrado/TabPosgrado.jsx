import {
    Tabs,
    TabsHeader,
    Tab,
    TabsBody,
    TabPanel,
  } from "@material-tailwind/react";
  import { useNavigate, useLocation } from "react-router-dom";
import ResiHospitalarias from "./ResiHospitalarias";
import ResiUniversitarias from "./ResiUniversitarias";
import Fellowship from "./Fellowship";
  
  const TabPosgrado = () => {
    const data = [
      {
        label: "Residencias hospitalarias",
        value: "rhospitalarias",
        component: <ResiHospitalarias />
      },
      {
        label: "Residencias universitarias",
        value: "runiversitarias",
        component: <ResiUniversitarias />
      },
      {
        label: "Fellowships hospitalarios",
        value: "fellow",
        component: <Fellowship />
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
      <section className="w-full md:py-4">
        <Tabs
          value={selectedTab || "rhospitalarias"}
          orientation="vertical"
          className="flex-col md:flex-row rounded-md"
        >
          <TabsHeader
            className="w-screen md:w-72 divide-y"
            indicatorProps={{
              className: "bg-green-500/40 shadow-none z-0 rounded-md",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="justify-start text-left z-0"
                onClick={() => handleTabChange(value)}
              >
                {label}
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
      </section>
    );
  };
  
  export default TabPosgrado;