import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const MainStyled = styled.main`
  padding:5px;
  background-color: white;

@media screen and (min-width: ${main.tablet}px) {
  padding:20px;
 }
`;

const Form = styled.form`
width: 100%;
  margin: 0 auto 20px;
  padding: 10px 10px;
  border: 3px solid #f1f1f1;

@media screen and (min-width: ${main.tablet}px) {
  width: 100%;
  max-width: 450px;
  margin: 0 auto 30px;
  padding: 40px 40px;
  border: 3px solid #f1f1f1;
}
`;

const ItemContainer = styled.div`
  margin: 10px 0 0 0;
  height: 80px;
`;

const Label = styled.label`
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
`;

const LabelText = styled.p`
  font-size: 10px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  heigth: 60px;
  margin: 0 0 5px 0;
`;

const Input = styled.input`

  padding: 12px 10px 12px 42px;
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: 1px solid rgb(206, 205, 205);

  &::placeholder{
    font-size: 15px;
  font-weight: 400;
    color: rgb(206, 205, 205);
  }

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  }
@media screen and (min-width: ${main.tablet}px) {
  width: 100%;
}
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;

const iconStyle = {
  width: '30px',
  height: '30px',
  left: '10px',
  color: '#708db3'
}

const button = {
  width: '120px',
  height: '40px',
  padding: '10px',
  color: 'white',
  backgroundColor: '#bbb1df',
  marginLeft: "calc((100% - 120px) /2)",

}
export { MainStyled, button, Form, ItemContainer, Label, LabelText, Input, ErrorText, iconStyle, InputContainer };
