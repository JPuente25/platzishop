import React from 'react';
import { ArticleContainer } from '../../containers/ArticleContainer';
import { MyOrders } from '../../containers/MyOrders';
import { Context } from '../../context/context';
import { StyledMain } from '../../styles/StyledMain';
import { useGetProducts } from '../../utils/hooks/useGetProducts';
import { UseContextProps } from '../../utils/hooks/useInitialState';
import { MyOrdersContainer } from './index.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
   const { state, removeError } = React.useContext(Context) as UseContextProps;
   const { products, loading } = useGetProducts();

   const notify404Warning = (msg: string) => {
      toast.error(msg, {
         autoClose: 2000
      })
      removeError('XL8');
   }

   if (state.error['XL8']) notify404Warning(state.error['XL8']);

   return (
      <StyledMain type='home'>
         <ToastContainer />
         
         <ArticleContainer products={products} loading={loading}/> 

         {state.orders && <MyOrdersContainer>
            <MyOrders/>
         </MyOrdersContainer>}
      </StyledMain>
   );
};

export { Home };