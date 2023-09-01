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
import { getUserData, getUserTweets, getUserReplyTweets, getUserLikeTweets, getFollowingList } from "../../api/userProfile";
import { useEffect } from "react";
import { postFollow, deleteFollow,  } from "../../api/followship";
import { postReply, getAllReply } from "../../api/reply";
import { postLike, postUnlike } from "../../api/like";


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
			const authToken = localStorage.getItem('token');
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
		const authToken = localStorage.getItem('token');
		const tweet = await getTweets(authToken);
		const data = await getUserData(userId, authToken);
		setUserData(data);
		setTweets(tweet.map((tweet) => ({ ...tweet })));
	};

//取得個別推文內容
	const handleGetIdTweet = async (tweetID) => {
		try {
			const authToken = localStorage.getItem('token');
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
			const authToken = localStorage.getItem('token');
			const theTweet = await getIdTweets(authToken, tweetID);
			setGetTweet(theTweet);
		} catch (error) {
			console.error(error);
		}
	}

	function handleReplyModalClose() {
		setShowReplyModal(false);
	}

// 在推文回覆畫面按上方推文喜歡
	const handleReplyPageLikeClick = async () => {
		try {
			const authToken = localStorage.getItem('token');
			const theTweet = await getIdTweets(authToken, getTweet?.id);
			if (theTweet.isLiked === 0) {
				await postLike(authToken, theTweet?.id);
				const aTweet = await getIdTweets(authToken, getTweet?.id);
				setGetTweet(aTweet);
			} else {
				await postUnlike(authToken, theTweet?.id);
				const aTweet = await getIdTweets(authToken, getTweet?.id);
				setGetTweet(aTweet);
			}
			handleGetIdTweet(theTweet?.id);
		} catch (error) {
			console.log('Error:', error.message);
		}
	};

// 點擊推文，取得推文id，連結至個別推文回覆畫面
	const handleTweetLink = (tweetID) => {
		setActiveSection('reply');
		handleGetIdTweet(tweetID);
		handleGetAllReply(tweetID);
	};

//進入個別推文回覆畫面時，取得該推文之回覆清單
	const handleGetAllReply = async (tweetID) => {
		try {
			const authToken = localStorage.getItem('token');
			const allReply = await getAllReply(authToken, tweetID);
			setReplies(allReply);
		} catch (error) {
			console.error(error);
		}
	};

  // 處理reply輸入改變
	const handleTextChange = (e) => {
		const texts = e.target.value;
		setReplyText(texts);
		if (texts.length > 140) {
			setPrompt('字數不可超過 140 字');
		} else {
			setPrompt('');
		}
	};


  //點擊回覆按鈕，新增回覆
	const handleReplyClick = async (tweetID) => {
		if (replyText.length === 0) {
			setPrompt('內容不可空白');
		} else if (replyText.length > 140) {
			setPrompt('字數不可超過 140 字');
		} else {
			setPrompt('');
			const authToken = localStorage.getItem('token');
			await postReply(authToken, replyText, tweetID);
			Swal.fire({
				position: 'top',
				title: '回覆發送成功',
				timer: 1000,
				icon: 'success',
				showConfirmButton: false,
			}).then(() => {
				handleReplyModalClose();
			});
		}
		const userId = localStorage.getItem('userId');
		const authToken = localStorage.getItem('token');
		const tweet = await getTweets(authToken);
		const data = await getUserData(userId, authToken);
		setUserData(data);
		const allReply = await getAllReply(authToken, tweetID);
		setReplies(allReply);
		const aTweet = await getIdTweets(authToken, tweetID);
		setGetTweet(aTweet);
		setTweets(tweet.map((tweet) => ({ ...tweet })));
	};

  // 在推文清單上按喜歡

	const handleLikeClick = async (itemID) => {
       try {
            const authToken = localStorage.getItem('token');
            setTweets(
                tweets.map((item) => {
                    if (item.id === itemID) {
											console.log(item.isLiked)
                        if (item.isLiked === 0) {
                            postLike(authToken, itemID);
                            return {
                                ...item,
                                likeCounts: item.likeCounts + 1,
                                isLiked: !item.isLiked,
                            };
                        } else {
                            postUnlike(authToken, itemID);
                            return {
                                ...item,
                                likeCounts: item.likeCounts - 1,
                                isLiked: !item.isLiked,
                            };
                        }
                    } else {
                        return item;
                    }
                }),
            );
        } catch (error) {
            console.log('Error:', error.message);
        }
    };



// 追蹤功能
	const handleFollowToggle = async (otherUserId) => {
		setIsFollowed(!isFollowed);
		try {
			const authToken = localStorage.getItem('token');
			if (!authToken) {
				navigate('/login');
				return;
			}
			const userLoginID = localStorage.getItem('userId');
			console.log(authToken);
			const followingList = await getFollowingList(userLoginID, authToken);

			if (followingList.some((popular) => popular.id === otherUserId)) {
				deleteFollow(otherUserId, authToken);
			} else {
				postFollow(otherUserId, authToken);
			}
		} catch (error) {
			console.error(error);
		}
	};

// 獲取其它使用者個人資料
	const fetchOtherUserData = async (otherUserId) => {
		try {
			const authToken = localStorage.getItem('token');
			if (!authToken) {
				navigate('/login');
				return;
			}
			// 個人資料
			const data = await getUserData(otherUserId, authToken);
			setOtherUserData(data);

			// 個人推文
			const tweets = await getUserTweets(otherUserId, authToken);
			setUserTweets(tweets);

			// 個人回覆推文
			const replyTweets = await getUserReplyTweets(otherUserId, authToken);
			setUserReplyTweets(replyTweets);

			// 個人喜歡推文
			const likeTweets = await getUserLikeTweets(otherUserId, authToken);
			setUserLikeTweets(likeTweets);
		} catch (error) {
			console.error(error);
		}
	};

// 點擊他人頭像和名字之連結
	function handleOtherClick(otherUserId) {
		if (otherUserId === userData.id) {
			setActiveSection('userProfile');
		} else {
			setActiveSection('otherProfile');
			fetchOtherUserData(otherUserId);
		}
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
					onTweetLink={handleTweetLink}
					tweetAuth={getTweet}
					replyList={replies}
					User={userData}
					onToReplyModal={handleToReplyModal}
					onLike={handleLikeClick}
					tweets={tweets}
					onOtherClick={handleOtherClick}
					otherUserID={otherUserData}
					userTweets={userTweets}
					userReplyTweets={userReplyTweets}
					userLikeTweets={userLikeTweets}
					otherUserData={otherUserData}
					OtherUserTweets={userTweets}
					onFollowClick={handleFollowToggle}
					isFollowed={isFollowed}
					onTweetLikeClick={handleReplyPageLikeClick}
				/>
			</div>
			<div className={styles.popularListSection}>
				<PopularList onOtherClick={handleOtherClick} onFollowToggle={handleFollowToggle} />
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
					author={getTweet}
					userData={userData}
					onReplyClick={handleReplyClick}
					onCloseModal={handleReplyModalClose}
					onTextChange={handleTextChange}
					texts={replyText}
					prompts={prompt}
				/>
			</div>
		</div>
  )
}





export default Main;
