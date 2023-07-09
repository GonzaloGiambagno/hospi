import { Typography } from "@material-tailwind/react";

const FormasdePago = () => {

    const data = [
        {
            pregunta: "¿Qué formas de pago reciben?",
            respuessta: "Los medios de pago que aceptamos en el Hospital Italiano La Plata son: Efectivo, Tarjeta de crédito y Tarjeta de débito."
        },
        {
            pregunta: "¿Cuál es el costo de consulta/estudio/examen?",
            respuessta: "Cada consulta médica, práctica y/o estudio tiene un costo. Dependiendo de tu obra social se cobra un diferencial o no, por eso es importante que siempre asistas al Hospital con tu Carnet de obra social."
        },
        {
            pregunta: "¿Hay que pagar por los controles y prestaciones?",
            respuessta: "Cada consulta médica, práctica y/o estudio tiene un costo. Dependiendo de tu obra social se cobra un diferencial o no, por eso es importante que siempre asistas al Hospital con tu Carnet de obra social.",
        },
        {
            pregunta: "¿Qué prácticas necesitan ser autorizadas? ¿Cómo debo hacer?",
            respuessta: "Si bien cada práctica y/o estudio son diferentes, existen dos grandes grupos: por un lado, las prácticas en las que podés dejar la orden en el Hospital en el momento de sacar el turno y nosotros nos ocupamos de autorizarla. Y por otro, las prácticas y/o estudios en las que la autorización la tenés que realizar personalmente en tu obra social y traer autorizada al momento del turno",
        },
        {
            pregunta: "¿Cómo debo hacer para solicitar un reintegro?",
            respuessta: ["Para el reintegro en la obra social o coseguro: Cuando te presentas para práctica, estudio o consulta médica, en la Caja del Hospital te dan una factura. Con esa factura, tenés que dirigirte a la obra social o coseguro e iniciar el trámite para el reintegro correspondiente.",
            " Para el reintegro en el Hospital: en el caso de haber abonado una consulta médica, práctica o estudio en el Hospital, tenés que autorizar la orden en tu obra social o traer el bono de consulta y presentarlo en la caja donde realizó el pago. Allí te reintegrarán el dinero."]
        }
    ]
  
    return (
    <article className="w-full">
      <Typography variant="h4" color="gray" className="px-4 mb-4">
        Formas de pago, costos y autorizaciones
      </Typography>
        <section className="md:px-4">
            {data.map(({ pregunta, respuessta }) => ( 
                <div key={pregunta} className="flex flex-col gap-2 divide-y">
                    <Typography variant="lead" className="mt-2" color="black">{pregunta}</Typography>
                    <Typography className="pt-2 text-justify">{respuessta}</Typography>
                </div>
        ))}
        </section>
    </article>
  );
};

export default FormasdePago;
