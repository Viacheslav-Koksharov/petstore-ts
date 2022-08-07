import { useState, createContext } from "react";
import { IProduct } from '../interfaces/Product.interface';
import { IProductsContext, IProductsContextProps } from '../interfaces/ProductContext.interface';

const productsContext = createContext<IProductsContext>({
  filteredProducts: [],
  setFilteredProducts: () => {}
});

const ProductsProvider = ({ children }: IProductsContextProps) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const sampleProductsContext: IProductsContext = {
    filteredProducts,
    setFilteredProducts
  };

  return <productsContext.Provider value={sampleProductsContext}>{children}</productsContext.Provider>;
};

export { productsContext, ProductsProvider };