import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { login } from "../../redux/auth/auth-operations";
import {
  MainStyled,
  Form,
  Label,
  Input,
  iconStyle,
  InputContainer,
  button,
} from "./LoginView.styled";
import Button from "../../components/Button";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: any = useDispatch();

  const handleChange = (e: any): void => {
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

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <MainStyled>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>Email</Label>
        <InputContainer>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="email"
          />
          <IconContext.Provider
            value={{ style: { ...iconStyle, position: "absolute" } }}
          >
            <AiTwotoneMail />
          </IconContext.Provider>
        </InputContainer>
        <Label>Password</Label>
        <InputContainer>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="password"
          />
          <IconContext.Provider
            value={{ style: { ...iconStyle, position: "absolute" } }}
          >
            <FaPaw />
          </IconContext.Provider>
        </InputContainer>
        <Button style={button} type="submit">
          Login
        </Button>
      </Form>
    </MainStyled>
  );
}
