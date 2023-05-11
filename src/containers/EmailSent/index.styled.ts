import styled from 'styled-components';
import { lg, very_light_pink, text_input_field, sm, md } from '../../styles/GlobalStyle';

export const StyledEmailSent = styled.div`
   display: grid;
   grid-template-rows: auto 1fr auto;
   width: 300px;
   justify-items: center;
`;

export const Title = styled.h1`
   font-size: ${lg};
   margin-bottom: 12px;
   text-align: center;
`;

export const Subtitle = styled.p`
   color: ${very_light_pink};
   font-size: ${md};
   font-weight: 300;
   margin-top: 0;
   margin-bottom: 32px;
   text-align: center;
`;

export const Logo = styled.img`
   width: 132px;
   height: 132px;
   border-radius: 50%;
   background-color: ${text_input_field};
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 24px;
`;

export const Resent = styled.p`
   font-size: ${sm};

   span {
      color: ${very_light_pink};
   }
`;
