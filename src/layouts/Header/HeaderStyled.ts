import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 24px;
padding-bottom: 24px;
padding-left: 24px;
padding-right: 24px;

border-bottom: 1px solid #d8d8d8;

@media (min-width: 768px){
    padding-top: 29px;
    padding-bottom: 27px;
    padding-left: 40px;
    padding-right: 40px;
}
`