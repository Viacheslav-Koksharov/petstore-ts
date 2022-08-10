import { useState, useEffect} from 'react';
import {  useParams} from "react-router-dom";
import {TitleStyled } from './Description.styled';
import products from '../../mocks/data/products.json';
import { IProduct } from '../../interfaces/Product.interface';

const Description = () => {
  const { offersId } = useParams();
    const [description, setDescription] = useState<IProduct>();

 useEffect(() => {
    const currentItem = products.find(item => item.id === offersId);
    setDescription(currentItem);
  }, [offersId]);


  return (
    <TitleStyled>{description?.description}</TitleStyled>
  );
};
export default Description;
