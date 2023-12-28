import styled from "@emotion/styled";

type StyleProps = {
  openIcon: string;
};

export const CommonCon = styled.div`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ImageCon = styled.div`
  position: relative;
`;

export const ModalButton = styled.button<StyleProps>`
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

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    transform: translateX(16px) translateY(14px);

    content: url(${(props) => props.openIcon});
  }
`;
