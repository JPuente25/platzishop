import styled from 'styled-components';
import { lg, md, sm, text_input_field, very_light_pink, white } from '../../styles/GlobalStyle';

export const CardContainer = styled.div<{ type: string }>`
   position: relative;
   display: ${(props) => (props.type === 'order' ? 'flex' : 'block')};
   width: ${(props) => 
               (props.type === 'order') 
                  ? '100%' 
                  : (props.type === 'fullview')
                     ? '360px'
                     : '240px'
            };
   @media (max-width: 480px) {
      width: 100%;
      padding: 24px;
      align-items: center;
   }
`;


export const CardImg = styled.img<{ type: string }>`
   width: ${(props) => 
               (props.type === 'order') 
                  ? '70px' 
                  : (props.type === 'fullview')
                     ? '360px'
                     : '240px'
            };
   height: ${(props) => 
               (props.type === 'order') 
                  ? '70px' 
                  : (props.type === 'fullview')
                     ? '360px'
                     : '240px'
            };
   border-radius: 20px;
   object-fit: cover;
   cursor: pointer;

   @media (max-width: 480px) {
      &:not(.order) {
         width: 100%;
         height: auto;
      }
   }
`;

export const CardInfo = styled.div<{ type: string }>`
   display: flex;
   flex-direction: ${(props) => 
                     (props.type === 'fullview') 
                        ? 'column' 
                        : 'row'};
   width: 100%;
   margin-top: 12px;
   justify-content: space-between;
   align-items: center;

   div.p-cont p.price {
      font-weight: bold;
      font-size: ${md};
      margin-top: 0;
      margin-bottom: 4px;
   }

   div.p-cont p.title {
      font-size: ${(props) => 
                     (props.type === 'order') ||  (props.type === 'fullview')
                        ? md 
                        : sm};
      margin-top: 0;
      margin-bottom: 0;
      color: ${very_light_pink};
   }
`;

export const ParagraphContainer = styled.div<{ type: string }>`
   ${(props) =>
      (props.type === 'order')
         ? `display: flex;
            justify-content: space-between;
            width: 100%;
            margin: 0 12px;`
         : (props.type === 'fullview')
            ? `display: inline-block;
               width: 95%;`
            : ``}
`;

export const ButtonP = styled.p`
   font-size: ${md};
   color: white;
   font-weight: bold;
   margin: 0;
   margin-left: 8px;
`;

export const DescriptionContainer = styled.div`
   width: 95%;
   color: ${very_light_pink};
   font-size: ${sm};
   margin-top: 24px;
`; 

export const CloseIconContainer = styled.div`
   position: absolute;
   top: -12px;
   right: 0;
   border-radius: 50%;
   background-color: ${very_light_pink};
   display: flex;
   align-items: center;
   justify-content: center;
`;
