import { useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  ListStyled,
  ItemStyled,
  ImageContainerStyled,
  TextStyled,
  PriceStyled,
  ValueStyled,
  ButtonStyled,
  TotalStyled,
  iconStyle,
} from "./Cart.styled";
import { ICart } from "../../interfaces/Cart.interface";
import { IProduct } from "../../interfaces/Product.interface";
import { BasketContext } from "../../context/BasketContextProvider";
import { getTotal } from "../../helpers/getTotal";
import Counter from "../Counter";

const Cart = ({ main }: ICart) => {
  const { basketItems, setBasketItems } = useContext(BasketContext);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);

  const getQuantity = (id: string) => {
    const item = basketItems.find((item) => item.id === id);
    return item?.quantity;
  };

  const deleteItem = (id: string) => {
    const updatedBasketItems = basketItems.filter((item) => item.id !== id);
    setBasketItems(updatedBasketItems);
  };

  const getCost = (price: string, quantity: number | undefined) => {
    if (quantity) {
      return (Number(price.slice(1)) * quantity).toFixed(2);
    }
  };

  return (
    <>
      {basketItems && (
        <ListStyled main={main}>
          {basketItems.map(({ id, image, name, price, quantity }: IProduct) => (
            <ItemStyled key={id} id={id}>
              <ImageContainerStyled main={main}>
                <img src={image} alt={name} />
              </ImageContainerStyled>
              <TextStyled main={main}>{name}</TextStyled>
              <Counter id={id} value={getQuantity(id)} />
              <PriceStyled main={main}>{price}</PriceStyled>
              <ValueStyled main={main}>${getCost(price, quantity)}</ValueStyled>
              <ButtonStyled id={id} onClick={() => deleteItem(id)}>
                <IconContext.Provider value={{ style: iconStyle }}>
                  <RiDeleteBin6Line />
                </IconContext.Provider>
              </ButtonStyled>
            </ItemStyled>
          ))}
        </ListStyled>
      )}
      {basketItems && (
        <TotalStyled>
          your purchase amount, ${getTotal(basketItems).toFixed(2)}
        </TotalStyled>
      )}
    </>
  );
};

export default Cart;
