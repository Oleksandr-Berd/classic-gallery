import * as SC from "./HeaderStyled";

import Logo from "../../components/Logo/Logo";
import LinkBtn from "../../ui/Link/Link";

const Header = () => {
  return (
    <SC.HeaderStyled>
      <Logo />
      <LinkBtn />
    </SC.HeaderStyled>
  );
};

export default Header;
