import Cart from "../../components/Cart/Cart";
import { MainStyled, Button } from "./CartView.styled";

const CartView = () => {
  return (
    <MainStyled>
      <Cart main />
      <Button>Check out order</Button>
    </MainStyled>
  );
};

export default CartView;
