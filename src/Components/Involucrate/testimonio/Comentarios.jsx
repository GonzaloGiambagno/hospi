/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import Slider from "react-slick";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "No tengo nada más que palabras de agradecimiento, por el trato que me dió todo el personal; desde las mucamas, hasta los médicos. Ni hablar de las enfermeras!! Estuve internada por una complicación de vesícula y posterior cirugía. Gracias especiales al Dr. Chiarlo Ignacio y su equipo!!",
    author: "Lorena Méndez Sosa",
  },
  {
    quote:
      "Tengo la necesidad de expresar mi más profunda admiración por el Dr. Tejado, neurocirujano. Comprometido con sus pacientes, preocupado por quienes no tienen recursos, sensible, sencillo, humano. Profesionales como él hacen grande nuestra Patria. Gracias eternas al Dr. Eduardo Tejado y a su equipo (Dres. Matías y M. Paula, incluida la Srta. Paz)",
    author: "Mayra Garay",
  },
  {
    quote:
      "Recomendaría la atención que brinda el Hospital siempre organizado la gente que atiende los profesionales y la atención en la parte de internación excelente",
    author: "Maria Jose Rodriguez",
  },
  {
    quote:
      "A todo el Hospital simplemente GRACIAS!! por la paciencia,la dedicación y pasión por lo que hacen!!!..Luego de casi un mes de internación por una cirugía de columna,mi mama hoy se fue de alta.!! Agradecimiento al Dr Borri,dra Gaby Cabrera,todas las mucamas y enfermeros de todos los turnos!!!plantel de pisos, terapia intensiva,equipo de quirófano,todo el equipo de traumatología,Excelencia y calidez!!! Mil Gracias",
    author: "Agustina Lanfrit",
  },
  {
    quote:
      "Sólo palabras de agradecimiento, me salvaron la vida, sigo haciendo controles periódicamente. Desde los médicos, enfermeros, personal de limpieza solo GRACIAS!!!! Fue un momento tan duro levantarme cada mañana llorando y ellos estar ahí cuidándote y dando palabras de aliento.",
    author: "Dai Aquino",
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

const Comentarios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <section >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:px-48">
              <Typography className="mt-8 text-center flex justify-center">
                <BiSolidQuoteAltLeft
                  color="green"
                  size={32}
                  className="w-6 flex-shrink-0"
                />
                {testimonial.quote}
                <BiSolidQuoteAltRight
                  color="green"
                  size={32}
                  className="w-6 flex-shrink-0"
                />
              </Typography>
              <Typography className="text-center mt-6">
                <i> - {testimonial.author}</i>
              </Typography>
            </div>
          ))}
        </Slider>
    </section>
  );
};

export default Comentarios;
