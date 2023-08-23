import styles from './TweetModal.module.scss'
import fakeAvatar from '../../assets/fake-avatar.svg'
import TextareaAutosize from 'react-textarea-autosize'
import IconX from '../../assets/X-icon.svg'
import { useMainFunction } from '../../contexts/MainContext'
import { Link } from 'react-router-dom'

export function TweetModal ({onCloseModal, onPostTweetClick, onTextChange, userData}) {

  const {texts, prompts} = useMainFunction();
  const account = userData?.User?.account;

  return(
    <div className = {styles.container}>
      <Cover />
     <div className={styles.tweetModalContainer}>
       <div className={styles.tweetModal}>
        <div className={styles.modalHead}>
          <div className={styles.iconX} onClick={onCloseModal}>
            <img src={IconX} />
          </div>
        </div>
        <div className={styles.section}>
         <Link className={styles.img} to={`/${account}`}>
          <img src={userData?.avatar || fakeAvatar} />
         </Link>
         <TextareaAutosize 
         className={styles.inputTweet}
         placeholder='有什麼新鮮事？'
         value={texts}
         autoFocus
         onChange={onTextChange}
         />
        </div>
        <div className={styles.modalbottom}>
          <span >{prompts}</span>
          <button className={styles.tweetButton} onClick ={onPostTweetClick}>
            推文
          </button>
        </div>
       </div>
     </div>
    </div>
  );
 
}

function Cover() {
  return <div className={styles.cover}></div>;
}

export default TweetModal;