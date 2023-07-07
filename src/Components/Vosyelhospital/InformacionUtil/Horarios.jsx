import { Typography } from "@material-tailwind/react";

const Horarios = () => {

    const data = [
        {
            sector: "Guardia y atención ambulatoria",
            horario: ["La atención espontánea o de guardia es de lunes a lunes las 24hs para Clínica médica, Cirugía, Obstetricia, La atención espontánea o guardia de Ginecología es de lunes a viernes de 8 a 17 hs. El Hospital cuenta con atención ambulatoria (atención por consultorio con turno previo) de lunes a viernes entre las 8 y las 20hs y los sábados de 8 a 12hs",
            " Los horarios de la Central de Turnos es de lunes a viernes de 8 a 16 hs, podes sacar un turno llamando al 4573001.",]
        },
        {
            sector: "Laboratorio",
            horario: ["Extracción: de lunes a viernes de 7.30 a 9.30 hs por orden de llegada y sábados con turno de 7 a 8.30 hs.","Retiro de estudios: de lunes a viernes de 10 a 18 hs y sábados de 9.30 a 11.30hs."]
        },
        {
            sector: "Patologia",
            horario: "Lunes a viernes de 8 a 18 hs. y sábados de 8 a 12hs.",
        },
        {
            sector: "Internación Programada:",
            horario: "Los horarios de internación programada son de lunes a viernes entre las 8 y las 20hs y los sábados de 8 a 12hs.",
        },
        {
            sector: "Instituto de Enfermería:",
            horario: "De lunes a viernes de 8 a 12 hs.",
        },
        {
            sector: "Misas:",
            horario: ["- Lunes a sábados 7:00 hs.",
            "Domingos 16:00 hs.",
            "Feriados 8:00 hs."],
        },
        {
            sector: "Exposición del Santísimo:",
            horario: ["Lunes a viernes de 9:00 hs. a 10:30 hs.","Lunes a viernes de 16:00 hs. a 17:00 hs."],
        },
    ]
  
    return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Horarios
      </Typography>
        <section className="md:px-4">
            {data.map(({ sector, horario }) => ( 
                <div key={sector} className="flex flex-col gap-2 divide-y">
                    <Typography variant="lead" className="mt-2">{sector}</Typography>
                    <Typography className="pt-2">{horario}</Typography>
                </div>
        ))}
        </section>
    </article>
  );
};

export default Horarios;
