import React from "react";
import { ImageType } from "../../utils/types";

type ImagesListProps = {
  images: ImageType[] | null;
};

const ImagesList: React.FC<ImagesListProps> = ({ images }) => {
  return (
    <ul>
        {images ? images.map(({images, _id}) => <li key={_id}>
            <img src={images.thumbnail} alt="images" />
        </li>) : <></>}
    </ul>
  );
};

export default ImagesList;
