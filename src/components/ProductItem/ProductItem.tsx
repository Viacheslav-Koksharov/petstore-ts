import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import {
  MainStyled,
  GoBackButton,
  ProductContainer,
  ImageContainerStyled,
  button,
  TextContainerStyled,
  TitleStyled,
  BrandStyle,
  List,
  LinkItem,
} from "./ProductItem.styled";
import products from "../../mocks/data/products.json";
import { IProduct } from "../../interfaces/Product.interface";
import { BasketContext } from "../../context/BasketContextProvider";
import Button from "../Button/Button";

const getInitialBasketState = () => {
  const cart = localStorage.getItem("basket");
  return cart ? JSON.parse(cart) : [];
};

const ProductItem = () => {
  const [product, setProduct] = useState<IProduct>();
  const [items, setItems] = useState<IProduct[]>(getInitialBasketState);
  const { setBasketItems } = useContext(BasketContext);
  const { offersId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cart = localStorage.getItem("basket");
    if (cart) {
      setItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
    setBasketItems(items);
  }, [items, setBasketItems]);

  useEffect(() => {
    const currentItem = products.find(({ id }) => id === offersId);
    setProduct(currentItem);
  }, [offersId]);

  function handleSubmit() {
    const itemIndex = items.findIndex(({ id }) => id === offersId);
    const item: IProduct | undefined = product;
    if (itemIndex < 0) {
      if (item) {
        item.quantity = 1;
      }
      // @ts-ignore
      setItems([...items, item]);
    } else {
      alert("Product is on the Basket");
    }
  }

  function handleClick() {
    navigate("/offers");
  }

  return (
    <>
      <MainStyled>
        <GoBackButton onClick={handleClick}> Go Back</GoBackButton>
        <ProductContainer>
          <ImageContainerStyled>
            <img src={product?.image} alt={product?.name} />
          </ImageContainerStyled>
          <TextContainerStyled>
            <TitleStyled>{product?.name}</TitleStyled>
            <TitleStyled>{product?.price}</TitleStyled>
            <BrandStyle>Manufacturer: {product?.manufacturer}</BrandStyle>
            <Button
              style={button}
              aria-label="add to cart"
              onClick={handleSubmit}
            >
              add to cart
            </Button>
            <List>
              <LinkItem to={"description"}>Description</LinkItem>
              <LinkItem to={"ingredients"}>Ingredients</LinkItem>
              <LinkItem to={"nutrients"}>Nutrients</LinkItem>
            </List>
            <Outlet />
          </TextContainerStyled>
        </ProductContainer>
      </MainStyled>
    </>
  );
};

export default ProductItem;
