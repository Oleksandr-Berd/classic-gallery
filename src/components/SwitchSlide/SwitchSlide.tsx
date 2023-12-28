import * as SC from './SwitchSlideStyled'

import { ImageType } from "../../utils/types";

import {ReactComponent as Left} from '../../assets/images/switch_left.svg'
import {ReactComponent as Right} from '../../assets/images/switch_right.svg'

import { useContext } from 'react';
import CollectionContext from '../../context/collectionContext';

type Props = {
    switchSlide:any;
    idx:number
}

const SwitchSlide:React.FC<Partial <ImageType> & Props> = ({name, artist, switchSlide, idx}) => {
const {collection} = useContext(CollectionContext)

const gradient =
((idx + 1) /
  collection!.length) *
100;

    return ( 
    <>
    <SC.Scale now={gradient}></SC.Scale>
    <SC.CommonCon>
        <div>
            <SC.Picture>{name}</SC.Picture>
            <SC.Artist>{artist!.name}</SC.Artist>
        </div>
        <SC.ButtonCon>
            <button onClick={switchSlide.prev} disabled={idx === 0}>
                <Left/>
            </button>
            <button onClick={switchSlide.next} disabled={idx + 1 === collection!.length}>
                <Right/>
            </button>
    </SC.ButtonCon>
    </SC.CommonCon>
    </>
     );
}
 
export default SwitchSlide;