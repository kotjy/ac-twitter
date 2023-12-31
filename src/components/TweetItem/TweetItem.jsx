import styles from './TweetItem.module.scss'
import replyIcon from '../../assets/reply.svg'
import likeIcon from '../../assets/like.svg'
import fakeAvatar from '../../assets/fake-avatar.svg';
import { Link } from 'react-router-dom';

function TweetItem () {
return(
  <Link className={styles.hrefContainer} to='appleTweet'>
    <div className={styles.container} >
     <Link className={styles.avatar} to='apple'>
      <img src={fakeAvatar} alt="" />
     </Link>

     <div className={styles.infoSection}>
      <div className={styles.nameSection}>
        <div className={styles.nickname}>Apple</div>
        <div className={styles.accountAndPeriod}>@apple．3小時</div>
      </div>
      <div className={styles.contentSection}>
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
				Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
      </div>
      <div className={styles.ReplyAndLike}>
        <Link className={styles.counter} to='replyModal'>
          <img src={replyIcon} alt="" /> 13
        </Link>
         <Link className={styles.counter} to='toLike'>
          <img src={likeIcon} alt="" /> 76
        </Link>
      </div>
     </div>
    </div>
  </Link>
)
}
export default TweetItem;