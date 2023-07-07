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
import contactosData from "./contactos.json";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const ITEMS_PER_PAGE = 5;

const Internos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar la página al realizar una nueva búsqueda
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredRows = contactosData.servicios.filter(
    ({ servicio, interno }) =>
      servicio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interno.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <Card className="h-full w-full mt-5 overflow-hidden">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="green">
              Interno telefonicos
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Comunicate directamente con cada servicio
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<BiSearchAlt className="h-5 w-5 text-green-500" />}
                value={searchTerm}
                onChange={handleSearchChange}
                color="green"
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden px-1">
        <table className="w-full min-w-max text-left ">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Especialidad
                </Typography>
              </th>
              <th className="border-y w-96 border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Interno
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map(({ servicio, interno }) => (
              <tr key={servicio}>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {servicio}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {interno}
                  </Typography>
                </td>
              </tr>
            ))}
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
              variant={currentPage === index + 1 ? "contained" : "text"}
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

export default Internos;
