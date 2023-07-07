/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import InnIoma from "../../assets/carruselNoticias/Innauguracion_IOMA_banner_web.webp";
import añosHospi from "../../assets/carruselNoticias/136_Aniversario_banner_web.webp";
import portada from "../../assets/carruselNoticias/portada.webp";
import residencia from "../../assets/carruselNoticias/banner_web.webp";
import premio from "../../assets/carruselNoticias/premio_RSE_banner_web.webp";
import bannerpami from "../../assets/carruselNoticias/banner_pami.webp";
import convenioIoma from "../../assets/carruselNoticias/Convenio_IOMA_rrss_banner_web.webp";
import enfermeria from "../../assets/carruselNoticias/RRSS_Instituto_de_Enfermería-web.webp";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { Typography } from '@material-tailwind/react';
import './newsCarrusel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <AiFillLeftCircle className='prev-slick-arrow' />
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next " +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <AiFillRightCircle className='next-slick-arrow' />
  </button>
);

export default function NewsCarrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500, 
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Typography variant="h4" color="green" className="mb-5">Ultimas Noticias</Typography>
      <Slider {...settings} >
          <img src={portada} alt="image 1" className="slick-image md:rounded-xl" />
          <img src={añosHospi} alt="image 1" className="slick-image md:rounded-xl" />
          <img src={InnIoma} alt="image 2" className="slick-image md:rounded-xl" />
          <img src={residencia} alt="image 2" className="slick-image md:rounded-xl" />
          <img src={premio} alt="image 3" className="slick-image md:rounded-xl" />
          <img src={bannerpami} alt="image 3" className="slick-image md:rounded-xl" />
          <img src={convenioIoma} alt="image 3" className="slick-image md:rounded-xl" />
          <img src={enfermeria} alt="image 3" className="slick-image md:rounded-xl" />
      </Slider>
    </div>
  );
}