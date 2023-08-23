import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState('main')
    
    const [text, setText] = useState('');//輸入文字
    const [prompt, setPrompt] = useState('');//彈出視窗的文字提示
    //以下為處理otherProfile的state 
    const [ otherUserData, setOtherUserData ] = useState([]);


   const value ={
    activeSection,
    setActiveSection,
    otherUserData,
    setOtherUserData,
    text,
    setText,
    prompt,
    setPrompt,


   }   
 return <MainContext.Provider value ={value}>{children}</MainContext.Provider>
}

export const useMainFunction = () => {
  const MainData = useContext(MainContext);
  return MainData;
};

