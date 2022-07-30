import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.p`
  font-size: 20px;
`;
const Button = styled.button`
margin-left:10px;
  padding: 3px 8px 3px 8px;
  cursor: pointer;

  font-weight: 400;
  font-size: 11px;

  border-radius: 5px;
  border: 1px solid rgb(206, 205, 205);
  background-color: #fff};
  &:hover {
    background-color: #5b97f6;
    transform: scale(1.1);
  }
`;

export { NavigationStyled, Text, Button };
