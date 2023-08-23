import styles from './TweetInput.module.scss'
import fakeAvatar from '../../assets/fake-avatar.svg'
import {useMainFunction} from '../../contexts/MainContext'

function TweetInput ({onToTweetClick, onOtherClick}) {
 const { useData } = useMainFunction();

 return(
  <div className={styles.selfTweetSection}>
    <div className={styles.section}>
      <div className={styles.img} onClick={onOtherClick}>
        <img src={ useData?.avatar  ||  fakeAvatar }/>
      </div>

      <div className={styles.toTweetModal} onClick={onToTweetClick}>
        有什麼新鮮事？
      </div>
    </div>

      <div className={styles.tweetButton} onClick={onToTweetClick}>
        推文
      </div>
  </div>
 )
}
export default TweetInput;