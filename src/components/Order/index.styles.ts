import styled from "styled-components";
import { lg, sm, text_input_field, very_light_pink } from "../../styles/GlobalStyle";

export const OrderContainer = styled.div<{type?: string}>` 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   width: 300px;
   gap: ${props => (props.type === 'oneOrder')
            ? '36px'
            : '0px'};
   margin-bottom: 12px;

   @media (max-width: 640px) {
      width: 90%;
   }
`;

export const Title = styled.h1`
      font-size: ${lg};
      margin-bottom: 40px;
      width: 100%;
      text-align: center;

      &.oneOrder {
         margin: 0;
      }
`;

export const Total = styled.div`
      position: relative;
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
      background-color: ${text_input_field};
      margin-bottom: 24px;
      border-radius: 8px;
      padding: 16px 24px;
      width: 100%;
      contain: content;

      p {
         margin: 0;
         font-weight: bold;
      }

      div p:nth-child(2) {
         font-size: ${sm};
         color: ${very_light_pink};
      }
`;

export const ArticlesContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   gap: 24px;
`;

export const More = styled.div<{showMore: boolean}>`
   position: absolute;
   right: 0%;
   display: flex;
   align-items: center;
   background-color: lightgrey;
   height: 100%;
   padding: 0 5px;
   contain: content;
   font-size: ${lg};
   font-weight: bold;
   cursor: pointer;

   p {
      rotate: ${props => props.showMore ? '90deg' : '0deg' };
   }
`;