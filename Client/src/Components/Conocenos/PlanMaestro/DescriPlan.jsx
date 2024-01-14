/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";

const ListItem = ({ title, description }) => (
  <li className="py-2">
    <Typography className="font-semibold">{title}</Typography>
    <Typography className="text-justify">{description}</Typography>
  </li>
);

const DescriPlan = () => {
  return (
    <section className="mt-5">
      <Typography variant="h6">Plan Maestro</Typography>
      <Typography className="text-justify">
        El Plan Maestro define una nueva organización funcional, ordenando los
        grados de complejidad médica por bloques, en forma creciente desde el
        nuevo cuerpo Ambulatorio sobre calle 29, hasta la consolidación del
        conjunto de Alta Complejidad y Cuidados Críticos sobre calle 30.
        Transversalmente se estructura la trama circulatoria que permite
        independizar y organizar los flujos de movimiento de público y técnicos,
        en horizontal y en vertical. Se destina el corredor sobre Av 51 a la
        circulación pública y en paralelo una circulación técnica, asociada a
        núcleos de movimientos verticales con ascensores camilleros y escaleras
        de incendio.
        <br />
        Implementando así una red circulatoria clara y equilibrada que permitirá
        desarrollar los procesos en forma eficiente y segura.
      </Typography>
      <ul>
        <ListItem
          title="Confort"
          description="Se incorporarán nuevos sectores de espera en las distintas plantas del edificio próximos a los patios internos, con luz natural y vistas al exterior. Se relocalizará la cafetería de público con vistas y salida al mayor patio interior, arbolado y con acceso directo desde el Hall público de Planta Baja."
        />
        <ListItem
          title="Accesibilidad"
          description="El Plan Maestro propone un nuevo sistema de accesos, esperas y lugares de atención al público con el objetivo de mejorar la accesibilidad y el confort del paciente.
          El acceso de Avenida 51 será destinado principalmente para las áreas de Internación y las áreas de Alta Complejidad Médica.
          Los accesos a Guardia y Edificio Ambulatorio se organizarán a partir de un nuevo acceso a nivel de vereda en la esquina de 29 y 50. Este nuevo hall accesible contará con atención al público para informes y entrega de estudios. A través de éste, se tendrá acceso peatonal al área ambulatoria, con consultorios externos y laboratorio."
        />
        <ListItem
          title="Sustentabilidad"
          description="Se planifica un crecimiento sustentable para el hospital, la refuncionalización y ampliación del edificio está acompañada por la limpieza y recuperación de los patios y jardines internos, demoliendo las construcciones que los ocupan actualmente. Esto mejorará considerablemente las condiciones de habitabilidad de todo el hospital, permitiendo una mayor iluminación, favoreciendo la ventilación natural, e incorporando áreas exteriores de uso."
        />
        <ListItem
          title="Hospital de alta complejidad"
          description="El Hospital Italiano La Plata ha definido su perfil a partir de la incorporación y desarrollo de áreas de Alta Complejidad: Trasplante de Médula Ósea, Trasplante Hepático, Intervencionismo Endovascular y Hospital de Día Polivalente. Estos sectores se han transformado en “espigas de crecimiento” del Hospital y lo han vigorizado con una eficiente dinámica de trabajo a partir de equipos consolidados.
          Dentro de este marco se ha encarado el Plan Maestro de reorganización y crecimiento para ampliar la capacidad, aumentando el número de camas y puestos con sus correspondientes áreas de apoyo, ampliando los servicios frente a una creciente demanda de la comunidad."
        />
        <ListItem
          title="Servicio y apoyo médico"
          description="También se ampliarán y reorganizarán los Servicios de Apoyo y Oficinas en un nuevo bloque dispuesto sobre calle 50. Este bloque permitirá independizar el abastecimiento y el acceso de personal del resto del Hospital. Se organizarán los movimientos vinculados a Playa Técnica, consolidando a futuro una tercera vía circulatoria para insumos, procesamiento y residuos. En este bloque se proponen además, en las plantas superiores, lugares destinados al confort médico, áreas de residentes y administrativas."
        />
        <ListItem
          title="Investigación y docencia"
          description="El perfil Académico de la Institución se consolidará a partir de la construcción de un nuevo edificio anexo sobre calle 51 dedicado a Enseñar, Investigar, Asistir y Gestionar. Contará con aulas, espacios flexibles de estudio, investigación y un Salón Multiuso frente al acceso histórico del hospital y con vistas al parque del eje fundacional de la ciudad."
        />
      </ul>
    </section>
  );
};

export default DescriPlan;
