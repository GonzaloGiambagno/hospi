import { Button, Typography } from "@material-tailwind/react";
import Imagen1 from "../../assets/portada1.png";
import Imagen2 from "../../assets/portada2.jpg";
import Imagen3 from "../../assets/portada3.png";
import "./bgimage.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
 

const Hero = () => {
  return (
    <main className="h-full mx-auto rounded-br-xl">
      <div className="bgimagen py-8 px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0.5 lg:py-20 ">
        <div className="grid gap-10 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-2xl mb-6 flex flex-col gap-8">
              <div className="flex items-center">
                <Typography variant="h1" color="blue-gray" textGradient>
                  Hospital Italiano
                </Typography>
              </div>

              <Typography variant="paragraph">
                Somos un hospital comunitario, sin fines de lucro, docente con
                perfil universitario, de alta complejidad y calidad. Trabajamos
                para mejorar el cuidado de la salud de la población, centramos
                la atención en el paciente y su familia. Promovemos la
                investigación, la mejora continua, la capacitación de nuestro
                capital humano, la gestión sustentable y el compromiso social.
              </Typography>
            </div>
            <div className="flex">
              <Button
                variant="gradient"
                className="rounded-full flex flex-end"
                color="green"
              >
                Saber mas..
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8 ">
            <div className="flex flex-col items-end px-3 ">
              <div className="cardcss mb-6">
                <img
                  className="object-cover rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src={Imagen1}
                  alt=""
                />
                <div className="card__content rounded-xl flex flex-col gap-4 justify-center">
                  <p className="card__title">Enfermeria</p>
                  <p className="card__description">
                    Preinscripciones a partir del 1° de Noviembre
                  </p>
                  <Button variant="text" className="flex items-center gap-2" size="sm" color="green">
                    Ver mas
                    <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="cardcss">
                <img
                  className="object-cover w-28 h-24 rounded-xl shadow-lg sm:h-32 xl:h-48 sm:w-32 md:w-44 lg:w-48 xl:w-52"
                  src={Imagen2}
                  alt=""
                />
                <div className="card__content rounded-xl flex flex-col gap-0.5 justify-center">
                  <p className="card__title">Nuevo Portal</p>
                  <p className="card__description">
                    ¡Saca turno de manera facil!
                  </p>
                  <Button variant="text" className="flex items-center gap-2" size="sm" color="green">
                    Ver mas
                    <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="cardcss">
              <img
                className="object-cover w-40 h-40 rounded-xl shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={Imagen3}
                alt=""
              />
              <div className="card__content rounded-xl flex flex-col gap-4 justify-center">
                <p className="card__title">Residencias y Fellowship</p>
                <p className="card__description">
                  Inscripciones 2023 Abiertas!
                </p>
                <Button variant="text" className="flex items-center gap-0.5" size="sm" color="green">
                  Ver mas
                  <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
