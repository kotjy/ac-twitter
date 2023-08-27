import styled from './followList.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AdminTweets } from '../AdminTweetList.jsx/AdminTweetList';
//api


export function FollowButton ({ tweetId, followingList, setFollowingList, setFollowedList}) {
   const following = followingList.find( (item) => item.id === tweetId);
   const isNotFollow = typeof following === 'undefined' || !following;
   const [follow, setFollow] = useState(following);

  //按鈕和api功能



  return(
   <button 
     className={follow ? styled.followingButton : styled.followButton} >
      {follow ? '正在跟隨' : '跟隨'}
     </button>
  );

}

function FollowList ({ activeSection, setActiveSection}) {
  const navigate = useNavigate();
	const [followedList, setFollowedList] = useState([]);
	const [followingList, setFollowingList] = useState([]);

  //button api

  return(
    <div>
			{/* 追隨者、正在追隨按鈕 */}
			<div className={styled.statusButtonWrap}>
				<div className={activeSection === 'follower' ? styled.buttonWrap : ''}>
					<button
						className={activeSection === 'follower' ? styled.activeButton : styled.button}
						
					>
						追隨者
					</button>
				</div>

				<div className={activeSection === 'following' ? styled.buttonWrap : ''}>
					<button
						className={activeSection === 'following' ? styled.activeButton : styled.button}
						
					>
						正在追隨
					</button>
				</div>
			</div>

			<div>
				{/* 追隨者 */}
				{activeSection === 'follower' && (
					<div>
						<ul className={styled.ul}>
							<AdminTweets
								userTweets={followedList}
								activeSection={activeSection}
								followingList={followingList}
								setFollowingList={setFollowingList}
								setFollowedList={setFollowedList}
							/>
						</ul>
					</div>
				)}

				{/* 正在追隨 */}
				{activeSection === 'following' && (
					<div>
						<ul className={styled.ul}>
							<AdminTweets 
								userTweets={followingList}
								activeSection={activeSection}
								followingList={followingList}
								setFollowingList={setFollowingList}
								setFollowedList={setFollowedList}
							/>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default FollowList;
