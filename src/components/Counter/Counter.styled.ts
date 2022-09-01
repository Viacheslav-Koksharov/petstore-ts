import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const CounterContainer = styled.fieldset`
display:flex;
  padding: 5px;
  margin: 0 5px 0 0;
 
  justify-content: center;
  align-items: baseline;
  border-color: rgb(187, 177, 223);

@media screen and (min-width: ${main.tablet}px){
  padding: 10px;
  margin: 0 15px 0 0;
  max-width:150px;
}
`;

const LegendStyle = styled.legend`
font-size: 10px;
`;

const ButtonCounter = styled.button`
padding: 5px;
  margin: 0;
  color: #708db3;
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }`;

const CounterValue = styled.span`
margin-right: 4px;
  margin-left: 4px;
  font-size: 15px;
  text-align: center;

  @media screen and (min-width: ${main.tablet}px){
  margin-right: 10px;
  margin-left: 10px;
  font-size: 15px;
}
  `;

export { CounterContainer, CounterValue, ButtonCounter, LegendStyle };