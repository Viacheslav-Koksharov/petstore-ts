import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { register } from "../../redux/auth/auth-operations";
import {
  MainStyled,
  Form,
  Label,
  Input,
  iconStyle,
  InputContainer,
  button,
} from "./RegisterView.styled";
import Button from "../../components/Button";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: any = useDispatch();

  const handleChange = (e: any): void => {
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

  const handleSubmit = (e: any): void => {
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

        <InputContainer>
          <Input
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
            id="name"
          />
          <IconContext.Provider
            value={{ style: { ...iconStyle, position: "absolute" } }}
          >
            <FaUserAlt />
          </IconContext.Provider>
        </InputContainer>
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
          Register
        </Button>
      </Form>
    </MainStyled>
  );
}
