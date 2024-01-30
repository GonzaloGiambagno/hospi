import { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
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
      className="md:rounded-xl mx-auto mt-2"
      autoplay={true}
      autoplayDelay={3500}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-gray-300" : "w-4 bg-gray-300/70"
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
