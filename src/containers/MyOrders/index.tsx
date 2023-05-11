import React from 'react';
import { Order } from '../../components/Order';
import { OrderContainer, Title } from '../../components/Order/index.styles';

const MyOrders = () => {
  
   return (
      <OrderContainer>
         <Title>My Orders</Title>
         <Order />
      </OrderContainer>
   );
};



export { MyOrders };
