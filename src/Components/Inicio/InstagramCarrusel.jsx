import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import './carrusel.css'
import { Button, Typography } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const InstagramCarrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: (
        <div>
          <div className="next-slick-arrow"> <AiFillRightCircle /> </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> <AiFillLeftCircle  /> </div>
        </div>
      ),
  };

  return (
    <div className="mx-auto max-w-screen-2xl mt-10">
        <div className="flex flex-wrap justify-between px-10">
        <Typography variant="h3" color="green">Ultimas Noticias</Typography>
        <Button
                size="sm"
                variant="gradient"
                color="green"
                className="flex items-center gap-2 rounded-full"
              >
                Ver mas noticias
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
        </Button>
        </div>
    <div className="containe mt-10">
      <Slider {...settings}>
        <div className="grid place-content-center bg-gray-100 rounded-xl">
          <h3 className="text-center py-20">1</h3>
        </div>
        <div className="grid place-content-center bg-gray-100 rounded-xl">
          <h3 className="text-center py-20">2</h3>
        </div>
        <div className="grid place-content-center bg-gray-100 rounded-xl">
          <h3 className="text-center py-20">3</h3>
        </div>
        <div className="grid place-content-center bg-gray-100 rounded-xl">
          <h3 className="text-center py-20">4</h3>
        </div>
        <div className="grid place-content-center bg-gray-100 rounded-xl">
          <h3 className="text-center py-20">5</h3>
        </div>
        <div className="grid place-content-center bg-gray-100 rounded-xl">
          <h3 className="text-center py-20">6</h3>
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default InstagramCarrusel;
