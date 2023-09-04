import styles from './PopularList.module.scss'

import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { recommendedFollowList } from '../../api/followship';
import { postFollow, deleteFollow } from '../../api/followship';

function PopularList({onOtherClick}) {
const [populars, setPopulars] = useState([]);
const navigate = useNavigate();

// 追蹤功能
	async function handleFollowToggle(id) {
		try {
			const authToken = localStorage.getItem('token');

			if (!authToken) {
				navigate('/login');
				return;
			}
			const userId = id;
			console.log(authToken);
			if (populars.some((popular) => popular.id === id && popular.isFollowed)) {
				await deleteFollow(authToken, userId);
			} else {
				await postFollow(authToken, userId);
			}

			setPopulars((prevPopulars) => {
				return prevPopulars.map((popular) => {
					if (popular.id === id) {
						return {
							...popular,
							isFollowed: !popular.isFollowed,
						};
					} else {
						return popular;
					}
				});
			});
		} catch (error) {
			console.error(error);
		}
	}



  const listItems = populars.map((popular) => (
		<div className={styles.otherCard} key={popular.id}>
			<div
				className={styles.avatar}
				onClick={() => {
					onOtherClick(popular?.id);
				}}
			>
					{/*eslint-disable-next-line jsx-a11y/alt-text*/}
				<img src={popular.avatar} />
			</div>
			<div className={styles.other}>
				<div
					className={styles.nickname}
					onClick={() => {
						onOtherClick(popular?.id);
					}}
				>
					{popular.name}
				</div>
				<div
					className={styles.accountName}
					onClick={() => {
						onOtherClick(popular?.id);
					}}
				>
					@{popular.account}
				</div>
			</div>
			<button
				onClick={() => handleFollowToggle(popular.id)}
				className={`${styles.btnFollow} ${
					popular.isFollowed ? styles.following : styles.notFollowing
				}`}
			>
				{popular.isFollowed ? '正在跟隨' : '跟隨'}
			</button>
		</div>
	));
  useEffect(() => {
		const getPopularsAsync = async () => {
			try {
				const authToken = localStorage.getItem('token');
				const popular = await recommendedFollowList(authToken);
				if (!authToken) {
					navigate('/login');
					return;
				}
				setPopulars(popular.map((popular) => ({ ...popular })));
			} catch (error) {
				console.error(error);
			}
		};
		
		getPopularsAsync();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


return (
  <div className={styles.container}>
     <div className={styles.topic}>
      <p>推薦跟隨</p>
     </div>
     <div className= {styles.others}>
      {listItems}
     </div>
  </div>
)
}

export default PopularList;