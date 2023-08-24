import Header from '../Header/Header.jsx'
import { useMainFunction } from '../../contexts/MainContext'
import TweetInput from '../TweetInput/TweetInput.jsx';
import ReplyPost from '../ReplyPost/ReplyPost.jsx';

function MainSection () {
  const { otherUserData, activeSection } = useMainFunction();

 function HomePage() {
  return(
    <>
     <TweetInput />
    </>
  )
 }

  function ReplyPage () {
    return(
      <>
       <ReplyPost />
      </>
    )
  }

  return(
    <div className= {StyleSheet.container}>

      <Header />


      {/*Main Page */}
      {activeSection === 'main' && <HomePage />} 
      
      {/*Reply Page */}
      {activeSection === 'reply' &&  <ReplyPage />}
    </div>
  )
}

export default MainSection;