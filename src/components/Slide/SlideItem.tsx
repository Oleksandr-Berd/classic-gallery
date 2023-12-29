
import * as SC from './SlideItemStyled'

import { ImageType } from "../../utils/types";
import modalOpen from '../../assets/images/modal_open.svg'
import { useState } from "react";
import SwitchSlide from '../SwitchSlide/SwitchSlide';
import ModalWin from '../ModalWin/ModalWin';
import { useMediaQuery } from 'usehooks-ts';

type Props = {
  slide: ImageType | React.ReactElement;
  switchSlide:any;
  idx:number;
};

const SlideItem: React.FC<Props> = ({ slide , switchSlide, idx}) => {
    const [isModal, setIsModal] = useState<boolean>(false)

    const isTablet = useMediaQuery("(min-width:768px)")
    const isDesktop = useMediaQuery("(min-width:1440px)")
    
    const handleModal = () => {
        setIsModal(!isModal)
    }

    if (typeof slide === "object") {
    const { description, artist, name, images, year, source } =
      slide as ImageType;

    return (
        <>
        {isDesktop ? 
        <SC.CommonCon isModal={isModal}>
            <SC.FlexCon>
        {isModal ? <ModalWin handleModal={handleModal} picture={images.gallery}/>  : null}
        <SC.ImageCon>
          <img src={isTablet ? images.hero.large : images.thumbnail} alt={name} />
          <SC.ModalButton openIcon={modalOpen} onClick={handleModal}>view image</SC.ModalButton>
          <SC.NameCon>
            <SC.Picture>{name}</SC.Picture>
            <SC.Artist>{artist.name}</SC.Artist>
          </SC.NameCon>
          <SC.ArtistImage src={artist.image} alt="artist" />
        </SC.ImageCon>
        <SC.ContentCon>
        <SC.Year>
          <h4>{year}</h4>
        </SC.Year>
          <p>{description}</p>
          <SC.SourceLink to={source} target="_blank" rel="noopener noreferrer">
          go to source
        </SC.SourceLink>
        </SC.ContentCon>
        </SC.FlexCon>
        

        <SwitchSlide name={name} artist={artist} switchSlide={switchSlide} idx={idx}/>
      </SC.CommonCon> :
      <SC.CommonCon isModal={isModal}>
      {isModal ? <ModalWin handleModal={handleModal} picture={images.gallery}/>  : null}
      <SC.ImageCon>
        <img src={isTablet ? images.hero.large : images.thumbnail} alt={name} />
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

      <SwitchSlide name={name} artist={artist} switchSlide={switchSlide} idx={idx}/>
    </SC.CommonCon>
      }
      </>

    );
  } else {
    return slide;
  }
};
export default SlideItem;
