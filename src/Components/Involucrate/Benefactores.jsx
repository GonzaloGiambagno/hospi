/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import Slider from "react-slick";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacMedicina from "../../assets/benefactores/FAC._MEDICINA.png";
import CapitalChicha from "../../assets/benefactores/Logo_Capital_Chica.png";
import LaPlataRugby from "../../assets/benefactores/Logo_la_plata rugby.png";
import SanLuis from "../../assets/benefactores/sanLuis.png";
import Universitario from "../../assets/benefactores/universitarioLP.png";

const logos = [
  {
    logo: FacMedicina,
    nombre: "Facultad de Medicina"
  },
  {
    logo: CapitalChicha,
    nombre: "Club Capital Chica"
  },
  {
    logo: LaPlataRugby,
    nombre: "La Plata Rugby Club"
  },
  {
    logo: SanLuis,
    nombre: "Club San Luis"
  },
  {
    logo: Universitario,
    nombre: "Club Universitario de La Plata"
  },
];

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={"slick-prev" + (currentSlide === 0 ? " slick-disabled" : "")}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <AiFillLeftCircle className="prev-slick-arrow" />
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next " + (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <AiFillRightCircle className="next-slick-arrow" />
  </button>
);

const Benefactores = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <section className="pt-5 mb-4">
      <Slider {...settings}>
        {logos.map((logo,nombre, index) => (
          <div key={index} className="lg:px-6">
            <img
              src={logo.logo}
              alt={`Logo  de ${nombre} `}
              className="md:w-48 h-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Benefactores;
