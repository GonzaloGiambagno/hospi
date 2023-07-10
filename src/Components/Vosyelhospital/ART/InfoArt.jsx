import { Typography } from "@material-tailwind/react"
import { AiOutlineCaretRight } from 'react-icons/ai'

const InfoArt = () => {
  return (
    <div className="md:w-3/4 px-4">
      <Typography variant="h6">
        ¿Qué es un Accidente de Trabajo?
      </Typography>
      <Typography className="py-2 text-justify">
      Un Accidente de Trabajo es un acontecimiento inesperado ocurrido en el trabajo o en el trayecto entre el domicilio del trabajador y el lugar de trabajo o viceversa.
      </Typography>
      <Typography variant="h6">
        ¿Cuáles son los derechos del trabajador?
      </Typography>
      <ul className="flex flex-col gap-2 justify-start py-2">
          <li className="flex items-center gap-2 w-full"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Trabajar en un ambiente sano y seguro.</Typography></li>
          <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Conocer los riesgos asociados a su tarea.</Typography></li>
          <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Recibir capacitación sobre métodos de prevención del Accidente de Trabajo.</Typography></li>
          <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Estar cubierto por una ART a traves de la afiliacion de su empleador.</Typography></li>
          <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Recibir los elementos de protección personal.</Typography></li>
          <li className="flex items-center gap-2"><AiOutlineCaretRight color="green" className="hidden md:flex w-6 flex-shrink-0"/><Typography>Conocer cual es su ART.</Typography></li>
        </ul>
    </div>
  )
}

export default InfoArt