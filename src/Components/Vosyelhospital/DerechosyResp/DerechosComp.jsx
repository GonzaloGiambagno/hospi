import { Typography } from "@material-tailwind/react";

const DerechosComp = () => {

  const derechosData = [
    {
      titulo: "a) Asistencia:",
      descripcion: "El paciente, prioritariamente los niños, niñas y adolescentes, tienen derecho a ser asistidos por los profesionales de la salud, sin menoscabo y distinción alguna, producto de sus ideas, creencias religiosas, políticas, condición socioeconómica, raza, sexo, orientación sexual o cualquier otra condición. El profesional actuante sólo podrá eximirse del deber de asistencia, cuando se hubiere hecho cargo efectivamente del paciente otro profesional competente",
    },  
    {
      titulo: "b) Trato digno y respetuoso:",
      descripcion: "El paciente tiene el derecho a que los agentes del sistema de salud intervinientes, le otorguen un trato digno, con respeto a sus convicciones personales y morales, principalmente las relacionadas con sus condiciones socioculturales, de género, de pudor y a su intimidad, cualquiera sea el padecimiento que presente, y se haga extensivo a los familiares o acompañantes;",
    },  
    {
      titulo: "c) Intimidad:",
      descripcion: "Toda actividad médico - asistencial tendiente a obtener, clasificar, utilizar, administrar, custodiar y transmitir información y documentación clínica del paciente debe observar el estricto respeto por la dignidad humana y la autonomía de la voluntad, así como el debido resguardo de la intimidad del mismo y la confidencialidad de sus datos sensibles, sin perjuicio de las previsiones contenidas en la Ley Nº 25.326;",
    },  
    {
      titulo: "d) Confidencialidad:",
      descripcion: "El paciente tiene derecho a que toda persona que participe en la elaboración o manipulación de la documentación clínica, o bien tenga acceso al contenido de la misma, guarde la debida reserva, salvo expresa disposición en contrario emanada de autoridad judicial competente o autorización del propio paciente;",
    },  
    {
      titulo: "e) Autonomía de la Voluntad:",
      descripcion: "El paciente tiene derecho a aceptar o rechazar determinadas terapias o procedimientos médicos o biológicos, con o sin expresión de causa, como así también a revocar posteriormente su manifestación de la voluntad. Los niños, niñas y adolescentes tienen derecho a intervenir en los términos de la Ley Nº 26.061 a los fines de la toma de decisión sobre terapias o procedimientos médicos o biológicos que involucren su vida o salud.",
    },  
    {
      titulo: "f) Información Sanitaria:",
      descripcion: "El paciente tiene derecho a recibir la información sanitaria necesaria, vinculada a su salud. El derecho a la información sanitaria incluye el de no recibir la mencionada información.",
    },  
    {
      titulo: "g) Interconsulta Médica:",
      descripcion: "El paciente tiene derecho a recibir la información sanitaria por escrito, a fin de obtener una segunda opinión sobre el diagnóstico, pronóstico o tratamiento relacionados con su estado de salud. Información sanitaria: El paciente tiene derecho a recibir información sanitaria, es decir a recibir aquella información que, de manera clara, suficiente y adecuada a la capacidad de comprensión del paciente, informe sobre su estado de salud, los estudios y tratamientos que fueren menester realizarle y la previsible evolución, riesgos, complicaciones o secuelas de los mismos.",
    },  
    {
      titulo: "h) Historia clínica:",
      descripcion: "El paciente es el titular de la historia clínica, es decir es dueño del documento obligatorio cronológico, foliado y completo en el que conste toda actuación realizada al paciente por profesionales y auxiliares de la salud. A su simple requerimiento debe suministrársele copia de la misma, autenticada por autoridad competente de la institución asistencial. La entrega se realizará dentro de las cuarenta y ocho (48) horas de solicitada, salvo caso de emergencia. De acuerdo con el Art. 19 se encuentran legitimados para solicitar la historia clínica:",
      descripcion2: "a) El paciente y su representante legal.",
      descripcion3: "b) El cónyuge o la persona que conviva con el paciente en unión de hecho, sea o no de distinto sexo según acreditación que determine la reglamentación y los herederos forzosos, en su caso, con la autorización del paciente, salvo que éste se encuentre imposibilitado de darla",
      descripcion4: "c) Los médicos, y otros profesionales del arte de curar, cuando cuenten con expresa autorización del paciente o de su representante legal."
    },  
  ]

  return (
    <section className='w-full mt-2'>
        <Typography variant="h5" color="black" className="p-2">Conocé tus derechos como paciente</Typography>
        <div className="p-2">
          {derechosData.map(({ titulo, descripcion, descripcion2, descripcion3, descripcion4 }) => ( 
            <div key={titulo} className="flex flex-col">
                <Typography variant="h6" className="mt-2" color="black">{titulo}</Typography>
                <Typography className="pt-1 text-justify">{descripcion}</Typography>
                <Typography className="pl-2 pt-1 text-justify">{descripcion2}</Typography>
                <Typography className="pl-2 text-justify">{descripcion3}</Typography>
                <Typography className="pl-2 text-justify">{descripcion4}</Typography>
            </div>
        ))}
        </div>
    </section>
  )
}

export default DerechosComp