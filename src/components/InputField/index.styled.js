import styled from 'styled-components';
import { md, sm, text_input_field, very_light_pink } from '../../styles/GlobalStyle';

export const Field = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 12px;
   width: 100%;
`;

export const Label = styled.label`
   font-size: ${sm};
   font-weight: bold;
   margin-bottom: 4px;
`;

export const Input = styled.input`
   background-color: ${text_input_field};
   border: none;
   border-radius: 8px;
   height: 30px;
   font-size: ${md};
   padding: 6px;

   &::placeholder {
      color: ${very_light_pink};
   }
`;