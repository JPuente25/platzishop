import React from 'react';
import { Login } from '../../containers/Login';
import { Recovery } from '../../containers/Recovery';
import { StyledMain } from '../../styles/StyledMain';

const NewPassword = () => {
   return (
      <StyledMain>
         <Recovery />
      </StyledMain>
   );
};

export { NewPassword };