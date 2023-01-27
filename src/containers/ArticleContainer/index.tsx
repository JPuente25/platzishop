import React from 'react';
import { Card } from '../../components/Card';
import { CardSkeleton } from '../../components/skeletons/CardSkeleton';
import { ProductsProps } from '../../types';
import { GridContainer } from './index.styled';

interface Props {
   products: ProductsProps[] | null
   loading: boolean
}

const ArticleContainer = ({products, loading}: Props) => {
   const skeletonProducts: undefined[] = new Array(20).fill(undefined); //CREATES 20 ITEMS FOR LOADING SKELETONS
   return (
      <GridContainer>
         {!loading
            ? products!.map((article) => 
            <Card 
               key={article.id} 
               article={article}
               type='card'
            />)
            : skeletonProducts.map((e, i) => <CardSkeleton key={i} type='card' />)}
      </GridContainer>
   );
};

export { ArticleContainer };