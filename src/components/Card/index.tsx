import React from 'react';
import { CartIcon } from '../../assets/icons/CartIcon';
import {
   ButtonP,
   CardContainer,
   CardImg,
   CardInfo,
   CloseIconContainer,
   DescriptionContainer,
   ParagraphContainer,
} from './index.styled';
import { CartBox } from '../NavBar/index.styled';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import { isArticleAdded } from '../../utils/functions/isArticleAdded';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { ProductsProps } from '../../types';
import { UseContextProps } from '../../utils/hooks/useInitialState';

interface Props {
   article: ProductsProps
   type : 'card' | 'order' | 'fullview'
}

// THERE ARE 3 TYPES OF CARD: REGULAR CARD (MAIN PAGE, CATEGORIES), ORDER CARD (ORDERS PAGE) AND 
// FULLVIEW CARD (ARTICLE DETAILS)

const Card = ({ article, type }: Props) => {
   const { state, addToCart, deleteFromCart } = React.useContext(Context) as UseContextProps;
   const navigate = useNavigate();
   const price = article.price;
   const title = article.title;
   const image = article.images[0];
   const productId = article.id;
   const description = article.description;

   // CHECK IF AN ARTICLE IS ALREADY ADDED
   const articleAdded = isArticleAdded({ 
      id: productId,
      cart: state.cart,
   }); 

   //OPEN ARTICLE DETAILS
   const openProduct = () => {
      if (type === 'card') {
         navigate(`/product/${article?.id}`)
      };
   };

   //TOGGLE CART BUTTON: ADDS OR DELETE ARTICLE FROM CART
   const onCart = () => {
      articleAdded ? deleteFromCart(article.id) : addToCart(article);
   };

   //LOADS A DEFAULT IMAGE IS ANY IMAGE IS BROKEN OR NOT LOADING
   const defaultImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      (e.target as any).src = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
   }

   return (
      <CardContainer type={type}>   
         <CardImg
            src={image}
            alt={title}
            type={type}
            className={type}
            onClick={openProduct}
            onError={defaultImage}
         />

         <CardInfo type={type}>
            <ParagraphContainer
             type={type}
             className="p-cont">
               {type === 'order' && <p className="title">{title}</p>}
               <p className="price">${price}</p>
               {type !== 'order' && <p className="title">{title}</p>}
            </ParagraphContainer>

            {type === 'fullview' && (
               <DescriptionContainer>
                  <p>{description}</p>
               </DescriptionContainer>
            )}

            <CartBox
               className="card"
               type={type}
               onClick={onCart}
               added={articleAdded}>
               <CartIcon
                  width="25px"
                  height="25px"
               />
               {type === 'fullview' && (
                  <ButtonP
                     onClick={onCart}>
                     {articleAdded ? 'Delete from Cart' : 'Add to Cart'}
                  </ButtonP>
               )}
            </CartBox>

         </CardInfo>
         {type === 'order' && (
            <CloseIconContainer onClick={onCart}>
               <CloseIcon />
            </CloseIconContainer>
         )}
      </CardContainer>
   );
};

export { Card };
