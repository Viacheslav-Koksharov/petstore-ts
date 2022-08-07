import { IProduct } from './Product.interface';

interface IProductsContext {
    filteredProducts: IProduct[];
    setFilteredProducts: (filteredProducts: IProduct[]) => void;
  }

interface IProductsContextProps {
    children?: React.ReactNode;
}

export type { IProductsContext, IProductsContextProps };
