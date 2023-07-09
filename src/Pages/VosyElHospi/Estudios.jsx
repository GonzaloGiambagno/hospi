import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Laboratorio from "../../Components/Vosyelhospital/Estudiosyprocedimientos/Laboratorio";
import DiagnosticoImagen from "../../Components/Vosyelhospital/Estudiosyprocedimientos/DiagporImagen";
import Hematologia from "../../Components/Vosyelhospital/Estudiosyprocedimientos/Hematologia";
import Patologia from "../../Components/Vosyelhospital/Estudiosyprocedimientos/Patologia";
import Gastroenterologia from "../../Components/Vosyelhospital/Estudiosyprocedimientos/Gastro";
import Cardiologia from "../../Components/Vosyelhospital/Estudiosyprocedimientos/Cardio";
import Dialisis from "../../Components/Vosyelhospital/Estudiosyprocedimientos/Dialisis";

const Estudios = () => {
    const data = [
        {
          label: "Laboratorio",
          value: "laboratorio",
          component: <Laboratorio />,
        },
        {
          label: "Diagnóstico por imágenes",
          value: "diagnosticoporimagenes",
          component: <DiagnosticoImagen />,
        },
        {
          label: "Hematología Y Hemoterapia",
          value: "hematologiayhemoterapia",
          component: <Hematologia />,
        },
        {
          label: "Patología",
          value: "patologia",
          component: <Patologia />,
        },
        {
          label: "Gastroenterologia",
          value: "gastro",
          component: <Gastroenterologia />,
        },
        {
          label: "Prácticas Cardiológicas",
          value: "cardio",
          component: <Cardiologia />,
        },
        {
          label: "Diálisis",
          value: "dialisis",
          component: <Dialisis />,
        },
      ];
      const location = useLocation();
      const navigate = useNavigate();
    
      const selectedTab = new URLSearchParams(location.search).get('tab');
    
        const handleTabChange = (value) => {
          const url = new URL(window.location.href);
          url.searchParams.set('tab', value);
          navigate(url.search, { replace: true });
        };
  return (
    <>
      <Helmet>
        <title>Estudios y procedimientos | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Conoce todos los estudios y procedimientos que realizamos en el hospital italiano"
        />
      </Helmet>
      <main className="mx-auto max-w-screen-2xl">
        <Typography
          variant="h3"
          color="green"
          className="py-5 text-center sm:text-left"
          textGradient
        >
          Estudios y procedimientos
        </Typography>
        <Typography className="p-2">
          En el Hospital Italiano contamos con los siguientes procedimientos
          generales, si queres consultar por algún procedimiento que no se
          encuentre en esta lista, podes hacerlo comunicándote a nuestra central
          de turnos, llamando al 512 9500.
        </Typography>
        <div className="w-full p-4">
        <Tabs value={selectedTab || 'laboratorio'}  orientation="vertical" className="flex-col md:flex-row">
          <TabsHeader
            className="w-screen md:w-72 divide-y"
            indicatorProps={{
              className: "bg-green-500/40 shadow-none z-0",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="justify-start text-left z-0" onClick={() => handleTabChange(value)}>
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
        </div>
      </main>
    </>
  );
};

export default Estudios;
