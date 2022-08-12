import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
  color: #708db3;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

const ButtonOut = styled.button`
  display: flex;
  padding: 10px;
  margin: 0 0 0 20px;
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;

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

const ModalTitle = styled.h2`
  margin: 0;
  color: #708db3;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

const ContainerButton = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;


export { NavigationStyled, ButtonCart, iconStyle, Text, ButtonOut, ModalTitle, ContainerCounter, ContainerButton, ItemsCounter };
