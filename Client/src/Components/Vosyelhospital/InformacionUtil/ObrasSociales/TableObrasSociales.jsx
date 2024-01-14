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
import EspecialidadesData from "../dbOsyEsp.json";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


const ITEMS_PER_PAGE = 14;
const COLUMN_COUNT = 2;

const TablaObrasSociales = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredRows = EspecialidadesData.obrasSociales.filter(
    (obraSocial) =>
         obraSocial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentRows = filteredRows.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredRows.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const rowCount = Math.ceil(currentRows.length / COLUMN_COUNT);
  const columns = [];

  for (let i = 0; i < COLUMN_COUNT; i++) {
    const startIndex = i * rowCount;
    const endIndex = startIndex + rowCount;
    const columnRows = currentRows.slice(startIndex, endIndex);

    columns.push(
      <td key={i} className={`px-4 md:pt-4 mb-0 ${isSmallScreen ? 'block' : 'hidden sm:table-cell'} border border-r-2 border-b-0`}> {/* Agrega clases condicionales para ocultar o mostrar la columna en función del tamaño de pantalla */}
        {columnRows.map((obraSocial, index) => (
          <Typography
            key={index}
            variant="small"
            color="blue-gray"
            className="font-bold block mb-2"
          >
            {obraSocial}
          </Typography>
        ))}
      </td>
    );
  }

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
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 hidden sm:table-cell"></th> {/* Asegúrate de agregar la clase 'hidden' en la columna que deseas ocultar en pantallas pequeñas */}
            </tr>
          </thead>
          <tbody >
            <tr>
              {columns.map((column) => column)}
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
