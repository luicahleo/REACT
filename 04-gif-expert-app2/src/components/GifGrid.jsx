import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="card-grid">
        {isLoading && <h3>Cargando...</h3>}

        {images.map((images) => (
          <GifItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
