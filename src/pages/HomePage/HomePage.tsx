import { useContext, useEffect, useState } from "react";
import { ImageType } from "../../utils/types";
import { getAll } from "../../services/helpers";
import ImagesList from "../../components/ImagesList/ImagesList";
import CollectionContext from "../../context/collectionContext";

const HomePage: React.FC = () => {
  const [images, setImages] = useState<ImageType[] | null>(null);
  const {getCollection} = useContext(CollectionContext)

  const fetchImages = async () => {
    const result = await getAll();
    if (result) setImages(result);
  };



  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (images) {
      getCollection(images);
    }
  }, [getCollection, images]);

  return (
    <section>
      <ImagesList images={images ? images : null} />
    </section>
  );
};

export default HomePage;
