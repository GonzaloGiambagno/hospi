import { Typography } from "@material-tailwind/react";

const Valores = () => {

    const data = [
        {
            valor: "Italianidad",
            descripcion: "En nuestra Organización representa el trabajo, la familia y la difusión de la lengua y la cultura italiana. Este valor nos permite ser un Hospital Comunitario que respeta sus orígenes."
        },
        {
            valor: "Honestidad",
            descripcion: "Este valor tiene una estrecha relación con los principios de verdad, justicia y con la integridad moral. Ser honesto es anteponer la verdad en los pensamientos, expresiones y acciones. Ser decente, recatado, razonable y justo respetando por sobre todas las cosas las normas que se consideran como correctas y adecuadas en el Hospital y la comunidad en la que se desarrolla, generando confianza y seguridad."
        },
        {
            valor: "Profesionalismo",
            descripcion: "Ser profesional es ser responsable de poseer plena y completa información para la toma de decisiones, relativas a una población, a un programa, o al paciente y su familia. Es tener la capacidad y la habilidad de asumir el compromiso por aquellos actos realizados, para alcanzar los objetivos definidos. Una característica clave del profesionalismo es que establece estándares para la práctica de los miembros que integran dicha profesión.",
        },
        {
            valor: "Solidaridad",
            descripcion: "Implica ayudar de manera desinteresada a los demás, ya sea un individuo en particular o a la sociedad en su conjunto. Es adherir o apoyar de manera incondicional a causas o intereses ajenos, especialmente en situaciones comprometidas o difíciles."
        },
        {
            valor: "Respeto",
            descripcion: "Es saber valorar los intereses y necesidades de otro individuo considerando su autonomía y dignidad. Se asocia siempre a la verdad, no tolera la calumnia y el engaño. Exige un trato amable y cortes en cualquier relación interpersonal como así también en el trabajo de equipo. Es garantía de transparencia."
        },
        {
            valor: "Espiritualidad",
            descripcion: "Es la parte más profunda e íntima de cada persona, que permite con sabiduría, valor y autocontrol alcanzar metas más elevadas que las cotidianas, para alcanzar con humildad los objetivos que el Hospital propone."
        },
        {
            valor: "Sustentabilidad",
            descripcion: "Es la habilidad de lograr una prosperidad económica, social y ambiental de manera sostenida, mejorando la calidad de vida de las personas y protegiendo los sistemas naturales del medio. El Hospital y la comunidad en la que se desenvuelve debe tener la capacidad de satisfacer sus necesidades actuales, sin perjudicar la posibilidad de que las generaciones futuras puedan satisfacer las suyas."
        }
    ]
  
    return (
    <article className="w-full">
      <Typography variant="lead" className="font-semibold">
        Nuestros valores
      </Typography>
        <section className="md:px-4">
            {data.map(({ valor, descripcion }) => ( 
                <div key={valor} className="flex flex-col gap-2 divide-y">
                    <Typography variant="lead" className="mt-2" color="black">{valor}</Typography>
                    <Typography className="pt-2 text-justify">{descripcion}</Typography>
                </div>
        ))}
        </section>
    </article>
  );
};

export default Valores;