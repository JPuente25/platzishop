import React from 'react';
import { Login } from '../../containers/Login';
import { StyledMain } from '../../styles/StyledMain';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

   return (
      <StyledMain>
         <Login/>
      </StyledMain>
   );
};

export { LoginPage };