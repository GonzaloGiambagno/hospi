import { Typography } from "@material-tailwind/react";
import Imagen1 from "../../assets/portada1.png";
import Imagen2 from "../../assets/portada2.jpg";
import Imagen3 from "../../assets/portada3.png";
// import Logo from "../../assets/logo.png";

const Hero = () => {

  return (
    <main className="h-full ">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-2xl mb-6 flex flex-col gap-8">
              <div className="flex items-center container">
                {/* <img src={Logo} alt="logo hospital" className='w-24' /> */}
                <Typography variant="h1" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-600 shadows-md">
                  Hospital Italiano
                </Typography>
              </div>

              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
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
