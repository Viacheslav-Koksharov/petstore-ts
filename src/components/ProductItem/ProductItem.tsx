import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import Button from "../Button/Button";
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

const ProductItem = () => {
  const { offersId } = useParams();
  const [product, setProduct] = useState<IProduct>();

  let navigate = useNavigate();
  function handleClick() {
    navigate("/offers");
  }

  useEffect(() => {
    const currentItem = products.find((item) => item.id === offersId);
    setProduct(currentItem);
  }, [offersId]);

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
            <Button style={button} aria-label="add to cart">
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
