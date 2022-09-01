import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const ListStyled = styled.ul`
    height:150px;
    margin: 0 80px 0 0;
    font-size: 12px;
    text-align: right;
    line-height: 1.5;

@media screen and (min-width: ${main.tablet}px){
    font-size: 16px;
    }
`;

export { ListStyled };
