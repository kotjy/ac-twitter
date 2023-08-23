import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState('main')
      
    //以下為處理otherProfile的state 
    const [ otherUserData, setOtherUserData ] = useState([]);


   const value ={
    activeSection,
    setActiveSection,
    otherUserData,
    setOtherUserData

   }   
 return <MainContext.Provider value ={value}>{children}</MainContext.Provider>
}

export const useMainFunction = () => {
  const MainData = useContext(MainContext);
  return MainData;
};

