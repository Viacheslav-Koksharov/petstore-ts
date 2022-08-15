import { useState, useRef, useEffect } from "react";
import {
  TitleStyled,
  MainStyled,
  ListStyled,
  ItemStyled,
  ImageContainerStyled,
  TotalStyled,
} from "./AccountView.styled";
import { IOrder } from "../../redux/interfaces/Order.interface";

const getInitialBasketState = () => {
  const orders = localStorage.getItem("orders");
  return orders ? JSON.parse(orders) : [];
};

const AccountView = () => {
  const [userOrders] = useState<IOrder>(getInitialBasketState);
  const topRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: -50, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <MainStyled ref={topRef}>
        {userOrders.items ? (
          <>
            <TitleStyled>You've just placed your first order!</TitleStyled>
            <ListStyled>
              {userOrders.items.map((item) => (
                <ItemStyled key={item.id}>
                  <ImageContainerStyled>
                    <img src={item.image} alt={item.name} />
                  </ImageContainerStyled>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </ItemStyled>
              ))}
            </ListStyled>
            <TotalStyled>your purchase amount, ${userOrders.total}</TotalStyled>
          </>
        ) : (
          <TitleStyled>You have no any order placed yet...</TitleStyled>
        )}
      </MainStyled>
    </>
  );
};

export default AccountView;
