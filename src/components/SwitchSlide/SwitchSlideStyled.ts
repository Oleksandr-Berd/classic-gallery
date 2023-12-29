import styled from "@emotion/styled";
import { ProgressBar } from "react-bootstrap";

export const Scale = styled(ProgressBar)`
  width: calc(100% + 24px * 2);
  height: 1px;

  transform: translateX(-24px);

  background-color: #d8d8d8;

  &&& > div {
    background-color: #000;
  }

  @media (min-width: 768px){
  width: calc(100% + 40px * 2);

  transform: translateX(-40px);

  }
`;

export const CommonCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 17px;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    padding-top: 25px;
    padding-bottom: 24px;
  }
`;

export const Picture = styled.h5`
  margin-bottom: 9px;

  font-family: "BaskBold";
  font-size: 14px;

  color: #000;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Artist = styled.h6`
  font-family: "BaskReg";
  font-size: 10px;

  color: rgba(0, 0, 0, 0.75);

  @media (min-width: 768px) {
    font-size: 23px;
  }
`;

export const ButtonCon = styled.div`
  display: flex;
  flex-direction: row;

  & > button:first-of-type {
    margin-right: 23px;
  }

  & > * {
    background-color: transparent;
    fill: #000;

    border: none;
  }

  & > *:disabled svg {
    fill: #d8d8d8;
  }

  @media (min-width: 768px) {
    & > button:first-of-type {
      margin-right: 40px;
    }

    & svg {
      width: 25px;
      height: 24px;
    }
  }
`;
