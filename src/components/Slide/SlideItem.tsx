
import * as SC from './SlideItemStyled'

import { ImageType } from "../../utils/types";
import modalOpen from '../../assets/images/modal_open.svg'
import { useState } from "react";
import SwitchSlide from '../SwitchSlide/SwitchSlide';

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
          <SC.NameCon>
            <SC.Picture>{name}</SC.Picture>
            <SC.Artist>{artist.name}</SC.Artist>
            <img src={artist.image} alt="artist" />
          </SC.NameCon>
        </SC.ImageCon>
        <SC.ContentCon>
        <SC.Year>
          <h4>{year}</h4>
        </SC.Year>
          <p>{description}</p>
        </SC.ContentCon>
        <SC.SourceLink to={source} target="_blank" rel="noopener noreferrer">
          go to source
        </SC.SourceLink>

        <SwitchSlide name={name} artist={artist}/>
      </SC.CommonCon>
    );
  } else {
    return slide;
  }
};
export default SlideItem;
