import { Typography } from "@material-tailwind/react";

const Leyenda = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-300 w-full h-full rounded-2xl flex flex-col">
      <Typography color="" className="text-center px-10 pt-6 font-semibold">
        “No es suficiente enseñar a los hombres una especialidad. Con ello se
        convierten en algo así como en máquinas utilizables, pero no en
        individuos válidos. Para ser un individuo válido el hombre debe sentir
        intensamente aquello a lo que puede aspirar, tiene que recibir un
        sentimiento vivo de lo bello y de lo moralmente bueno... para que exista
        una educación válida es necesario que se desarrolle el pensamiento
        crítico e independiente de los jóvenes... La enseñanza debe ser tal que
        pueda recibirse como el mejor regalo y no como una amarga obligación”
      </Typography>
      <Typography variant="" className="text-right px-8 pb-6">- Albert Einstein</Typography>
    </div>
  );
};

export default Leyenda;
