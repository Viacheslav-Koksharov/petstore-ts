import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const MainStyled = styled.main`
  width: 100%;
  padding:20px;
  background-color: white;
@media screen and (min-width: ${main.tablet}px){
  display: flex;
  }
`;

export { MainStyled };