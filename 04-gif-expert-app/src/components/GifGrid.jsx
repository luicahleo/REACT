import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
<<<<<<< HEAD
import { useFetchGifs } from "../hooks/useFetchGifs";
=======
>>>>>>> 0bf670b (gifapp2)
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  
  const {images, isLoading} = useFetchGifs(category);


  console.log({images, isLoading});




  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }
      

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />

<<<<<<< HEAD
=======
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
>>>>>>> 0bf670b (gifapp2)
        ))}
      </div>
    </>
  );
};
