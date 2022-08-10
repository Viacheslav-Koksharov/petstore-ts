import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListStyled } from "./Nutrients.styled";
import products from "../../mocks/data/products.json";
import { IProduct } from "../../interfaces/Product.interface";

const Nutrients = () => {
  const { offersId } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [nutrients, setNutrients] = useState<[string, string][]>([]);

  useEffect(() => {
    const product = products.find(({ id }) => id === offersId);
    setProduct(product);
  }, [product, offersId]);

  useEffect(() => {
    const nutrients = product?.nutrients;
    if (nutrients) {
      const items: [string, string][] = Object.entries(nutrients);
      setNutrients(items);
    }
  }, [product]);

  return (
    <ListStyled>
      {nutrients &&
        nutrients.map(([key, value]) => (
          <li key={key}>{`${key} : ${value}`}</li>
        ))}
    </ListStyled>
  );
};
export default Nutrients;
