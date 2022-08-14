import { useState, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { login } from "../../redux/auth/auth-operations";
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
} from "./LoginView.styled";
import Button from "../../components/Button";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const dispatch: any = useDispatch();

  const makeValidation = (e: FocusEvent<HTMLInputElement>) => {
    return validate(e, _, setIsEmailValid, setIsPasswordValid);
  };

  const handleChange = (e: FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    switch (name) {
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

    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <MainStyled>
      <Form onSubmit={handleSubmit} autoComplete="off">
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
          Login
        </Button>
      </Form>
    </MainStyled>
  );
}

function _(test: boolean): void {
  throw new Error("Function not implemented.");
}
