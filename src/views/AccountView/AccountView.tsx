import { useState } from "react";
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

  return (
    <>
      <MainStyled>
        <TitleStyled>You've just placed your first order!</TitleStyled>
        {userOrders.items && (
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
        )}
        <TotalStyled>your purchase amount, ${userOrders.total}</TotalStyled>
      </MainStyled>
    </>
  );
};

export default AccountView;
