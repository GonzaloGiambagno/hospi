import axios from "axios";
import api from "../../../Service/api";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import { useCarousel } from "../../../Context/CarouselContext";
import { useState } from "react";
import ModalImage from "./ModalImage";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { images, updateImages } = useCarousel();
  const TABLE_HEAD = ["Titulo", "Descripcion", "Ver imagen", "Eliminar"];
  const navigate = useNavigate();

  const handleDelete = (imageId) => {
    axios
      .delete(`${api.apiUrl}/carousel/${imageId}`)
      .then(() => {
        const updatedImages = images.filter((image) => image.id !== imageId);
        updateImages(updatedImages);
      })
      .catch((error) => {
        console.error("Error al borrar la imagen:", error);
      });
  };

  //   const handleEdit = (imageId) => {
  //     axios
  //       .get(`${api.apiUrl}/carousel/${imageId}`)
  //       .then((response) => {
  //         // Abre un modal de edición o navega a otra página de edición
  //         // ...
  //       })
  //       .catch((error) => {
  //         console.error("Error al obtener detalles de la imagen:", error);
  //       });
  //   };

  const handleViewImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  };

  return (
    <Card className="h-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="h5" color="blue-gray">
              Imagenes
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Administrar las imagenes en la portada de la web
            </Typography>
          </div>
          <Button
            className="flex items-center gap-2"
            size="sm"
            color="blue-gray"
            onClick={() => navigate("/dashboard/inicio/agregar-imagen")}
          >
            <CloudArrowUpIcon strokeWidth={2} className="h-4 w-4" /> Agregar
            Imagen
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden p-0">
        <table className="mt-4 w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {images.map((image, index) => {
              const isLast = index === images.length - 1;
              const classes = isLast
                ? "px-4"
                : "px-4 border-b border-blue-gray-100";

              return (
                <tr key={image.id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {image.title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {image.description}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <IconButton
                      variant="text"
                      onClick={() => handleViewImage(image.full_path)}
                    >
                      <PhotoIcon className="h-6 w-6 text-center" />
                    </IconButton>
                  </td>
                  <td className={classes}>
                    <IconButton
                      variant="text"
                      color="red"
                      onClick={() => handleDelete(image.id)}
                    >
                      <TrashIcon className="h-6 w-6" />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <ModalImage
            isOpen={isImageModalOpen}
            onClose={() => setIsImageModalOpen(false)}
            imageUrl={selectedImage}
          />
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter> */}
    </Card>
  );
};
