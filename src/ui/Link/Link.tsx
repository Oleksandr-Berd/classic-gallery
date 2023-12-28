import { useNavigate } from 'react-router-dom';
import * as SC from './LinkStyled'

const LinkBtn = () => {
const navigate = useNavigate()

const handleNavigate = ():void => navigate("slide")

    return ( <SC.LinkBtnStyled onClick={handleNavigate}>start slideshow</SC.LinkBtnStyled> );
}
 
export default LinkBtn;