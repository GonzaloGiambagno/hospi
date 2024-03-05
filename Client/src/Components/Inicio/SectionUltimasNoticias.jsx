import { Button, Typography } from "@material-tailwind/react";
import separador from "../../assets/separador.png";
import { Link } from "react-router-dom";

export default function SectionUltimasNoticias() {
  return (
    <div>
      <div className="flex flex-wrap flex-row items-center sm:justify-between mt-6 sm:my-0">
        <Typography variant="h4" color="green" className="px-5">
          Ultimas Noticias
        </Typography>
        <img src={separador} alt="" className="sm:h-32 rotate-180" />
      </div>
      <section className="flex flex-wrap justify-center xl:justify-between items-center text-center">
        {/* card 1 */}
        <div className="mb-4 lg:mb-0 flex flex-col justify-center items-center lg:w-80 p-2 rounded-xl">
          <div
            className="relative mb-4 sm:w-80 overflow-hidden rounded-md bg-cover bg-no-repeat shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
              className="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </a>
          </div>

          <Typography
            variant="lead"
            color="blue-gray"
            className="mb-3 text-lg font-bold"
          >
            Welcome to California
          </Typography>
          <Typography>
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </Typography>
        </div>
        {/* card 2 */}
        <div className="mb-4 lg:mb-0 flex flex-col justify-center items-center lg:w-80 p-2 rounded-xl">
          <div
            className="relative mb-4 sm:w-80 overflow-hidden rounded-md bg-cover bg-no-repeat shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
              className="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </a>
          </div>

          <Typography
            variant="lead"
            color="blue-gray"
            className="mb-3 text-lg font-bold"
          >
            Welcome to California
          </Typography>
          <Typography>
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </Typography>
        </div>
        {/* card 3 */}
        <div className="mb-4 lg:mb-0 flex flex-col justify-center items-center lg:w-80 p-2 rounded-xl">
          <div
            className="relative mb-4 sm:w-80 overflow-hidden rounded-md bg-cover bg-no-repeat shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
              className="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </a>
          </div>

          <Typography
            variant="lead"
            color="blue-gray"
            className="mb-3 text-lg font-bold"
          >
            Welcome to California
          </Typography>
          <Typography>
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </Typography>
        </div>
      </section>
      <div className="flex flex-wrap flex-row items-center sm:justify-between mt-4 sm:mt-0">
        <img src={separador} alt="" className="sm:h-32" />
        <Link to="/vosyelhospital/noticias">
          <Button
            variant="outlined"
            color="green"
            size="sm"
            className="flex items-center gap-2 rounded-full"
            link
            to
          >
            Ver más noticias{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}
