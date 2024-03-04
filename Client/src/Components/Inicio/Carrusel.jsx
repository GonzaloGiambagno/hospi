import { useState, useEffect } from "react";
import { IconButton, Carousel } from "@material-tailwind/react";
import axios from "axios";
import api from "../../Service/api";

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
          className="!absolute top-2/4 left-4 -translate-y-2/4 text-2xl text-black/50 hover:bg-black/30 rounded-full"
        >
          {"<"}
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 text-2xl text-black/50 hover:bg-black/30 rounded-full"
        >
          {">"}
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black/40" : "w-4 bg-black/70"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.full_path}
          alt={image.description || `Image ${index}`}
          className="h-72 md:h-full w-full"
          loading="lazy"
        />
      ))}
    </Carousel>
  );
}
