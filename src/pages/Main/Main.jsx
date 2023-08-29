import SideBar from "../../components/SideBar/SideBar";
import MainSection from "../../components/MainSection/MainSection";
import PopularList from "../../components/PopularList/PopularList";
import TweetModal from "../../components/TweetModal/TweetModal";
import ReplyModal from "../../components/ReplyModal/ReplyModal";
import styles from './Main.module.scss'
import { useMainFunction } from "../../contexts/MainContext";
import { getIdTweets, getTweets, postTweet  } from "../../api/tweets";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserData } from "../../api/userProfile";
import { useEffect } from "react";
import { postReply,getAllReply } from "../../api/reply";

function Main() {
	const navigate = useNavigate();

const {
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
    setReplyText} = useMainFunction();

		// 前往發推視窗
	function handleToTweetModal() {
		setText('');
		setPrompt('');
		setShowTweetModal(true);
	}
  
	// 前往發推視窗
	function handleTweetModalClose() {
		setShowTweetModal(false);
	}
   
	// 處理推文輸入改變
	const handleTweetTextChange = (e) => {
		const texts = e.target.value;
		setText(texts);
		if (text.length > 140) {
			setPrompt('字數不可超過 140 字');
		} else {
			setPrompt('');
		}
	};

  // 點擊新增推文按鈕
	const handlePostTweetClick = async () => {
		if (text.length === 0) {
			setPrompt('內容不可空白');
		} else if (text.length > 140) {
			setPrompt('字數不可超過 140 字');
		} else {
			setPrompt('');
			const authToken = localStorage.getItem('authToken');
			if (!authToken) {
				navigate('/login');
				return;
			}
			await postTweet(text, authToken);
			// SweetAlert推文發送成功訊息
			Swal.fire({
				position: 'top',
				title: '推文發送成功',
				timer: 1000,
				icon: 'success',
				showConfirmButton: false,
			}).then(() => {
				handleTweetModalClose();
			});
			setActiveSection('main');
		}
		const userId = localStorage.getItem('userId');
		const authToken = localStorage.getItem('authToken');
		const tweet = await getTweets(authToken);
		const data = await getUserData(userId, authToken);
		setUserData(data);
		setTweets(tweet.map((tweet) => ({ ...tweet })));
	};

//取得個別推文內容
	const handleGetIdTweet = async (tweetID) => {
		try {
			const authToken = localStorage.getItem('authToken');
			const aTweet = await getIdTweets(authToken, tweetID);
			setGetTweet(aTweet);
		} catch (error) {
			console.error(error);
		}
	};

// 打開replymodal，取得個別推文內容
	async function handleToReplyModal(tweetID) {
		setReplyText('');
		setPrompt('');
		setShowReplyModal(true);
		try {
			const authToken = localStorage.getItem('authToken');
			const theTweet = await getIdTweets(authToken, tweetID);
			setGetTweet(theTweet);
		} catch (error) {
			console.error(error);
		}
	}

	function handleReplyModalClose() {
		setShowReplyModal(false);
	}














  // 進入首頁，先驗證，通過後載入TweetList
	useEffect(() => {
		const getTweetsAsync = async () => {
			try {

				const userId = localStorage.getItem('userId');
				const authToken = localStorage.getItem('token');
				const tweet = await getTweets(authToken);
				const data = await getUserData(userId, authToken);
				setUserData(data);

				if (!authToken) {
					navigate('/login');
					return;
				}
				setTweets(tweet.map((tweet) => ({ ...tweet })));
			} catch (error) {
				console.error(error);
			}
		};
		getTweetsAsync();
	}, []);









  return(
<div
			className={styles.container}
		>
			<div className={styles.sidebarSection}>
				<SideBar
				  activeSection={activeSection}
					setActiveSection={setActiveSection}
					onToTweetClick={handleToTweetModal}
				/>
			</div>
			<div className={styles.mainSection}>
				<MainSection
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					ToTweetModalHandler={handleToTweetModal}
					tweetAuth={getTweet}
					replyList={replies}
					User={userData}
					tweets={tweets}
				/>
			</div>
			<div className={styles.popularListSection}>
				<PopularList  />
			</div>
			<div
				className={`${styles.tweetModal} ${showTweetModal ? styles.showModal : styles.hideModal}`}
			>
				<TweetModal
					userData={userData}
					onCloseModal={handleTweetModalClose}
					onPostTweetClick={handlePostTweetClick}
					onTextChange={handleTweetTextChange}
					texts={text}
					prompts={prompt}
				/>
			</div>
			<div
				className={`${styles.replyModal} ${showReplyModal ? styles.showModal : styles.hideModal}`}
			>
				<ReplyModal
					
				/>
			</div>
		</div>
  )
}





export default Main;
