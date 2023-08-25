import Header from '../Header/Header.jsx'
import { useMainFunction } from '../../contexts/MainContext'
import TweetInput from '../TweetInput/TweetInput.jsx';
import ReplyPost from '../ReplyPost/ReplyPost.jsx';
import OtherProfile from '../OtherProfile/OtherProfile.jsx';

function MainSection ({otherUserId, onFollowClick}) {
  const { otherUserData, 
          activeSection,
          setActiveSection,
          userTweets,
          userReplyTweets,
          isFollowed,
          userLikeTweets } = useMainFunction();

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

      {/*userProfile */}
     
      {/*followList */}


       {/*OtherProfile */}
       {activeSection === 'otherProfile' && (
				<OtherProfile
					activeSection={activeSection}
					otherUserId={otherUserId}
					userTweets={userTweets}
					userReplyTweets={userReplyTweets}
					userLikeTweets={userLikeTweets}
					onFollowClick={onFollowClick}
					isFollowed={isFollowed}
				/>
			)}

    </div>
  )
}

export default MainSection;