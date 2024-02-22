/* eslint-disable react/prop-types */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { CloudArrowUpIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

const AddImage = ({ onAddImage }) => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  const handleRemoveFile = () => {
    setFiles([]);
  };

  const handleSaveImage = () => {
    if (title && files.length > 0) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", files[0]);
  
      onAddImage(formData);
    }
  };

  const fileList = files.map((file) => <li key={file.path}>{file.path}</li>);

  return (
    <Card color="transparent" shadow={false}>
      <form className="w-full max-w-screen-lg ">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Titulo
          </Typography>
          <Input
            size="lg"
            placeholder="Ingresar titulo..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descripcion
          </Typography>
          <Input
            size="lg"
            placeholder="Descripcion de la foto"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <section className="container">
          <div
            {...getRootProps({
              className:
                "dropzone border-dashed border-2 hover:border-green-500 p-4 rounded-xl mt-4 hover:text-green-500",
            })}
          >
            <input {...getInputProps()} />
            <Typography
              variant="small"
              className="flex justify-center items-center gap-3"
            >
              <CloudArrowUpIcon strokeWidth={2} className="h-8 w-8 " />{" "}
              Arrastrar Imagen o hacer clic para seleccionarla en tu equipo
            </Typography>
          </div>
          {files.length > 0 && (
            <aside className="mt-4">
              <ul className="mt-4 flex justify-center items-center gap-3">
                <Typography variant="small">{fileList}</Typography>
                <XCircleIcon
                  className="h-6 w-6 text-red-500 cursor-pointer"
                  onClick={handleRemoveFile}
                />
              </ul>
            </aside>
          )}
        </section>
        <Button
          className="mt-6 flex justify-center items-center gap-3"
          variant="gradient"
          color="green"
          fullWidth
          onClick={handleSaveImage}
        >
          Guardar imagen
        </Button>
      </form>
    </Card>
  );
};

export default AddImage;
