import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding:20px;
  background-color: white;
`;
const CartTitle = styled.h2`
  margin: 0 0 15px 0;
  color: #708db3;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

const button = {
  width: '150px',
  height: '40px',
  padding: '10px',
  color: 'white',
  backgroundColor: '#bbb1df',
  margin: "0 auto"
}
export { MainStyled, button, CartTitle };