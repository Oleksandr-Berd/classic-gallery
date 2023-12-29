
import * as SC from './ModalWinStyled'

type Props = {
    picture:string,
    handleModal:()=>void
}

const ModalWin:React.FC<Props> = ({picture, handleModal}) => {
    return ( <SC.Overlay>
        <SC.CommonCon>
            <button onClick={handleModal}>close</button>
            <img src={picture} alt="gallery" />
        </SC.CommonCon>
    </SC.Overlay> );
}
 
export default ModalWin;