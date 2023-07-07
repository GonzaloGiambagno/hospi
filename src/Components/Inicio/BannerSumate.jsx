import { Typography } from "@material-tailwind/react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const BannerSumate = () => {
  return (
    <article className="max-w-screen-2xl mx-auto mt-10 py-5 bg-gradient-to-r from-gray-300 to-gray-600 sm:rounded-xl">
      <section className="flex flex-wrap justify-center gap-2 items-center lg:gap-16 p-1">
        <Typography variant="h5" color="blue-gray" className="text-center flex gap-4 items-center">
          <AiOutlineUsergroupAdd size={32} className="hidden md:block"/> ¿Quéres ser parte de nuestro Hospital? ¡SUMATE AL EQUIPO!
        </Typography>
        <a
          href="https://italianolaplata.hiringroom.com/jobs"
          target="blank"
          className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-small text-white transition duration-200 ease-out border-2 border-white rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="gray"
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
          Envianos tu CV
          </span>
          <span className="relative invisible">Envianos tu CV</span>
        </a>
      </section>
    </article>
  );
};

export default BannerSumate;
