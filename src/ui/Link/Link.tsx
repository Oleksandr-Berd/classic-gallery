import { useLocation, useNavigate } from 'react-router-dom';
import * as SC from './LinkStyled'

const LinkBtn:React.FC = () => {
const navigate = useNavigate()
const location = useLocation()

const {pathname} = location


const handleNavigate = ():void => {
    if (pathname === "/slide") {
        navigate("/")
    } else {
    navigate("slide")

    }
}

    return ( <SC.LinkBtnStyled onClick={handleNavigate}>  {pathname === "/slide" ? "stop" : "start"} slideshow</SC.LinkBtnStyled> );
}
 
export default LinkBtn;