import { Form, Label, Input, Button } from "./LoginView.styled.js";

export default function LoginView() {
  
  return (
    <Form autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"         
          id="email"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"          
          id="password"
        />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
}
