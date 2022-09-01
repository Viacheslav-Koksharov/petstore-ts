import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const ContainerStyled = styled.div`
    display: flex;
    padding: 3px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    background-image: linear-gradient(120deg,#a6c0fe,#f68084);
`;

const TextStyled = styled.p`
    margin: 0;
    color: white;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

@media screen and (min-width: ${main.tablet}px){
    font-size: 18px;
    font-weight: 700;}
`;

export { ContainerStyled, TextStyled }