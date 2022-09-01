import styled from "styled-components";
import { NavLink } from "react-router-dom";

const button = {
  padding: '10px',
  color: 'white',
  backgroundColor: '#bbb1df',
}

const ModalTitle = styled.h2`
  margin: 0 0 15px 0;
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
  font-weight: 700;
  text-decoration: none;
`;

const customStyles = {
  overlay: {
    background: "rgba(47, 48, 58, 0.8)",
    zIndex: "1999"
  },
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "90%",
    height: "70%",
    padding: "5px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export { button, ModalTitle, ContainerButton, customStyles, LinkStyled };