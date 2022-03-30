import React, { useContext, useState } from "react";
import { ContextProps } from "./types/Context.types";
const AppContext = React.createContext<ContextProps>({} as ContextProps);
export const AppProvider = ({ children }:any) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isOpen,
        setOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
