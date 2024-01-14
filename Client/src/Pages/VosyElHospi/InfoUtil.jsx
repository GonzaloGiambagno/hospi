import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import Horarios from "../../Components/Vosyelhospital/InformacionUtil/Horarios";
import Guardia from "../../Components/Vosyelhospital/InformacionUtil/Guardia";
import { useLocation, useNavigate } from 'react-router-dom';
import ServiciosYEsp from "../../Components/Vosyelhospital/InformacionUtil/ServicioyEspecialidades/ServiciosYEsp";
import ObrasSociales from "../../Components/Vosyelhospital/InformacionUtil/ObrasSociales/ObrasSociales";
import FormasdePago from "../../Components/Vosyelhospital/InformacionUtil/FormasdePago";
import InfoInternacion from "../../Components/Vosyelhospital/InformacionUtil/DocumentacionyTramites/InfoInternacion";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import Comodidades from "../../Components/Vosyelhospital/InformacionUtil/Comodidades/Comodidades";


const InfoUtil = () => {
  const data = [
    {
      label: "Horarios",
      value: "horarios",
      component: <Horarios/>,
    },
    {
      label: "Guardia",
      value: "guardia",
      component: <Guardia />,
    },
    {
      label: "Servicios y especialidades",
      value: "serviciosyespecialidades",
      component: <ServiciosYEsp />,
    },
    {
      label: "Obras Sociales",
      value: "obrasSociales",
      component: <ObrasSociales />,
    },
    {
      label: "Formas de Pago, costos y autorizaciones",
      value: "formasDePago",
      component: <FormasdePago />,
    },
    {
      label: "Atención, documentacion y trámites",
      value: "documentacion",
      component: <InfoInternacion />,
    },
    {
      label: "Nuestras Comodidades",
      value: "comodidades",
      component: <Comodidades />,
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
    <OpacityAnimated>
      <Helmet>
        <title>Informacion Util | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Aca encontraras todo lo que necesitas como paciente, como horarios, y tus derechos"
        />
      </Helmet>
      <div className="mx-auto max-w-screen-2xl p-4">
        <Typography
          variant="h2"
          color="green"
          className="py-5"
          textGradient
        >
          Informacion útil
        </Typography>
        <Tabs value={selectedTab || 'horarios'}  orientation="vertical" className="flex-col md:flex-row">
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
    </OpacityAnimated>
  );
};

export default InfoUtil;
