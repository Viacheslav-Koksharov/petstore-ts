import { MainStyled, button, CartTitle } from "./CartView.styled";
import Cart from "../../components/Cart/Cart";
import Button from "../../components/Button";

const CartView = () => {
  return (
    <MainStyled>
      <CartTitle>Please Check Your Order!</CartTitle>
      <Cart main />
      <Button style={button}>Check out order</Button>
    </MainStyled>
  );
};

export default CartView;
