import { Button, Typography } from "@material-tailwind/react";
import Imagen1 from "../../assets/portada1.png";
import Imagen2 from "../../assets/portada2.jpg";
import Imagen3 from "../../assets/portada3.png";
// import Logo from "../../assets/logo.png";

const Hero = () => {

  return (
    <main className="h-full ">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-2xl mb-6 flex flex-col gap-8">
              <div className="flex items-center container">
                {/* <img src={Logo} alt="logo hospital" className='w-24' /> */}
                <Typography variant="h1" color="blue-gray" textGradient>
                  Hospital Italiano
                </Typography>
              </div>

              <Typography variant="paragraph">
              Somos un hospital comunitario, sin fines de lucro, docente con perfil universitario, de alta complejidad y calidad. Trabajamos para mejorar el cuidado de la salud de la población, centramos la atención en el paciente y su familia. Promovemos la investigación, la mejora continua, la capacitación de nuestro capital humano, la gestión sustentable y el compromiso social.
              </Typography>
            </div>
            <div className="flex">
              <Button variant="gradient" className="rounded-full flex flex-end" color="green" >
                Saber mas..
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8 ">
            <div className="flex flex-col items-end px-3 ">
              <img
                className="object-cover mb-6 rounded-xl shadow-sm h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={Imagen1}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded-xl shadow-sm sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={Imagen3}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded-xl shadow-sm sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={Imagen2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
