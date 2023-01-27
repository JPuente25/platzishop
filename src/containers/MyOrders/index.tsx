import React from 'react';
import { Order } from '../../components/Order';
import { OrderContainer, Title } from '../../components/Order/index.styles';
// import { Context } from '../../context/context';
// import { UseContextProps } from '../../utils/hooks/useInitialState';

const MyOrders = () => {
   // const { state } = React.useContext(Context) as UseContextProps;

   // const myOrders = [ //AT THE MOMENT, ONLY TAKES 1 ORDER PACKAGE.
   //    [...state.cart],
   // ];
   
   return (
      <OrderContainer>
         <Title>My Orders</Title>
         <Order />
         {/* <OrderContainer>
            {myOrders.map((order, i) => 
               <Order key={i}/>)}
         </OrderContainer> */}
      </OrderContainer>
   );
};



export { MyOrders };
