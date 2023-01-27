import React from "react";
import { Context } from "../../context/context";
import { User } from "../../types";
import { axiosPost } from "../api";
import { UseContextProps } from "./useInitialState";

interface SignupData extends Pick<User, 'name' | 'email' | 'password'> {}

interface UseCreateUserStates {
   createUser: User | null
   loading: boolean
}

const useCreateUser = (userData: SignupData | null) => {
   const [ createUser, setCreateUser ] = React.useState<UseCreateUserStates['createUser']>(null); //MAIN STATE WILL BE EXPORTED TO GET API INFORMATION
   const [ loading, setLoading ] = React.useState<UseCreateUserStates['loading']>(false); //LOADER
   const { addMsg } = React.useContext(Context) as UseContextProps; //IMPORT FROM CONTEXT TO MANAGE MSGS
   React.useEffect( () => {
      const createUser = async () => {// AXIOS POST REQUEST: CREATE NEW USER
      if (userData){
         setLoading(true); 
         try {
            const {data, status} = await axiosPost<User>('users', {
               data: {
                  "name": userData.name,
                  "email": userData.email,
                  "password": userData.password,
                  "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
               }
            });
            if (status === 201) {
               setCreateUser(data); //MAIN DATA
               addMsg('AA1'); //ADD SUCCESS MSG
            }
         } catch (error) {
            // setCreateUser(error); //MANAGE ERRORS
         }
      };
      setLoading(false); //STOP LOADING (NON-PARAMS CASE)
   };
   createUser();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [userData]);

   return { createUser, loading };
};

export { useCreateUser };