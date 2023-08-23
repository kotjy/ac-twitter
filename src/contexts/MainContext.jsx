import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState('main');//顯示頁面
    const [userData, setUserData] = useState();//使用者資料

    //以下為處理otherProfile的state 
    const [ otherUserData, setOtherUserData ] = useState([]);


   const value ={
    activeSection,
    setActiveSection,
    userData,
    setUserData,
    otherUserData,
    setOtherUserData,

   }   
 return <MainContext.Provider value ={value}>{children}</MainContext.Provider>
}

export const useMainFunction = () => {
  const MainData = useContext(MainContext);
  return MainData;
};

