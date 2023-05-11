import styled from "styled-components";
import { very_light_pink } from "../../styles/GlobalStyle";

export const MyOrdersContainer = styled.div`
   padding-left: 12px;
   border-left: 1px solid ${very_light_pink};
   display: none;

   @media (min-width: 768px) {
      display: block
    }
`;