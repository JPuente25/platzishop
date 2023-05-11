import React from 'react';
import { Context } from '../../context/context';
import { User, UserTokens } from '../../types';
import { axiosGet } from '../api';
import { UseContextProps } from './useInitialState';

interface UseGetUserSessionStates {
   getUserSession: User | null
   loading: boolean
}

const useGetUserSession = (userTokens: UserTokens) => {
   const [ getUserSession, setGetUserSession ] = React.useState<UseGetUserSessionStates['getUserSession']>(null); //MAIN STATE WILL BE IMPORTED AS DATA
   const [ loading, setLoading ] = React.useState<UseGetUserSessionStates['loading']>(true); //LOADER
   const { setUserData, addError } = React.useContext(Context) as UseContextProps; //GLOBAL STATE FOR USERDATA AND ERROR MSG ON FIRST SESSION
   const accessToken = userTokens?.access_token;

   React.useEffect(() => {
      const getUser = async () => { //AXIOS GET REQUEST: VERIFY ACCESS TOKEN TO CHECK IF IT IS OKAY
         if(accessToken) {
            try {
               const { data, status } = await axiosGet<User>('auth/profile', {
                  headers: {
                     "Authorization": `Bearer ${accessToken}`,
                  }
               })
               if (status >= 200 && status < 300) {
                  setGetUserSession(data); //MAIN DATA
                  setUserData(data); //SAVE USERDATA / LET PERSISTED DATA LOG IN ACCOUNT
                  setLoading(false); //STOP LOADING
               }
            } catch (e: any) {
               setLoading(false); //STOP LOADING
               if (e.message === 'Request failed with status code 401') {
                  addError('FL1');
               } else {
                  throw e;
               }
            }
         }
      };
      getUser();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [accessToken]);

   return { getUserSession, loading };
};

export { useGetUserSession };