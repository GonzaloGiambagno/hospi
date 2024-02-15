/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../Service/api";

const CarouselContext = createContext();

export const useCarousel = () => {
  return useContext(CarouselContext);
};

export const CarouselProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiUrl = api.apiUrl;
    const carouselApiUrl = `${apiUrl}/carousel`;

    axios
      .get(carouselApiUrl)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes:", error);
      });
  }, []);

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  return (
    <CarouselContext.Provider value={{ images, updateImages }}>
      {children}
    </CarouselContext.Provider>
  );
};
