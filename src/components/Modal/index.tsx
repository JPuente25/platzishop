import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import { UseContextProps } from '../../utils/hooks/useInitialState';
import { departmentList } from '../NavBar';
import { MenuContainer, Ul, StyledLink} from './index.styled';


const Modal = () => {
   const navigate = useNavigate();
   const { logOut, toggleOrders, toggleModal } = React.useContext(Context) as UseContextProps;

   const onOrders = () => { //IF <640PX THEN OPEN ORDERS IN A PAGE, IF >640PX THEN OPEN A TAB ORDERS
      if (window.innerWidth >= 640){
         onToggleOrders()
      } else {
         toggleModal();
         openOrdersPage()
      }
   };

   const openOrdersPage = () => { //OPENS AN ORDER PAGE
      navigate('/orders');
   };

   const onToggleOrders = () => { //TOGGLE ORDERS TAB
      toggleOrders();
   };

   const closeMenu = () => { //CLOSE MODAL
      toggleModal();
   };

   const signOut = () => { //LOGS OUT, SET NULL USERDATA AND TOKENS
      logOut();
   };


   return (
      <MenuContainer>
         <h1>CATEGORIES</h1>
         <Ul>
            {departmentList.map(item => 
                  <StyledLink 
                     key={item.id.toString(16)} 
                     className='category'
                     onClick={closeMenu}
                     to={`${item.path}/${item.id}`}
                  >{item.text}</StyledLink >
            )}</Ul>
         <Ul>
            <StyledLink as='p' className='menu' onClick={onOrders}>My Orders</StyledLink>
            <StyledLink className='menu' onClick={closeMenu} to='/account'>My Account</StyledLink>
            <StyledLink className='menu' onClick={signOut} to="/login">Sign out</StyledLink>
         </Ul>
      </MenuContainer>
   );
};

export { Modal };