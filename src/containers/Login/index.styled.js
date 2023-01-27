import styled from 'styled-components';
import { hospital_green, md, sm, white } from '../../styles/GlobalStyle';
import { Link } from 'react-router-dom';

export const Form = styled.form`
   display: grid;
   grid-template-rows: auto 1fr auto;
   width: 300px;
`;

export const SignupButton = styled.button`
   background-color: ${white};
   border-radius: 8px;
   border: 1px solid ${hospital_green};
   color: ${hospital_green};
   width: 100%;
   cursor: pointer;
   font-size: ${md};
   font-weight: bold;
   height: 50px;
`;

export const ForgotLink = styled(Link)`
   color: ${hospital_green};
   font-size: ${sm};
   text-align: center;
   text-decoration: none;
   margin-bottom: 52px;
`;

export const ErrorAuth = styled.p`
   color: red;
   font-size: 12px;
   text-align: center;
   margin: 0;
   padding-bottom: 12px;
`;
