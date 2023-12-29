import React from "react";
import * as SC from "./ImageListStyled";
import { ImageType } from "../../utils/types";
import { useMediaQuery } from "usehooks-ts";

type ImagesListProps = {
  images: ImageType[] | null;
};

const ImagesList: React.FC<ImagesListProps> = ({ images }) => {
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px");
  const isMobile = useMediaQuery("(max-width:767px)");
const isDesktop = useMediaQuery("(min-width:1440px)")

  return (
    <SC.ImageListStyled>
      {isTablet && images ? (
        <div>
          {images
            .filter(({ images, _id, artist, name }, idx) => idx % 2 === 0)
            .map(({ images, _id, artist, name }, idx, arr) => (
              <SC.ImageItem
                key={_id}
                status={idx + 1 === arr.length ? "crutch" : null}
              >
                <img src={images.thumbnail} alt="images" />
                <SC.ContentCon>
                  <SC.ImageName>{name}</SC.ImageName>
                  <SC.ArtistName>{artist.name}</SC.ArtistName>
                </SC.ContentCon>
              </SC.ImageItem>
            ))}
        </div>
      ) : (
null      )}

      {isTablet && images ? (
        <div>
          {images
            .filter((el, idx, arr) => idx % 2 !== 0)
            .map(({ images, _id, artist, name }) => (
              <SC.ImageItem key={_id}>
                <img src={images.thumbnail} alt="images" />
                <SC.ContentCon>
                  <SC.ImageName>{name}</SC.ImageName>
                  <SC.ArtistName>{artist.name}</SC.ArtistName>
                </SC.ContentCon>
              </SC.ImageItem>
            ))}
        </div>
      ) : (
null      )}

      {isMobile  && images ? (
        images.map(({ images, _id, artist, name }) => (
          <SC.ImageItem key={_id}>
            <img src={images.thumbnail} alt="images" />
            <SC.ContentCon>
              <SC.ImageName>{name}</SC.ImageName>
              <SC.ArtistName>{artist.name}</SC.ArtistName>
            </SC.ContentCon>
          </SC.ImageItem>
        ))
      ) : isDesktop  && images ? (
        images.map(({ images, _id, artist, name }) => (
          <SC.ImageItem key={_id}>
            <img src={images.thumbnail} alt="images" />
            <SC.ContentCon>
              <SC.ImageName>{name}</SC.ImageName>
              <SC.ArtistName>{artist.name}</SC.ArtistName>
            </SC.ContentCon>
          </SC.ImageItem>
        ))
      ) : (
        null
      )}
    </SC.ImageListStyled>
  );
};

export default ImagesList;
