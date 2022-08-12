import { useState, createContext } from "react";
import {
  IBasketContextProps,
  IBasketContext,
} from "../interfaces/BasketContext.interface";
import { IProduct } from "../interfaces/Product.interface";

const getInitialOrderState = () => {
  const cart = localStorage.getItem("basket");
  return cart ? JSON.parse(cart) : "";
};

const BasketContext = createContext<IBasketContext>({
  basketItems: [],
  setBasketItems: () => {},
});

const BasketProvider = ({ children }: IBasketContextProps) => {
  const [basketItems, setBasketItems] =
    useState<IProduct[]>(getInitialOrderState);

  const sampleBasketContext: IBasketContext = {
    basketItems,
    setBasketItems,
  };

  return (
    <BasketContext.Provider value={sampleBasketContext}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketProvider };
