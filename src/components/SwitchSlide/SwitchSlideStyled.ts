import styled from "@emotion/styled";

export const Scale = styled.div`
width: calc(100% + 24px * 2);
height: 1px;

transform: translateX(-24px);

background-color: #e5e5e5;
`

export const CommonCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 17px;
padding-bottom: 16px;
`

export const Picture = styled.h5`
margin-bottom: 9px;

font-family: "BaskBold";
font-size: 14px;

color: #000;
`

export const Artist = styled.h6`
font-family: "BaskReg";
font-size: 10px;

color: rgba(0, 0, 0, 0.75);
`