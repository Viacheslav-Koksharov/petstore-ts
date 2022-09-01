import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin: 0 0 0 20px;
  color: #708db3;
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: ${main.tablet}px) {
  margin: 0;
  font-size: 16px;
  text-transform: uppercase;
}
`;

const ButtonAccount = styled.button`
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  color: #708db3;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }
@media screen and (min-width: ${main.tablet}px) {
  width: 40px;
  height: 40px;
  margin: 0 0 0 20px;

}
`;

const ButtonCart = styled.button`
 position: relative;
  display: flex;
  padding: 0;
  margin: 0 0 0 5px;
  width: 30px;
  height: 30px;
  color: #708db3;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }

@media screen and (min-width: ${main.tablet}px) {
  width: 40px;
  height: 40px;
  margin: 0 0 0 20px;
}
`;

const LogOutButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;
  font-size:12px;
  color: white;
  background-color: #708db3;
  margin: 0 0 0 10px;

@media screen and (min-width: ${main.tablet}px){
  width: 120px;
  height: 40px;
  padding: 10px;
 margin: 0 0 0 20px;
}

&:hover {
    transform: scale(1.05);
  }
`;

const ContainerCounter = styled.div`
  position: absolute;
  top: -15%;
  right: -10%;
  width: 16px;
  height: 16px;
  line-height: 1;
  border-radius: 50%;
  padding: 0 4px;
  background: rgb(223 113 113 / 20%);
}`;

const ItemsCounter = styled.small`
  position: absolute;
  top:10%;
  left:30%;
  font-size: 80%;
  font-weight: 400;
`;


export { NavigationStyled, LinkStyled, ButtonAccount, ButtonCart, Text, LogOutButton, ContainerCounter, ItemsCounter };
