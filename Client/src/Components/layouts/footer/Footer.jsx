/* eslint-disable react/prop-types */
import { Typography, CardHeader } from "@material-tailwind/react";
import LogoFooter from "../../../assets/LogoFooter";
import { BsFillPinMapFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Certificaciones from "../../../assets/certificaciones.png";
import pdp from "../../../assets/pdp2013.jpg";
import datafiscal from "../../../assets/dataweb.jpg";
import SocialIconFacebook from "./SocialIconFacebook.jsx";
import SocialIconInstagram from "./SocialIconInstagram";
import SocialIconTwitter from "./SocialIconTwitter";

const items = [
  {
    descripcion: "Guardia y Urgencias",
    link: "http://localhost:5173/vosyelhospital/informacionUtil?tab=guardia",
  },
  {
    descripcion: "Horarios",
    link: "http://localhost:5173/vosyelhospital/informacionUtil?tab=horarios",
  },
  {
    descripcion: "Trámites y documentación",
    link: "http://localhost:5173/vosyelhospital/informacionUtil?tab=documentacion",
  },
  {
    descripcion: "Fundación Hospital",
    link: "https://fundacion.italianolaplata.org.ar/",
  },
  {
    descripcion: "Trabaja con nosotros",
    link: "https://italianolaplata.hiringroom.com/jobs",
  },
];

const currentYear = new Date().getFullYear();

const ContactoItem = ({ icon, text }) => (
  <div className="flex gap-2">
    {icon}
    <span className="select-all font-medium">{text}</span>
  </div>
);

const SocialLink = ({ icon, href }) => (
  <Typography
    as="a"
    aria-label="redes-sociales"
    href={href}
    className="opacity-80 transition-opacity hover:opacity-100"
    target="blank"
  >
    {icon}
  </Typography>
);

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full">
      <div className="mx-auto w-full max-w-screen-2xl mt-5 rounded-t-2xl">
        {/* <div className="flex justify-center"> */}
        <CardHeader
          variant="gradient"
          color="green"
          className="top-10 grid sm:h-20 max-w-screen-2xl items-center"
        >
          <div className="flex flex-wrap justify-around flex-col md:flex-row">
            <ContactoItem
              icon={<BsFillPinMapFill size={22} />}
              text="Av. 51 Nº 1725 e/ 29 y 30"
            />
            <ContactoItem
              icon={<BsFillTelephoneFill size={22} />}
              text="+54 221 512 9500"
            />
            <ContactoItem
              icon={<HiOutlineMail size={24} />}
              text="info@italianolaplata.org.ar"
            />
          </div>
        </CardHeader>
        {/* </div> */}
        <div className="grid grid-cols-1 justify-between p-4 pt-16 mt-2 items-center md:grid-cols-2 content-center border-t border-blue-gray-100">
          <div className="flex flex-col justify-center items-center gap-3 flex-wrap">
            <LogoFooter />
            <img src={Certificaciones} alt="certificaciones" />
          </div>
          <div className="grid mt-4 md:mt-0 sm:grid-cols-2 justify-center md:justify-between  md:gap-4">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium opacity-40"
              >
                Accesos Rápidos
              </Typography>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <Typography
                      as="a"
                      href={item.link}
                      color="gray"
                      className="py-1 font-normal opacity-80 transition-colors hover:text-green-700"
                    >
                      {item.descripcion}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img
                src={pdp}
                alt="pdp2023"
                className="w-20 h-16 md:w-28 md:h-24"
              />
              <img
                src={datafiscal}
                alt="data fiscal"
                className="w-16 h-20 md:w-24 md:h-28"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center border-t border-blue-gray-100 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://www.italianolaplata.org.ar/">
              Hospital Italiano La Plata
            </a>
            . All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <SocialLink
              icon={<SocialIconFacebook />}
              href="https://www.facebook.com/italianolaplata"
            />
            <SocialLink
              icon={<SocialIconTwitter />}
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fitalianolaplata"
            />
            <SocialLink
              icon={<SocialIconInstagram />}
              href="https://www.instagram.com/italianolaplata/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
