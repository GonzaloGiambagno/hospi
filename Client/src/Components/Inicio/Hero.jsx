import { Button, Typography } from "@material-tailwind/react";
import Imagen1 from "../../assets/portada1.png";
import Imagen2 from "../../assets/portada2.jpg";
import Imagen3 from "../../assets/portada3.png";
import "./bgimage.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <article className="h-full mx-auto rounded-br-xl">
      <div className="bgimagen py-8 px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0.5 lg:pb-20">
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-2xl mb-6 flex flex-col gap-8">
              <div className="flex items-center">
                <Typography variant="h1" color="gray">
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
              <Link to="/conocenos/quienesSomos">
                <Button
                  variant="gradient"
                  className="rounded-full flex flex-end"
                  color="green"
                >
                  Saber más..
                </Button>
              </Link>
            </div>
          </div>
          <section className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <div className="cardcss mb-6">
                <img
                  className="object-cover rounded-xl shadow-lg h-auto w-48 sm:h-48 xl:h-56  sm:w-48 xl:w-56"
                  src={Imagen1}
                  alt=""
                />
                <div className="card__content rounded-xl flex flex-col gap-4 justify-center">
                  <p className="card__title">Enfermería</p>
                  <p className="card__description">
                    Preinscripciones a partir del 1° de Noviembre
                  </p>
                  <Link to="/educacion/enfermeria">                
                  <Button
                    variant="text"
                    className="flex items-center gap-2"
                    size="sm"
                    color="green"
                  >
                    Ver más
                    <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="cardcss">
                <img
                  className="object-cover w-48 h-auto rounded-xl shadow-lg sm:h-32 xl:h-48 sm:w-32 md:w-44 lg:w-48 xl:w-52"
                  src={Imagen2}
                  alt=""
                />
                <div className="card__content rounded-xl flex flex-col gap-0.5 justify-center">
                  <p className="card__title">Nuevo Portal</p>
                  <p className="card__description">
                    ¡Saca turno de manera fácil!
                  </p>
                  <a href="https://portal.italianolaplata.org.ar/Cuenta/Loginhttps://portal.italianolaplata.org.ar/Cuenta/Login" target="blank">
                    <Button
                      variant="text"
                      className="flex items-center gap-2"
                      size="sm"
                      color="green"
                    >
                      Ver más
                      <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="cardcss">
              <img
                className="object-cover w-40 h-40 rounded-xl shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={Imagen3}
                alt="informacion sobre residencias y fellowship"
              />
              <div className="card__content rounded-xl flex flex-col gap-4 justify-center">
                <p className="card__title">Residencias y Fellowship</p>
                <p className="card__description">
                  Inscripciones 2023 Abiertas!
                </p>
                <Link to="/educacion/posgrado">
                  <Button
                    variant="text"
                    className="flex items-center gap-0.5"
                    size="sm"
                    color="green"
                  >
                    Ver más
                    <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
    </article>
  );
};

export default Hero;
