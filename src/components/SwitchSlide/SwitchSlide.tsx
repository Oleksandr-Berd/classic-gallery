import * as SC from './SwitchSlideStyled'

import { ImageType } from "../../utils/types";

import switchRight from '../../assets/images/switch_right.svg'
import switchLeft from '../../assets/images/switch_left.svg'

const SwitchSlide:React.FC<Partial <ImageType>> = ({name, artist}) => {
    return ( 
    <>
    <SC.Scale></SC.Scale>
    <SC.CommonCon>
        <div>
            <SC.Picture>{name}</SC.Picture>
            <SC.Artist>{artist!.name}</SC.Artist>
        </div>
        <div>
            <button>
                <img src={switchLeft} alt="left" />
            </button>
            <button>
                <img src={switchRight} alt="right" />
            </button>
        </div>
    </SC.CommonCon>
    </>
     );
}
 
export default SwitchSlide;