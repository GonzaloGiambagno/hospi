import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import AddImage from "./AddImage";

// eslint-disable-next-line react/prop-types
const ModalAddImage = ({ isOpen, onClose }) => {
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
          <AddImage />
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
