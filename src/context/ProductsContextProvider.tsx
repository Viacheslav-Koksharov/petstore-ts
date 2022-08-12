import { useState, createContext } from "react";
import { IProduct } from "../interfaces/Product.interface";
import {
  IProductsContext,
  IProductsContextProps,
} from "../interfaces/ProductContext.interface";

const ProductsContext = createContext<IProductsContext>({
  filteredProducts: [],
  setFilteredProducts: () => {},
});

const ProductsProvider = ({ children }: IProductsContextProps) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const sampleProductsContext: IProductsContext = {
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <ProductsContext.Provider value={sampleProductsContext}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
