import React from "react";
import { useInitialValue, UseContextProps } from "../utils/hooks/useInitialState";

export const Context = React.createContext<UseContextProps | null>(null);

const Provider = ({children} : {children: React.ReactNode}) => {   
   return (
      <Context.Provider value={useInitialValue()}>
         {children}
      </Context.Provider>
   );
}

export { Provider };