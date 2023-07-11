import { Tabs, TabsHeader, Tab, TabsBody,TabPanel } from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";
import Mision from "./Mision.jsx";
import Vision from "./Vision.jsx";
import Valores from "./Valores.jsx";
import PoliticaCalidad from "./PoliticaCalidad.jsx";
import PoliticaSeguridad from "./PoliticaSeguridad.jsx";
import PoliticaAmbiental from "./PoliticaAmbiental.jsx";

const TabsConocenos = () => {
  const data = [
    {
      label: "Nuestra Misíon",
      value: "mision",
      component: <Mision />,
    },
    {
      label: "Nuestra visíon",
      value: "vision",
      component: <Vision />,
    },
    {
      label: "Nuestros Valores",
      value: "valores",
      component: <Valores />,
    },
    {
      label: "Política de calidad",
      value: "calidad",
      component: <PoliticaCalidad />,
    },
    {
      label: "Política de seguridad de los pacientes",
      value: "seguridad",
      component: <PoliticaSeguridad />,
    },
    {
      label: "Política ambiental",
      value: "ambiental",
      component: <PoliticaAmbiental />,
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
        value={selectedTab || "mision"}
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

export default TabsConocenos;
