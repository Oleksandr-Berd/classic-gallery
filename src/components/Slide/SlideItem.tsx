import { NavLink } from "react-router-dom";

import * as SC from './SlideItemStyled'

import { ImageType } from "../../utils/types";
import modalOpen from '../../assets/images/modal_open.svg'
import { useState } from "react";

type Props = {
  slide: ImageType | React.ReactElement;
};

const SlideItem: React.FC<Props> = ({ slide }) => {
    const [isModal, setIsModal] = useState<boolean>(false)

    const handleModal = () => {
        setIsModal(!isModal)
    }

    if (typeof slide === "object") {
    const { description, artist, name, images, year, source } =
      slide as ImageType;


console.log(isModal);

    return (
      <SC.CommonCon>
        <SC.ImageCon>
          <img src={images.thumbnail} alt={name} />
          <SC.ModalButton openIcon={modalOpen} onClick={handleModal}>view image</SC.ModalButton>
          <div>
            <h2>{name}</h2>
            <h3>{artist.name}</h3>
            <img src={artist.image} alt="artist" />
          </div>
        </SC.ImageCon>
        <div>
          <h4>{year}</h4>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <NavLink to={source} target="_blank" rel="noopener noreferrer">
          go to source
        </NavLink>
      </SC.CommonCon>
    );
  } else {
    return slide;
  }
};
export default SlideItem;
