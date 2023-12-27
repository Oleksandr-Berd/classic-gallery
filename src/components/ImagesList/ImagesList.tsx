import React from "react";

import * as SC from './ImageListStyled'

import { ImageType } from "../../utils/types";

type ImagesListProps = {
  images: ImageType[] | null;
};

const ImagesList: React.FC<ImagesListProps> = ({ images }) => {
  return (
    <SC.ImageListStyled>
        {images ? images.map(({images, _id, artist, name}) => <SC.ImageItem key={_id}>
            <img src={images.thumbnail} alt="images" />
            <SC.ContentCon>
                <SC.ImageName>{name}</SC.ImageName>
                <SC.ArtistName>{artist.name}</SC.ArtistName>
            </SC.ContentCon>
        </SC.ImageItem>) : <></>}
    </SC.ImageListStyled>
  );
};

export default ImagesList;
