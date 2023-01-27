import React from 'react';
import {
   CardContainer,
   CardInfo,
   CartBoxSkeleton,
   CloseIconContainer,
   DescriptionContainer,
   ImgSkeleton,
   ParagraphContainer,
   ParagraphSkeleton,
} from './index.styled';

interface Props {
   type: 'order' | 'card' | 'fullview'
}

const CardSkeleton = ({ type }: Props) => {
   return (
      <CardContainer type={type}>
         <ImgSkeleton
            type={type}
         />

         <CardInfo type={type}>
            <ParagraphContainer type={type}>
               <ParagraphSkeleton />
               <ParagraphSkeleton />
            </ParagraphContainer>

            {type === 'fullview' && <DescriptionContainer />}

            <CartBoxSkeleton type={type} />
         </CardInfo>

         {type === 'order' && <CloseIconContainer />}
      </CardContainer>
   );
};

export { CardSkeleton };
