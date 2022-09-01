import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const AsideStyled = styled.aside`
    width: 100%;
    padding: 0;
    color: #708db3;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);

    @media screen and (min-width: ${main.tablet}px){
     width: 30%;
    padding: 30px;
  }
`;

export { AsideStyled };