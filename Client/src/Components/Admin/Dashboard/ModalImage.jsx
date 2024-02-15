import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const ModalImage = ({ isOpen, onClose, imageUrl }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        handler={onClose}
        animate={{
          mount: { scale: 1, y: 0.5 },
          unmount: { scale: 0.9, y: -50 },
        }}
      >
        <DialogHeader>Vista previa</DialogHeader>
        <DialogBody>
          <img src={imageUrl} alt="Preview" className="w-full" />
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

export default ModalImage;
