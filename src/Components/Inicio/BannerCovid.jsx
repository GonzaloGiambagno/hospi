import { Typography } from "@material-tailwind/react";

const BannerCovid = () => {
  return (
    <section className="max-w-screen-2xl mx-auto mt-10 py-5 bg-gradient-to-r from-red-200 via-red-400 to-red-500 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm">
      <div className="flex justify-center items-center gap-16">
        <Typography variant="h5" color="blue-gray" className="text-center">
          Datos en tiempo real del COVID-19 en nuestro Hospital
        </Typography>
        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-small text-white transition duration-200 ease-out border-2 border-white rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="red"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Ver Reporte
          </span>
          <span className="relative invisible">ver reporte</span>
        </a>
      </div>
    </section>
  );
};

export default BannerCovid;
