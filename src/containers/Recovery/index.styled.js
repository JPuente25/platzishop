import styled from 'styled-components';
import { lg, md, very_light_pink } from '../../styles/GlobalStyle';

export const Section = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 300px;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

export const H1 = styled.h1`
   font-size: ${lg};
   margin-bottom: 12px;
   text-align: center;

   &.left {
      text-align: left;
   }
`;

export const Paragraph = styled.p`
   color: ${very_light_pink};
   font-size: ${md};
   font-weight: 300;
   margin-top: 0;
   margin-bottom: 32px;
   text-align: center;
`;