import styled from "styled-components";

const CounterContainer = styled.fieldset`
  display:flex;
  padding: 10px;
  margin: 0 15px 0 0;
  max-width:150px;
  justify-content: center;
  align-items: baseline;
  border-color: rgb(187, 177, 223);
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
  margin-right: 10px;
  margin-left: 10px;
  font-size: 15px;
  text-align: center;`;
export { CounterContainer, CounterValue, ButtonCounter, LegendStyle };