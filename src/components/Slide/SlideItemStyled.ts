import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

type StyleProps = {
  openIcon: string;
  isModal: boolean;
};

export const CommonCon = styled.div<Partial<StyleProps>>`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const ImageCon = styled.div`
  position: relative;

  margin-bottom: 172px;

  @media (min-width: 768px) {
    & > img:first-of-type {
      width: 475px;
      height: 560px;
    }
  }
`;

export const ModalButton = styled.button<Partial<StyleProps>>`
  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(16px) translateY(16px);

  padding-top: 14px;
  padding-bottom: 13px;
  padding-left: 42px;
  padding-right: 16px;

  text-transform: uppercase;

  font-family: "BaskBold";
  font-size: 10px;
  letter-spacing: 2.14px;

  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;

  border: none;

  @media (min-width: 768px) {
    top: auto;
    bottom: 0;

    transform: translateX(16px) translateY(-16px);
  }

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    transform: translateX(16px) translateY(14px);

    content: url(${(props) => props.openIcon});
  }
`;
export const NameCon = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  transform: translateY(118px);

  width: 232px;

  padding-top: 24px;
  padding-left: 24px;

  background-color: #f2f2f2;

  @media (min-width: 768px) {
    top: 0;
    bottom: auto;

    transform: translateX(243px) translateY(0);

    width: 445px;

    display: inline-block;

    padding-top: 0;
    padding-left: 65px;
    padding-right: 110px;
  }

  & > img {
    transform: translateX(-8px);

    width: 64px;
    height: 64px;
  }

  @media (min-width: 768px) {
    & > img {
      position: absolute;

      bottom: 0;
      right: 0;

      transform: translateX(-30px) translateY(100%);

      width: 128px;
      height: 128px;
    }
  }
`;

export const Picture = styled.h2`
  margin-bottom: 8px;

  font-family: "BaskBold";
  font-size: 24px;
  line-height: 1.21;

  color: #000;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.14;
  }
`;

export const Artist = styled.h3`
  margin-bottom: 24px;

  font-family: "BaskReg";
  font-size: 15px;

  color: #7d7d7d;

  @media (min-width: 768px) {
    margin-bottom: 67px;
  }
`;

export const ContentCon = styled.div`
  position: relative;

  margin-bottom: 68px;

  & > p {
    position: relative;
    z-index: 3;

    font-family: "BaskBold";
    font-size: 14px;
    line-height: 2;

    color: #7d7d7d;
  }
`;

export const Year = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  z-index: 2;

  transform: translateY(-86px);

  text-align: right;

  font-family: "BaskBold";
  font-size: 100px;

  color: #e5e5e5;
`;

export const SourceLink = styled(NavLink)`
  display: inline-block;

  margin-bottom: 67px;

  text-transform: uppercase;
  text-decoration: underline;

  font-family: "BaskBold";
  font-size: 9px;
  letter-spacing: 1.93px;

  color: #7d7d7d;
`;
