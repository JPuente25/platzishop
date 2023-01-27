import React from 'react';
import { Context } from '../../context/context';
import { User } from '../../types';
import { axiosPut } from '../api';
import { UseContextProps } from './useInitialState';

interface UseUpdateUserStates {
   updateUser: User | null;
   loading: boolean;
}

const useUpdateUser = (updatedData: User | null) => {
   //WE ARE RECEIVING A FULL SCHEMA HERE
   const [updateUser, setUpdateUser] = React.useState<UseUpdateUserStates['updateUser']>(null); //MAIN STATE WILL BE IMPORTED AS DATAA
   const [loading, setLoading] = React.useState<UseUpdateUserStates['loading']>(true); //LOADER
   const { addError, addMsg } = React.useContext(Context) as UseContextProps;
   React.useEffect(() => {
      const update = async () => {
         if (updatedData) {
            setLoading(true);
            try {
               const { data, status } = await axiosPut<User>(`users/${updatedData.id}`, {
                  data: {
                     email: updatedData.email,
                     password: updatedData.password,
                     name: updatedData.name,
                     avatar: updatedData.avatar,
                  },
               });
               if (status >= 200 && status < 300) {
                  setUpdateUser(data); //MAIN DATA
                  addMsg('SS1');
                  setLoading(false); //STOP LOADING
               }
            } catch (e: any) {
               //MANAGING ERROR
               if (e.response.data.message ===
                  'This user is not available for updating; instead, create your own user to update.') {
                  addError('XX5');
               } else {
                  throw e;
               }
               setLoading(false); //STOP LOADING
            }
         }
         setLoading(false);
      };
      update();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [updatedData]);

   return { updateUser, loading };
};

export { useUpdateUser };
