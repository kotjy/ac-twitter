import styles from './ReplyPost.module.scss'
import reply from '../../assets/reply.svg'
import like from '../../assets/like.svg'
import redLike from '../../assets/redLike.svg'



function ReplyPost ({tweet, onReplyClick, onOtherClick, onLikeClick}) {

return(
  <div className={styles.container}>
    <div className={styles.avatarAndname}>
      <div className={styles.avatar} onClick={onOtherClick}>
        	{/*eslint-disable-next-line jsx-a11y/alt-text*/}
       	<img src={tweet?.User?.avatar} />
      </div>
      <div className={styles.nameSection}>
        <div className={styles.nickname} onClick={onOtherClick}>
          {tweet?.User?.name}
          </div>
      <div className={styles.accountName} onClick={onOtherClick}>
        @{tweet?.User?.account}
      </div>
     </div>
    </div>

    <div className={styles.infoSection}>
     <div className={styles.contentSection}>{tweet?.description}</div>
     <div className={styles.postTime}>{tweet?.createdAt}</div>

     <div className={styles.replyAndLikes}>
      <div className={styles.counter}>
        {tweet?.replyCount} <span>&nbsp;回覆</span>
      </div>
      <div className={styles.counter}>
        {tweet?.likeCount} <span>&nbsp;喜歡次數</span>
      </div>
     </div>
    <div className={styles.Icons}>
     <div className={styles.icon}  onClick={() => {
							onReplyClick(tweet?.id);
						}}> 
            	{/*eslint-disable-next-line jsx-a11y/alt-text*/}
      <img src={reply} />
     </div>

     <button className={styles.icon} onClick={ () => {onLikeClick(tweet?.id)}}>
       	{/*eslint-disable-next-line jsx-a11y/alt-text*/}
      {tweet.isLiked ? <img src={redLike} /> : <img src={like} />}
      
     </button>
    </div>
    </div>
  </div>
);
  
}

export default ReplyPost ;