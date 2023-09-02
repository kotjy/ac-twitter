import Header from '../Header/Header.jsx'
import TweetInput from '../TweetInput/TweetInput.jsx';
import ReplyPost from '../ReplyPost/ReplyPost.jsx';
import OtherProfile from '../OtherProfile/OtherProfile.jsx';
import TweetList from '../TweetList/TweetList.jsx';
import UserProfile from '../UserProfile/UserProfile.jsx';
import FollowList from '../FollowList/FollowList.jsx';
import ReplyList from '../ReplyList/ReplyList.jsx';
import styles from './MainSection.module.scss'
import SettingPage from '../../pages/SettingPage.jsx';

function MainSection ({
	setSetting,
  activeSection,
	setActiveSection,
	ToTweetModalHandler,
	onToReplyModal,
	tweetAuth,
	User,
	replyList,
	onTweetLink,
	onLike,
	onText,
	tweets,
	onOtherClick,
	otherUserID,
	userTweets,
	userReplyTweets,
	userLikeTweets,
	otherUserData,
	OtherUserTweets,
	onFollowClick,
	isFollowed,
	onTweetLikeClick,}) {
  

 function HomePage() {
  return(
    <>
     <TweetInput 
          onToTweetClick={ToTweetModalHandler}
					onTextChange={onText}
					userData={User}
					onOtherClick={onOtherClick}/>
     <TweetList
          onTweetClick={onTweetLink}
					onReplyClick={onToReplyModal}
					onLikeClick={onLike}
					tweetList={tweets}
					onOtherClick={onOtherClick} />
    </>
  )
 }

  function ReplyPage () {
    return(
      <>
       <ReplyPost 
          tweet={tweetAuth}
					onReplyClick={onToReplyModal}
					onLikeClick={onTweetLikeClick}
					onOtherClick={onOtherClick}/>
       <ReplyList replies={replyList} onOtherClick={onOtherClick} />
      </>
    )
  }

  return(
    <div className= {styles.container}>

      <Header 
        activeSection={activeSection}
				setActiveSection={setActiveSection}
				otherUserData={otherUserData}
				OtherUserTweets={OtherUserTweets}/>


      {/*Main Page */}
      {activeSection === 'main' && <HomePage />} 
      
      {/*Reply Page */}
      {activeSection === 'reply' &&  <ReplyPage />}

      {/*userProfile */}
       {activeSection === 'userProfile' && (
				<UserProfile activeSection={activeSection} setActiveSection={setActiveSection} />
			)}

			{/* Setting */}
			{activeSection === 'setting' && <SettingPage  setSetting={setSetting}/>}

      {/*followList */}
      {(activeSection === 'follower' || activeSection === 'following') && (
				<FollowList activeSection={activeSection} setActiveSection={setActiveSection} />
			)}

       {/*OtherProfile */}
       {activeSection === 'otherProfile' && (
				<OtherProfile
					activeSection={activeSection}
					otherUserId={otherUserID}
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