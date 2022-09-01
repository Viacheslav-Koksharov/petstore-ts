import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const TextStyled = styled.div`
   height:150px;
    margin: 0 auto;
    font-size: 12px;
    text-align: center;
    line-height: 1.5;

@media screen and (min-width: ${main.tablet}px){
    font-size: 16px;
    }
`;

export { TextStyled };
