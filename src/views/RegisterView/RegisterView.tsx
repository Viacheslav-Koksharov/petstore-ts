import { Form, Label, Input, Button } from "./RegisterView.styled.js";

export default function RegisterView() {

  return (
    <Form     
      autoComplete="off"
    >
      <Label>
        Name
        <Input
          type="name"
          name="name"          
          id="name"
        />
      </Label>
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
      <Button type="submit">Register</Button>
    </Form>
  );
}
