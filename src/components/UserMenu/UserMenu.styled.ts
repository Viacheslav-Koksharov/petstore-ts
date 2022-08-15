import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
  margin: 0;
  width: 150px;
  color: #708db3;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

const ButtonAccount = styled.button`
  position: relative;
  display: flex;
  padding: 0;
  margin: 0 0 0 10px;
  width: 40px;
  height: 40px;
  color: #708db3;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }
`;

const ButtonCart = styled.button`
  position: relative;
  display: flex;
  padding: 0;
  margin: 0 0 0 10px;
  width: 40px;
  height: 40px;
  color: #708db3;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }
`;

const iconStyle = {
  position: 'absolute',
  top: '20%',
  left: '15%',
  margin: '0',
  padding: '0',
  width: '25px',
  height: '25px',
  color: '#708db3'
}

const accStyle = {
  position: 'absolute',
  top: '20%',
  left: '20%',
  margin: '0',
  padding: '0',
  width: '25px',
  height: '25px',
  color: '#708db3'
}

const button = {
  width: '120px',
  height: '40px',
  padding: '10px',
  color: 'white',
  backgroundColor: '#bbb1df',
  margin: "0 0 0 20px"
}

const ContainerCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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


export { NavigationStyled, LinkStyled, ButtonAccount, accStyle, ButtonCart, iconStyle, Text, button, ContainerCounter, ItemsCounter };
