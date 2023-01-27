import React from 'react';
import { MyOrders } from '../../containers/MyOrders';
import { StyledMain } from '../../styles/StyledMain';

const Orders = () => {
   return (
      <StyledMain>
         <MyOrders />
      </StyledMain>
   );
};

export { Orders };