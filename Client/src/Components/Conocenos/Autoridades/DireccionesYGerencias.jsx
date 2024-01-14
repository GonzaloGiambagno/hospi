import { Typography } from "@material-tailwind/react";
import { BiUserCircle } from "react-icons/bi";

const DireccionesYGerencias = () => {
    const data = [
      {
        usuario: "Dr. Hugo Pinedo",
        cargo: "Director Médico",
      },
      {
        usuario: "Lic. Virginia Mainetti",
        cargo: "Directora de Docencia e Investigación",
      },
      {
        usuario: "Dr. Dalmiro Gallardo",
        cargo: "Director de Calidad, Seguridad y Experiencia del Paciente",
      },
      {
        usuario: "Cr. Julián M. Esteban",
        cargo: "Gerente Coordinador",
      },]
      const data2= [
      {
        usuario: "Cr. Luciano J. Erramuspe",
        cargo: "Gerente Financiero",
      },
      {
        usuario: "Cr. Julián M. Esteban",
        cargo: "Gerente de Negocios",
      },
      {
        usuario: "Cr. Leonardo Antonucci",
        cargo: "Gerente de Recursos Humanos",
      },
      {
        usuario: "Lic. Fernanda Arrondo",
        cargo: "Directora de Planeamiento Estratégico y Control de Gestión",
      },
    ];
  
    return (
      <div className="py-4 border-b-2 border-green-100">
        <Typography variant="h5" color="gray" className="mb-5">
          Direcciones y Gerencias
        </Typography>
        <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-col gap-2 md:w-1/2 ">
        {data.map(({ usuario, cargo }) => (
          <div key={usuario} className="flex flex-col">
            <Typography key={usuario} className="flex gap-2 items-center">
              <BiUserCircle
                size={24}
                color="green"
                className="flex w-6 flex-shrink-0"
              />  
              {usuario}
            </Typography>
            <Typography variant="h6" color="gray" className="pl-8">
              <i>{cargo}</i>
            </Typography>
          </div>
        ))}
        </div>
        <div className="flex flex-col gap-2 ">
        {data2.map(({ usuario, cargo }) => (
          <div key={usuario} className="flex flex-col">
            <Typography key={usuario} className="flex gap-2 items-center">
              <BiUserCircle
                size={24}
                color="green"
                className="flex w-6 flex-shrink-0"
              />  
              {usuario}
            </Typography>
            <Typography variant="h6" color="gray" className="pl-8">
              <i>{cargo}</i>
            </Typography>
          </div>
        ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default DireccionesYGerencias;