import styled from "styled-components";

const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input`
  display: flex;
  height: 25px;
  margin-bottom: 10px;

  font-weight: 400;
  font-size: 13px;

  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(206, 205, 205);
  &:hover {
    border: 4px solid #99c2f8;
  }
`;
const Button = styled.button`
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
export { Form, Label, Input, Button };
