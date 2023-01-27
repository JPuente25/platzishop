import React from 'react';
import { Context } from '../../context/context';
import { User, UserTokens } from '../../types';
import { axiosPost } from '../api';
import { UseContextProps } from './useInitialState';

interface useAuthStates {
   render: boolean
   auth: UserTokens
   loading: boolean
}

interface HookUserData extends Pick<User, 'email' | 'password'> {}

const useAuth = (userData: HookUserData | null) => {
   const [ render, setRender ] = React.useState<useAuthStates['render']>(true); // EVERY CHANGE ON THIS STATE, WILL ACTIVATE USEEFFECT
   const [ auth, setAuth ] = React.useState<useAuthStates['auth']>(null); //MAIN STATE WILL BE EXPORTED TO GET API INFORMATION
   const [ loading, setLoading ] = React.useState<useAuthStates['loading']>(true); //LOADER
   
   const {setUserTokens, addError, removeError} = React.useContext(Context) as UseContextProps;// IMPORTS FROM CONTEXT TO MANAGE ERRORS AND INFO

   React.useEffect( () => {
      const auth = async () => { // AXIOS GET REQUEST: USER AUTHENTICATION
      if (userData){
         try {
            const { data, status } = await axiosPost('/auth/login', {
               data: {
                  "email": userData.email,
                  "password": userData.password,
               }
            });
            if (status < 300 && status >= 200) {
               removeError('002');
               setAuth(data); //MAIN DATA
               setLoading(false); //STOP LOADING
               setUserTokens(data);
               localStorage.setItem('sale_user_session', JSON.stringify(data)); //PERSISTING DATA
     
            }
         } catch (e: any) {
            //MANAGE ERRORS
            setLoading(false); //STOP LOADING
            if (e.response.data.message === "Unauthorized") { // NO-AUTHORIZED / WRONG EMAIL OR PASSWORD
               addError('NS8');
            } else {
               throw e;
            }
            setLoading(false);
         }
      }
   }
   auth();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [render]);

   return { auth, loading, setRender };
};

export { useAuth };
