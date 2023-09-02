import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({children}) => {

    const [activeSection, setActiveSection] = useState('main') 
    const [replies, setReplies] = useState([]); //取得點擊之推文回覆清單
    const [text, setText] = useState('');//輸入文字
    const [prompt, setPrompt] = useState('');//彈出視窗的文字提示
    const [tweets, setTweets] = useState([]);//推文清單
    const [showTweetModal, setShowTweetModal] = useState(false); //tweet視窗
    const [userData, setUserData] = useState();//使用者資料
    const [getTweet, setGetTweet] = useState([]);//取得點擊推文
    const [showReplyModal, setShowReplyModal] = useState(false);//回覆的視窗
    const [buttonStatus, setButtonStatus] = useState('推文')
    const [replyText, setReplyText] = useState('');
    //以下為處理otherProfile的state 
    const [ otherUserData, setOtherUserData ] = useState([]);
    const [userTweets, setUserTweets] = useState([]);
    const [userReplyTweets, setUserReplyTweets] = useState([]);
    const [userLikeTweets, setUserLikeTweets] = useState([]);
    const [isFollowed, setIsFollowed] = useState(false);



   const value ={
    activeSection,
    setActiveSection,
    userData,
    setUserData,
    otherUserData,
    setOtherUserData,
    text,
    setText,
    prompt,
    setPrompt,
    userTweets,
    setUserTweets,
    userReplyTweets,
    setUserReplyTweets,
    userLikeTweets,
    setUserLikeTweets,
    isFollowed,
    setIsFollowed,
    replies,
    setReplies,
    tweets,
    setTweets,
    showTweetModal,
    setShowTweetModal,
    getTweet,
    setGetTweet,
    showReplyModal,
    setShowReplyModal,
    buttonStatus,
    setButtonStatus,
    replyText,
    setReplyText
   }   
 return <MainContext.Provider value ={value}>{children}</MainContext.Provider>
}

export const useMainFunction = () => {
  const MainData = useContext(MainContext);
  return MainData;
};

