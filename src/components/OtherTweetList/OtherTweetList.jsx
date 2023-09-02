import styles from './OtherTweetList.module.scss'
import replyIcon from '../../assets/reply.svg'
import likeIcon from '../../assets/like.svg'


function OtherTweetList ({tweetList}) {
  const listItems = tweetList?.map((item) => (
		<div className={styles.itemContainer} key={item?.id}>
			<div className={styles.avatar}>
				{/*eslint-disable-next-line jsx-a11y/alt-text*/}
				<img src={item?.User?.avatar} />
			</div>
			<div className={styles.infoSection}>
				<div className={styles.nameSection}>
					<div className={styles.name}>{item?.User?.name}</div>
					<div className={styles.accountAndPeriod}>
						<div>{`@${item?.User?.account}．`}</div>
						{`${item?.createdAt}`}
					</div>
				</div>
				<div className={styles.contentSection}>{item?.Tweet?.description}</div>
				<div className={styles.ReplyAndLike}>
					<div className={styles.counter}>
							{/*eslint-disable-next-line jsx-a11y/alt-text*/}
						<img src={replyIcon} />
						{item?.replyCounts}
					</div>
					<button className={styles.counter}>
							{/*eslint-disable-next-line jsx-a11y/alt-text*/}
						<img src={likeIcon} />
						{item?.likeCounts}
					</button>
				</div>
			</div>
		</div>
	));

  return <div className={styles.container}> {listItems}</div>
}

export default OtherTweetList;