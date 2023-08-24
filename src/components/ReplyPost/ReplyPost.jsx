import styles from './ReplyPost.module.scss'
import reply from '../../assets/reply.svg'
import like from '../../assets/like.svg'
import redLike from '../../assets/redLike.svg'
import fakeAvatar from '../../assets/fake-avatar.svg'

//假資料記得替代 
function ReplyPost ({tweet, onReplyClick, onOtherClick, onLikeClick}) {

return(
  <div className={styles.container}>
    <div className={styles.avatarAndname}>
      <div className={styles.avatar} onClick={onOtherClick}>
        <img src={fakeAvatar}  />
      </div>
      <div className={styles.nameSection}>
        <div className={styles.nickname} onClick={onOtherClick}>
          {tweet?.User?.name} hannah
          </div>
      <div className={styles.accountName} onClick={onOtherClick}>
        @{tweet?.User?.account}
      </div>
     </div>
    </div>

    <div className={styles.infoSection}>
     <div className={styles.contentSection}>aaadsffde</div>
     <div className={styles.postTime}>101.12.09</div>

     <div className={styles.replyAndLikes}>
      <div className={styles.counter}>
        {tweet?.replyCounts} <span>&nbsp;回覆</span>
      </div>
      <div className={styles.counter}>
        {tweet?.likeCounts} <span>&nbsp;喜歡次數</span>
      </div>
     </div>
    <div className={styles.Icons}>
     <div className={styles.icon}  onClick={onReplyClick}>  {/*補充功能*/}
      <img src={reply} />
     </div>

     <button className={styles.icon} onClick={ () => {onLikeClick(tweet?.id)}}>
       <img src={redLike} />
      {/*
      {tweet.isLiked ? <img src={redLike} /> : <img src={like} />} {/*api property isLike*/}
      
     </button>
    </div>
    </div>
  </div>
);
  
}

export default ReplyPost ;