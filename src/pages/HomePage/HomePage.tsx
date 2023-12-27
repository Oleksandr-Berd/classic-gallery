import { useEffect, useState } from "react";
import { ImageType } from "../../utils/types";
import { getAll } from "../../services/helpers";
import ImagesList from "../../components/ImagesList/ImagesList";

const HomePage: React.FC = () => {
  const [images, setImages] = useState<ImageType[] | null>(null);

  const fetchImages = async () => {
    const result = await getAll();
    if (result) setImages(result);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <ImagesList images={images ? images : null} />
    </div>
  );
};

export default HomePage;
