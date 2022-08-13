import { useEffect, useContext } from "react";
import {
  ListStyled,
  ItemStyled,
  ImageContainerStyled,
  TextStyled,
  PriceStyled,
  ValueStyled,
  Button,
} from "./Cart.styled";
import { ICart } from "../../interfaces/Cart.interface";
import { IProduct } from "../../interfaces/Product.interface";
import { BasketContext } from "../../context/BasketContextProvider";
import Counter from "../Counter";

const Cart = ({ main }: ICart) => {
  const { basketItems, setBasketItems } = useContext(BasketContext);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);

  const basketItemsQuantity = (id: string) => {
    const item = basketItems.find((item) => item.id === id);
    return item?.quantity;
  };

  const deleteCartItem = (id: string) => {
    const updatetBasketItems = basketItems.filter((item) => item.id !== id);
    setBasketItems(updatetBasketItems);
  };

  const getTotal = (price: string, quantity: number | undefined) => {
    if (quantity) {
      return (Number(price.slice(1)) * quantity).toFixed(2);
    }
  };

  return (
    <ListStyled main={main}>
      {basketItems &&
        basketItems.map(({ id, image, name, price, quantity }: IProduct) => (
          <ItemStyled key={id} id={id}>
            <ImageContainerStyled main={main}>
              <img src={image} alt={name} />
            </ImageContainerStyled>
            <TextStyled main={main}>{name}</TextStyled>
            <Counter id={id} value={basketItemsQuantity(id)} />
            <PriceStyled main={main}>{price}</PriceStyled>
            <ValueStyled main={main}>${getTotal(price, quantity)}</ValueStyled>
            <Button id={id} onClick={() => deleteCartItem(id)}>
              Del
            </Button>
          </ItemStyled>
        ))}
    </ListStyled>
  );
};

export default Cart;
