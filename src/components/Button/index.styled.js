import styled from "styled-components";
import { hospital_green, md, white } from "../../styles/GlobalStyle";

export const Button = styled.button`
   background-color: ${hospital_green};
   border-radius: 8px;
   border: none;
   color: ${white};
   width: 100%;
   cursor: pointer;
   font-size: ${md};
   font-weight: bold;
   height: 50px;

   &.signup, &.edit {
      background-color: ${white};
      border: 2px solid ${hospital_green};
      color: ${hospital_green};
   }
`;