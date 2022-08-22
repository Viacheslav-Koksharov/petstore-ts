import { useState, useEffect, useContext } from "react";
import {
  ListStyled,
  ItemStyled,
  LinkStyled,
  ImageContainerStyled,
  TextStyled,
  button,
} from "./ProductsList.styled";
import { IProduct } from "../../interfaces/Product.interface";
import { IProductsList } from "../../interfaces/ProductsList.interface";
import { ProductsContext } from "../../context/ProductsContextProvider";
import products from "../../mocks/data/products.json";
import Button from "../Button/Button";
import ScrollButton from "../ScrollTopButton";

const ProductsList = ({ cost }: IProductsList) => {
  const imagePerPage = 6;

  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>(products);
  const { filteredProducts } = useContext(ProductsContext);
  const [next, setNext] = useState(imagePerPage);

  // const r = require.context("../../images/", false, /\.(jpg)$/);
  // const imagesMap = Object.fromEntries(
  //   r.keys().map((key: any) => [key, r(key)])
  // );
  // console.log(imagesMap);

  useEffect(() => {
    setVisibleProducts(products);
  }, []);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setVisibleProducts(filteredProducts);
    }
  }, [filteredProducts]);

  const handleMoreImage = () => {
    setNext(next + imagePerPage);
    scrollTo();
  };

  const scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ListStyled>
        {visibleProducts?.slice(0, next)?.map(({ id, image, name, price }) => (
          <ItemStyled key={id}>
            <LinkStyled to={`/offers/${id}`}>
              <ImageContainerStyled>
                <img src={image} alt={name} />
              </ImageContainerStyled>
              <TextStyled>{name}</TextStyled>
              <TextStyled cost={cost}>{price}</TextStyled>
              <Button style={button} aria-label="add to cart">
                see more
              </Button>
            </LinkStyled>
          </ItemStyled>
        ))}
        {next < visibleProducts?.length && (
          <Button
            style={button}
            aria-label="load more"
            onClick={handleMoreImage}
          >
            Load more
          </Button>
        )}
      </ListStyled>

      <ScrollButton />
    </>
  );
};

export default ProductsList;
