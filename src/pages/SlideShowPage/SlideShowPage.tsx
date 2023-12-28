import { useContext, useState } from "react";

import CollectionContext from "../../context/collectionContext";
import Loader from "../../components/Loader/Loader";
import SlideItem from "../../components/Slide/SlideItem";

const SlideShowPage = () => {
  const { collection } = useContext(CollectionContext);
  const [idx, setIdx] = useState<number>(0);

  const switchSlide = {
    next: () => {
      if (idx + 1 !== collection!.length) {
        setIdx((prev) => prev + 1);
      } else {
        return;
      }
    },
    prev: () => {
      if (idx !== 0) {
        setIdx((prev) => prev - 1);
      } else {
        return;
      }
    },
  };

  const handleSlideItem = (idx: number) => {
    if (collection) return collection[idx];

    return <Loader />;
  };

  return (
    <section>
      <SlideItem slide={handleSlideItem(idx)} switchSlide={switchSlide} idx={idx}/>
    </section>
  );
};

export default SlideShowPage;
