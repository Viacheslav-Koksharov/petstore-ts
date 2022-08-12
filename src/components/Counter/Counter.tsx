import React, { useContext } from "react";
import {
  CounterContainer,
  CounterValue,
  ButtonCounter,
  LegendStyle,
} from "./Counter.styled";
import { ICounter } from "../../interfaces/Counter.interface";
import { BasketContext } from "../../context/BasketContextProvider";

const Counter = ({ step = 1, id, value }: ICounter) => {
  const { basketItems, setBasketItems } = useContext(BasketContext);

  function increment(e: React.MouseEvent) {
    // eslint-disable-next-line array-callback-return
    const updatedBasket = basketItems.map((item) => {
      if (item.id === e.currentTarget.id) {
        //@ts-ignore
        item.quantity += step;
      }
      return item;
    });
    setBasketItems(updatedBasket);
  }

  function decrement(e: React.MouseEvent) {
    // eslint-disable-next-line array-callback-return
    const updatedBasket = basketItems.map((item) => {
      //@ts-ignore
      if (item.id === e.currentTarget.id && item.quantity > 1) {
        //@ts-ignore
        item.quantity -= step;
      }
      return item;
    });
    setBasketItems(updatedBasket);
  }

  return (
    <CounterContainer id={id}>
      <LegendStyle>Quantity</LegendStyle>
      <ButtonCounter id={id} type="button" onClick={decrement}>
        -
      </ButtonCounter>
      <CounterValue>{value}</CounterValue>

      <ButtonCounter id={id} type="button" onClick={increment}>
        +
      </ButtonCounter>
    </CounterContainer>
  );
};

export default Counter;
