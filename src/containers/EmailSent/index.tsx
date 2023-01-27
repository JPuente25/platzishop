import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledEmailSent, Title, Subtitle, Logo, Resent } from './index.styled';
import { Button } from '../../components/Button/index.styled';

const EmailSent = () => {  
   const navigate = useNavigate();

   const goLogin = () => { //GO TO LOGIN PAGE
      navigate('/login');
   }

   return (
      <StyledEmailSent>
         <Title>Email has been sent!</Title>
         <Subtitle>Please check your inbox for instructions on how to reset the password</Subtitle>

         <Logo src="https://img.icons8.com/bubbles/512/apple-mail.png" alt="email" />

         <Button onClick={goLogin}>Login</Button>

         <Resent>
            <span>Didn't receive the email? </span>
            <Link to='/recovery/sent'>Resend</Link>
         </Resent>
      </StyledEmailSent>
   );
};

export { EmailSent };








