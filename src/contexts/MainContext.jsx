import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({children}) => {
      const [activeSection, setActiveSection] = useState('main')



   const value ={
    activeSection,
    setActiveSection

   }   
 return <MainContext.Provider value ={value}>{children}</MainContext.Provider>
}

export const useMainFunction = () => {
  const MainData = useContext(MainContext);
  return MainData;
};

