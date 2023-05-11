import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { hospital_green, md, sm, very_light_pink, white } from '../../styles/GlobalStyle';

export const DivContainer = styled.div`
   position: relative;
   z-index: 1;
`;

export const StyledNavBar = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 60px;
   border-bottom: 1px solid ${very_light_pink};
   width: 100%;
   padding: 0 24px;
`;

export const MenuBox = styled.div`
   display: block;

   @media (min-width: 640px) {
      display: none;
   }
`;

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Ul = styled.ul`
   display: flex;
   list-style: none;
   padding: 0;

   @media (max-width: 640px) {
      display: none;
   }
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: ${very_light_pink};
   border: 1px solid ${white};
   padding: 8px;
   border-radius: 8px;

   &:hover {
      border: 1px solid ${hospital_green};
      color: ${hospital_green};
   }
`;

export const Email = styled.p`
   color: ${very_light_pink};
   font-size: ${sm};
   margin-right: 12px;

   @media (max-width: 640px) {
      display: none;
   }
`;

export const CartBox = styled.div<{type?: string, added?: boolean}>`
   position: relative;
   display: ${props => (props.type === 'order') ? 'none' : 'flex'};
   justify-content: center;
   align-items: center;
   background-color: transparent;
   border-radius: ${props => (props.type === 'fullview') ? '10px' : '50%'};
   width: ${props => (props.type === 'fullview') ? '95%' : '35px'};
   height: ${props => (props.type === 'fullview') ? '50px' : '35px'};

   &.card {
      background-color: ${props => props.added ? 'orange' : hospital_green};
   }
`;

export const Nots = styled.div`
   background-color: ${hospital_green};
   width: 16px;
   height: 16px;
   font-size: 14px;
   font-weight: 900;
   border-radius: 100%;
   border: 0.5px solid ${very_light_pink};
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   right: 0px;
   top: 0px;
`;
