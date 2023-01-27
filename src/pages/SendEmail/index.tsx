import React from 'react';
import { EmailSent } from '../../containers/EmailSent';
import { MyOrders } from '../../containers/MyOrders';
import { StyledMain } from '../../styles/StyledMain';

const EmailSentPage = () => {
   return (
      <StyledMain>
         <EmailSent />
      </StyledMain>
   );
};

export { EmailSentPage };