import styled from "@emotion/styled";

type StyleProps = {
  status?: string | null;
};

export const ImageListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  place-items: start;

  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    padding-top: 40px;
    padding-bottom: 0px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1440px){
  grid-template-columns: repeat(auto-fill, minmax(310px, 4fr));
  


  }
`;

export const ImageItem = styled.li<StyleProps>`
  position: relative;

  transform: ${(props) =>
    props.status === "crutch" &&
    "translateX(calc(100% + 40px)) translateY(calc(-100% - 40px))"};

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    display: inline-block;
    content: " ";
    width: 100%;
    min-height: 100%;
    background: linear-gradient(transparent 50%, #000);
  }

  @media (min-width: 1440px){
    & > img{
        height: 100%;
    }
  }
`;

export const ContentCon = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 49px;
`;

export const ImageName = styled.h3`
  margin-bottom: 7px;

  font-family: "BaskBold";
  font-size: 24px;

  color: #fff;
`;

export const ArtistName = styled.h4`
  font-family: "BaskReg";
  font-size: 13px;

  color: #7d7d7d;
`;
