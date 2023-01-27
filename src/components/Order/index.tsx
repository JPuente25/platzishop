import React from 'react';
import { ArticlesContainer, More, OrderContainer, Total } from './index.styles';
import { Card } from '../Card';
import { getDateFormatted } from '../../utils/functions/getDateFormatted';
import { Context } from '../../context/context';
import { UseContextProps } from '../../utils/hooks/useInitialState';

interface OrderStates {
   showMore: boolean
}

const Order = () => {
   const { state } = React.useContext(Context) as UseContextProps;
   const [showMore, setShowMore] = React.useState<OrderStates['showMore']>(false);
   const price = state.cart.reduce((a, b) => { //CALCULATES TOTAL PRICE
      return a + b.price;
   }, 0);

   const date = getDateFormatted(); //GETS DATE ON PERSONALIZED FORMAT

   const qty = state.cart.length; //GET NUMBER OF ITEMS IN CART

   const onShowMore = () => { //SHOWS ALL ITEMS IN ORDER
      setShowMore(prev => !prev)
   };

   return (
      <OrderContainer>
         <Total>
            <div>
               <p>{date}</p>
               <p>{qty} articles</p>
            </div>
               <p>${price}</p>
               <More onClick={onShowMore} showMore={showMore.toString()}>
                  <p>{'>'}</p>
               </More>
         </Total>

         {showMore && <ArticlesContainer>
            {state.cart.map((item) => (
               <Card
                  key={item.id}
                  type="order"
                  article={item}
               />
            ))}
         </ArticlesContainer>}
      </OrderContainer>
   );
};



export { Order };
