import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 5;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 24px;
  padding-right: 24px;

  background: rgba(0, 0, 0, 0.9);
`;

export const CommonCon = styled.div`
  text-align: right;

  & > img {
    width: 100%;
    height: 100%;
  }

  & > button{
    margin-bottom: 33px;

    text-transform: uppercase;

    font-family: "BaskBold";
    font-size: 14px;
    line-height: 3px;

    background-color: transparent;
    color: #fff;
    
    border: none;
  }
`;
