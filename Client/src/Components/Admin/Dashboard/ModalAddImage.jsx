import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import AddImage from "./AddImage";
import { useCarousel } from "../../../Context/CarouselContext";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ModalAddImage = ({ isOpen, onClose }) => {
  const [error, setError] = useState(null);
  const { addImage } = useCarousel(); 

  const handleAddImage = async (image) => {
    try {
      await addImage(image);
      onClose();
    } catch (error) {
      console.error("Error al agregar la imagen:", error);
      setError("Error al agregar la imagen. Por favor, inténtalo de nuevo.");
    }
  };


  return (
    <>
      <Dialog
        size="xs"
        open={isOpen}
        handler={onClose}
        animate={{
          mount: { scale: 1, y: 0.5 },
          unmount: { scale: 0.9, y: -50 },
        }}
      >
        <DialogHeader>Agregar Imagen</DialogHeader>
        <DialogBody>
          <AddImage onAddImage={handleAddImage} />
          {error && <p className="text-red-500">{error}</p>}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={onClose} className="mr-1">
            <span>Cerrar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalAddImage;
