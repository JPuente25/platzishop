import React from 'react';
import { ProductsProps, User, UserTokens } from '../../types';

type ErrorProps = typeof errorCode;
type MsgsProps = typeof msgCode;

interface Errors extends Partial<ErrorProps> {}
interface Msgs extends Partial<MsgsProps> {}

interface InitialValue {
   modal: boolean;
   cart: Array<ProductsProps>;
   orders: boolean;
   userData: User | null;
   userTokens: UserTokens;
   error: Errors;
   msg: Msgs;
}

export interface UseContextProps {
   state: InitialValue;
   addToCart: (payload: ProductsProps) => void;
   deleteFromCart: (payload: number) => void;
   toggleModal: () => void;
   toggleOrders: () => void;
   setUserData: (payload: User | null) => void;
   setUserTokens: (payload: UserTokens) => void;
   logOut: () => void;
   addError: (payload: string) => void;
   removeError: (payload: string) => void;
   addMsg: (payload: string) => void;
   removeMsg: (payload: string) => void;
}

const initialValue: InitialValue = {
   modal: false, //MODAL TAB ON MENU
   cart: [],
   orders: false, //ORDERS TAB ON > 640PX
   userData: null, //DATA TO KNOW IF PERSISTED ACCESS TOKEN IS VALID
   userTokens: JSON.parse(localStorage.getItem('sale_user_session') || '{}'),
   error: {}, //ERRORS
   msg: {}, //SUCCESS
};

export const useInitialValue = (): UseContextProps => {
   const [state, setState] = React.useState(initialValue);

   const addToCart = (payload: ProductsProps) => {
      //ADD A PRODUCT TO CART
      setState({
         ...state,
         cart: [...state.cart, payload],
      });
   };

   const deleteFromCart = (payload: number) => {
      //DELETE A PRODUCT FROM CART
      const newCart = state.cart.filter((item) => item.id !== payload);
      setState({
         ...state,
         cart: newCart,
      });
   };

   const toggleModal = () => {
      //ENABLE MODAL TAB
      setState({
         ...state,
         modal: !state.modal,
      });
   };

   const toggleOrders = () => {
      //ENABLE ORDERS TAB
      setState({
         ...state,
         orders: !state.orders,
      });
   };

   const setUserData = (payload: User | null) => {
      //SAVES USER DATA
      setState({
         ...state,
         userData: payload,
      });
   };

   const setUserTokens = (payload: UserTokens) => {
      //SAVE USER TOKENS
      setState({
         ...state,
         userTokens: payload,
      });
   };

   const logOut = () => {
      localStorage.clear();
      setState({
         ...state,
         userTokens: null,
         userData: null,
         modal: !state.modal,
      });
   };

   //ADDS AN ERROR
   const addError = (payload: string) => {
      state.error[payload as keyof Errors] = errorCode[payload as keyof ErrorProps];
   };

   //REMOVES AN ERROR
   const removeError = (payload: string) => {
      delete state.error[payload as keyof Errors];
   };

   //ADDS A SUCESS MSG
   const addMsg = (payload: string) => {
      state.msg[payload as keyof Msgs] = msgCode[payload as keyof MsgsProps];
   };

   //REMOVES A SUCESS MSG
   const removeMsg = (payload: string) => {
      delete state.msg[payload as keyof Msgs];
   };

   return {
      state,
      addToCart,
      deleteFromCart,
      toggleModal,
      toggleOrders,
      setUserData,
      setUserTokens,
      logOut,
      addError,
      removeError,
      addMsg,
      removeMsg,
   };
};

export const errorCode = {
   XL8: "This item doesn't exist",
   FL1: 'Your session has expired. Please, log in again',
   XX5: "This user can't be changed. Please create your own user",
   NS8: 'User or password incorrect',
};

export const msgCode = {
   AA1: 'Usuario creado con exito. Probemoslo!',
   SS1: 'Datos actualizados con éxito',
};
