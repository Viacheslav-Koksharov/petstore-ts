import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextStyled } from "./Ingredients.styled";
import products from "../../mocks/data/products.json";
import { IProduct } from "../../interfaces/Product.interface";

const Ingredients = () => {
  const { offersId } = useParams();
  const [ingredients, setIngredients] = useState<IProduct>();

  useEffect(() => {
    const currentItem = products.find((item) => item.id === offersId);
    setIngredients(currentItem);
  }, [offersId]);

  return <TextStyled>{ingredients?.ingredients}</TextStyled>;
};

export default Ingredients;
