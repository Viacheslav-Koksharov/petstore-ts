import { useContext } from "react";
import { useDispatch } from "react-redux";
import { placeOrder } from '../../redux/auth/auth-operations';
import { BasketContext } from "../../context/BasketContextProvider";
import { getTotal } from "../../helpers/getTotal";
import { MainStyled, button, CartTitle,LinkStyled} from "./CartView.styled";
import Cart from "../../components/Cart/Cart";
import Button from "../../components/Button";

const CartView = () => {
  const { basketItems } = useContext(BasketContext);
  const dispatch: any = useDispatch();

  const order = {
    items: basketItems,
    total: getTotal(basketItems)
  }

  return (
    <MainStyled>
      <CartTitle>Please Check Your Order!</CartTitle>
      <Cart main />
      <LinkStyled to={`/account`}>
     <Button style={button} onClick={() => dispatch(placeOrder(order))}>Check out order</Button></LinkStyled>
    </MainStyled>
  );
};

export default CartView;
