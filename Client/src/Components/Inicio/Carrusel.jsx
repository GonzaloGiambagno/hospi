import { useState, useEffect } from "react";
import {
  IconButton,
  Carousel,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import api from "../../Service/api";
import { Link } from "react-router-dom";
export default function Carrusel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiUrl = api.apiUrl;
    const carouselApiUrl = `${apiUrl}/carousel`;

    axios
      .get(carouselApiUrl)
      .then((response) => {
        setImages(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes:", error);
      });
  }, []);

  return (
    <Carousel
      className="md:rounded-xl mx-auto mt-2 shadow-xl"
      autoplay={true}
      autoplayDelay={3500}
      loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 text-2xl text-black/50 hover:bg-gray-400/50 rounded-full"
        >
          {"<"}
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 text-2xl text-black/50 hover:bg-gray-400/50 rounded-full"
        >
          {">"}
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-gray-400/40" : "w-4 bg-gray-300/70"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <figure className="relative h-full w-full" key={index}>
          <img
            src={image.full_path}
            alt={image.description || `Image ${index}`}
            className="h-72 md:h-full w-full"
            loading="lazy"
          />
          <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl bg-gray-300/60 py-2 px-4 shadow-lg shadow-black/5  backdrop-blur-sm items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                {image.title}
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                {image.description}
              </Typography>
            </div>
            <Link to="/vosyelhospital/noticias">
              <Button
                color="green"
                variant="gradient"
                size="md"
                className="rounded-full"
              >
                Ver mas noticias
              </Button>
            </Link>
          </figcaption>
        </figure>
      ))}
    </Carousel>
  );
}
