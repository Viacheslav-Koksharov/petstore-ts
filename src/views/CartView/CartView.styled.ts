import styled from "styled-components";

const MainStyled = styled.main`
  display: block;
  width: 100%;
  padding:20px;
  background-color: white;
`;
const Button = styled.button`
  display: flex;
  padding: 10px;
  margin: 0 auto;
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
export { MainStyled, Button };