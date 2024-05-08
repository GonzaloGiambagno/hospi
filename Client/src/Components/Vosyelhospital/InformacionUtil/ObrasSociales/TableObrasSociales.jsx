import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import api from "../../../../Service/api";

const ITEMS_PER_PAGE = 10 ;

const TablaObrasSociales = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [obrasSociales, setObrasSociales] = useState([]);
  const [totalPages, setTotalPages] = useState(1); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredRows = obrasSociales.filter(
    (obraSocial) =>
         obraSocial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentRows = filteredRows.slice(firstIndex, lastIndex);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //llamada a la Api
  useEffect(() => {
    const apiUrl = `${api.apiUrl}/obras-sociales`;

    axios
      .get(apiUrl)
      .then((response) => {
        const nombresObrasSociales = response.data.map(obraSocial => obraSocial.nombre_plan);
        setObrasSociales(nombresObrasSociales);
        setTotalPages(Math.ceil(nombresObrasSociales.length / ITEMS_PER_PAGE)); // Cambio 3: calcular total de páginas
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes:", error);
      });
  }, []);

  // estilos para la lista con la os en negrrito
  const stylizeName = (nombre_plan) => {
    const separarPorPartes = nombre_plan.indexOf('-');
    if (separarPorPartes !== -1) {
      const primeraParte = nombre_plan.slice(0, separarPorPartes).trim();
      const segundaParte = nombre_plan.slice(separarPorPartes + 1).trim();
      return (
        <span>
          <span style={{ fontWeight: 'bold' }}>{primeraParte}</span>
          {` - ${segundaParte}`}
        </span>
      );
    }
    return <span style={{ fontWeight: 'bold' }}>{nombre_plan}</span>;
  };

  const columns = [];

  const columnRows = currentRows;

  columns.push(
    <td key={0} className={`px-4 md:pt-4 mb-0 ${isSmallScreen ? 'block' : 'hidden sm:table-cell'} border border-r-2 border-b-0`}>
      {columnRows.map((obraSocial, index) => (
        <Typography
          key={index}
          variant="small"
          color="blue-gray"
          className="block mb-2"
        >
          {stylizeName(obraSocial)}
        </Typography>
      ))}
    </td>
  );

  return (
    <Card className="h-full w-full my-5 overflow-hidden">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="w-full md:w-96 p-1">
          <Input
            label="Buscar"
            icon={<BiSearchAlt className="h-5 w-5 text-green-500" />}
            value={searchTerm}
            onChange={handleSearchChange}
            color="green"
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden px-0 pb-0">
        <table className="w-full min-w-max text-left">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 md:w-96">
                <Typography
                  variant="small"
                  color="black"
                  className="font-normal leading-none opacity-70"
                >
                  Obras Sociales:
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {columns}
            </tr>
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
        <div className="flex items-center gap-2">
          <IconButton
            variant="outlined"
            color="blue-gray"
            size="md"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <AiOutlineArrowLeft />
          </IconButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton
              key={index + 1}
              variant={currentPage === index + 1 ? 'contained' : 'text'}
              color="blue-gray"
              size="md"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
          <IconButton
            variant="outlined"
            color="blue-gray"
            size="md"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <AiOutlineArrowRight />
          </IconButton>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TablaObrasSociales;
