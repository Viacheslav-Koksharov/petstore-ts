import { useRef, useEffect } from "react";
import { MainStyled } from "./OffersView.styled";
import { ProductsProvider } from "../../context/ProductsContextProvider";
import Sidebar from "../../components/Sidebar";
import ProductsList from "../../components/ProductsList";

const OffersView = () => {
  const topRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: -50, behavior: "smooth" });
    }
  }, []);

  return (
    <ProductsProvider>
      <MainStyled>
        <Sidebar offers />
        <ProductsList cost />
      </MainStyled>
    </ProductsProvider>
  );
};

export default OffersView;
