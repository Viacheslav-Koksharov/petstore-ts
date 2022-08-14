import { useState, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { register } from "../../redux/auth/auth-operations";
import { validate } from "../../helpers/validation";
import {
  MainStyled,
  Form,
  ItemContainer,
  Label,
  LabelText,
  Input,
  ErrorText,
  iconStyle,
  InputContainer,
  button,
} from "./RegisterView.styled";
import Button from "../../components/Button";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const dispatch: any = useDispatch();

  const makeValidation = (e: FocusEvent<HTMLInputElement>) => {
    return validate(e, setIsNameValid, setIsEmailValid, setIsPasswordValid);
  };

  const handleChange = (e: FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <MainStyled>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label> Name</Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type="name"
              name="name"
              value={name}
              onBlur={makeValidation}
              onChange={handleChange}
              id="name"
              placeholder="example: John Wick"
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: "absolute" } }}
            >
              <FaUserAlt />
            </IconContext.Provider>
          </InputContainer>
          {!isNameValid && (
            <ErrorText>* name is not valid. example: John Wick</ErrorText>
          )}
        </ItemContainer>
        <Label>Email</Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type="email"
              name="email"
              value={email}
              onBlur={makeValidation}
              onChange={handleChange}
              id="email"
              placeholder="example@mail.com"
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: "absolute" } }}
            >
              <AiTwotoneMail />
            </IconContext.Provider>
          </InputContainer>
          {!isEmailValid && <ErrorText>* email is not valid</ErrorText>}
        </ItemContainer>
        <Label>
          Password<LabelText>Must have at least 7 characters</LabelText>
        </Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type="password"
              name="password"
              value={password}
              onBlur={makeValidation}
              onChange={handleChange}
              id="password"
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: "absolute" } }}
            >
              <FaPaw />
            </IconContext.Provider>
          </InputContainer>
          {!isPasswordValid && (
            <ErrorText>* must have at least 7 characters</ErrorText>
          )}
        </ItemContainer>
        <Button style={button} type="submit">
          Register
        </Button>
      </Form>
    </MainStyled>
  );
}
