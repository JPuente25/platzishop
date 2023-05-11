import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { CardSkeleton } from '../../components/skeletons/CardSkeleton';
import { Context } from '../../context/context';
import { StyledMain } from '../../styles/StyledMain';
import { useGetProductById } from '../../utils/hooks/useGetProductById';
import { UseContextProps } from '../../utils/hooks/useInitialState';

const Article = () => {
   const { state } = React.useContext(Context) as UseContextProps;
   const params = useParams();
   const { product, loading } = useGetProductById(parseInt(params.id!));

   return (
      <StyledMain type='article'>
         {loading && <CardSkeleton type='fullview' />}
         {!state.error['XL8'] && !loading && <Card type='fullview' article={product!}/>}
         {state.error['XL8'] && <Navigate to='/' />}
      </StyledMain>
   );
};

export { Article };