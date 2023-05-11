import styled from 'styled-components';
import { very_light_pink } from '../../../styles/GlobalStyle';

export const CardContainer = styled.div<{ type: string }>`
   position: relative;
   display: ${(props) => (props.type === 'order' ? 'flex' : 'block')};
   width: ${(props) =>
      props.type === 'order' ? '100%' : props.type === 'fullview' ? '360px' : '240px'};
   border: ${(props) => (props.type === 'order' ? `1px solid ${very_light_pink}` : 'none')};
`;

export const ImgSkeleton = styled.div<{ type: string }>`
   width: ${(props) =>
      props.type === 'order' ? '70px' : props.type === 'fullview' ? '360px' : '240px'};
   height: ${(props) =>
      props.type === 'order' ? '70px' : props.type === 'fullview' ? '360px' : '240px'};
   background-color: ${very_light_pink};
   border-radius: 20px;
`;

export const CardInfo = styled.div<{ type: string }>`
   display: flex;
   flex-direction: ${(props) => (props.type === 'fullview' ? 'column' : 'row')};
   width: ${(props) => (props.type === 'order' ? '200px' : '100%')};
   margin-top: 12px;
   justify-content: space-between;
   align-items: center;
`;

export const ParagraphContainer = styled.div<{ type: string }>`
   ${(props) =>
      props.type === 'order'
         ? `display: flex;
            justify-content: space-between;
            width: 100%;
            margin: 0 12px;`
         : props.type === 'fullview'
         ? `display: inline-block;
               width: 95%;`
         : props.type === 'card'
         ? `display: flex;
                  flex-direction: column;
                  gap: 8px;`
         : ``}
`;

export const ParagraphSkeleton = styled.div<{ type?: string }>`
   width: ${(props) => (props.type === 'order' ? '40px' : '180px')};
   height: 16px;
   background-color: ${very_light_pink};
`;

export const DescriptionContainer = styled.div`
   width: 336px;
   height: 30px;
   background-color: ${very_light_pink};
   margin: 24px 12px;
`;

export const CloseIconContainer = styled.div`
   position: absolute;
   top: -12px;
   right: 0;
   border-radius: 50%;
   background-color: ${very_light_pink};
   width: 30px;
   height: 30px;
`;

export const CartBoxSkeleton = styled.div<{ type: string }>`
   ${(props) =>
      props.type === 'card'
         ? `width: 40px;
         height: 40px;
         border-radius: 50%;
         background-color: ${very_light_pink};`
         : props.type === 'fullview'
         ? `width: 360px;
            height: 60px;
            background-color: ${very_light_pink};`
         : ``}
`;
