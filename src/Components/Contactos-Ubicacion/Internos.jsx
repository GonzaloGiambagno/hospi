import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import contactosData from './contactos.json';

const Internos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const filtered = contactosData.servicios.filter(
      ({ servicio, interno }) =>
        servicio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        interno.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mt-10 p-8">
      <Card className="overflow-scroll h-full w-full">
        <div className="p-4">
          <input
            type="text"
            placeholder="Buscar por nombre o interno"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-3 py-2 border rounded-md w-full"
          />
        </div>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Servicio
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
            {filteredRows.map(({ servicio, interno }) => (
              <tr key={servicio}>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {servicio}
                  </Typography>
                </td>
                <td className="p-4 bg-blue-gray-50/50">
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
      </Card>
    </div>
  );
};

export default Internos;
