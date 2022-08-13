import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  width: 100%;
  padding:20px;
  background-color: white;
`;

const Form = styled.form`
  width: 100%;
  max-width: 450px;
  margin: 0 auto 30px;
  padding: 40px 40px;
  border: 3px solid #f1f1f1;
`;

const Label = styled.label`
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 30px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 10px 12px 42px;
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: 1px solid rgb(206, 205, 205);

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  }
`;

const iconStyle = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  left: '10px',
  color: '#708db3'
}
const button = {
  width: '120px',
  height: '40px',
  padding: '10px',
  color: 'white',
  backgroundColor: '#bbb1df',
  margin: "0 120px"
}
export { MainStyled, button, Form, Label, Input, iconStyle, InputContainer };
