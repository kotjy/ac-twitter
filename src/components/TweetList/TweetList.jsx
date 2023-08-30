import styles from './tweetList.module.scss'
import replyIcon from '../../assets/reply.svg'
import likeIcon from '../../assets/like.svg'
import redLikeIcon from '../../assets/redLike.svg'

function TweetList({ onTweetClick, onReplyClick, onLikeClick, tweetList, onOtherClick }) {
	const listItems = tweetList?.map((item) => (
		<div className={styles.itemContainer} key={item?.id}>
			<div
				className={styles.avatar}
				onClick={() => {
					onOtherClick(item?.User?.id);
				}}
			>
				<img src={item?.User?.avatar} />
			</div>
			<div className={styles.infoSection}>
				<div className={styles.nameSection}>
					<div
						className={styles.name}
						onClick={() => {
							onOtherClick(item?.User?.id);
						}}
					>
						{item?.User?.name}
					</div>
					<div className={styles.accountAndPeriod}>
						<div
							onClick={() => {
								onOtherClick(item?.User?.id);
							}}
						>{`@${item?.User?.account}．`}</div>
						{`${item?.createdAt}`}
					</div>
				</div>
				<div
					className={styles.contentSection}
					onClick={() => {
						onTweetClick(item?.User?.id);
					}}
				>
					{item?.description}
				</div>
				<div className={styles.ReplyAndLike}>
					<div
						className={styles.counter}
						onClick={() => {
							onReplyClick(item?.User?.id);
						}}
					>
						<img src={replyIcon} />
						{item?.replyCount}
					</div>
					<button
						className={styles.counter}
						onClick={() => {
							onLikeClick(item?.User?.id);
						}}
					>
						{item?.isLiked ? <img src={redLikeIcon} /> : <img src={likeIcon} />}
						{item?.likeCount}
					</button>
				</div>
			</div>
		</div>
	));

	return <div className={styles.container}>{listItems}</div>;
}

export default TweetList;
