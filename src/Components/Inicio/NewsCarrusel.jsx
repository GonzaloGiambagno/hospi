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
    <article className="mx-auto max-w-screen-2xl">
      <Typography variant="h4" color="green" className="mb-5">Ultimas Noticias</Typography>
      <Slider {...settings} >
          <img src={portada} alt="puerta hospital italiano" className="slick-image md:rounded-xl" />
          <img src={añosHospi} alt="cumple 136 años hospi " className="slick-image md:rounded-xl" />
          <img src={InnIoma} alt="Innauguracion centro traumatologico con ioma" className="slick-image md:rounded-xl" />
          <img src={residencia} alt="Residencia, inscripciones" className="slick-image md:rounded-xl" />
          <img src={premio} alt="premio responsabilidad social" className="slick-image md:rounded-xl" />
          <img src={bannerpami} alt="firma convenio con pami" className="slick-image md:rounded-xl" />
          <img src={convenioIoma} alt="convenio directo con IOMA" className="slick-image md:rounded-xl" />
          <img src={enfermeria} alt="Iscripciones escuela de enfermeria" className="slick-image md:rounded-xl" />
      </Slider>
    </article>
  );
}