import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
`;

const Text = styled.p`
  margin-bottom: 10px;
    color: #708db3;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
`;

const Button = styled.button`
  display: flex;
  padding: 10px;
  margin: 0 0 0 10px;
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }
`;

export { NavigationStyled, Text, Button };
