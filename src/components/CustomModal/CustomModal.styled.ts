import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = styled.button`
  display: flex;
  padding: 10px;
  margin: 0 0 0 0;
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

const LinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;

  &.active {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
  }
`;

const customStyles = {
  overlay: {
    zIndex: "1999"
  },
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "900px",
    height: "450px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export { Button, ModalTitle, ContainerButton, customStyles, LinkStyled };