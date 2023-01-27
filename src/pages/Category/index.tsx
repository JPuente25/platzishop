import React from 'react';
import { useParams } from 'react-router-dom';
import { ArticleContainer } from '../../containers/ArticleContainer';
import { MyOrders } from '../../containers/MyOrders';
import { Context } from '../../context/context';
import { StyledMain } from '../../styles/StyledMain';
import { useGetCategoryProducts } from '../../utils/hooks/useGetCategoryProducts';
import { UseContextProps } from '../../utils/hooks/useInitialState';
import { MyOrdersContainer } from '../Home/index.styled';

const Category = () => {
   const params = useParams();
   const categoryId = parseInt(params.id!);
   const { state } = React.useContext(Context) as UseContextProps;

   const { categoryProducts, loading } = useGetCategoryProducts(categoryId);
   // const error = categoryProducts?.name === 'AxiosError'; //CREATES ERROR MSG IF THERE IS ANY ERROR

   return (
      <StyledMain type='home'>
         {!state.error['XL8'] && <ArticleContainer products={categoryProducts} loading={loading}/>}
         {/* {error && <p>{categoryProducts.message}</p>} */}

         {state.orders && <MyOrdersContainer>
            <MyOrders/>
         </MyOrdersContainer>}
      </StyledMain>
   );
};

export { Category };