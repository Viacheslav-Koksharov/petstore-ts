import styled from 'styled-components';
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const Button = styled.div`
   position: fixed;
   width: 50%;
   left: 90%;
   bottom: 50px;
   height: 48px;
   font-size: 2rem;
   z-index: 1;
   cursor: pointer;
   color: #bbb1df;

   @media screen and (min-width: ${main.tablet}px){
   width: 100%;
   left: 96%;
   bottom: 110px;
   font-size: 3rem;
   }
   `;

export { Button };