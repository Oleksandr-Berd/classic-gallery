import styled from "@emotion/styled";

export const ImageListStyled = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 24px;
place-items: center;

padding-top: 24px;
padding-bottom: 24px;
padding-left: 24px;
padding-right: 24px;

`

export const ImageItem = styled.li`
position: relative;
`

export const ContentCon = styled.div`
position: absolute;
bottom: 0;
left: 0;

padding-bottom: 32px;
padding-left: 32px;
padding-right: 49px;
`

export const ImageName = styled.h3`
margin-bottom: 7px;

font-family: "BaskBold";
font-size: 24px;

color: #fff;
`

export const ArtistName = styled.h4`
font-family: "BaskReg";
font-size: 13px;

color:#7d7d7d;
`