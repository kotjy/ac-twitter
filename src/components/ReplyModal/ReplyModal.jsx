import styles from './ReplyModal.module.scss'
import TextareaAutosize from 'react-textarea-autosize'
import { useMainFunction } from '../../contexts/MainContext'
import IconX from '../../assets/X-icon.svg'
import fakeAvatar from '../../assets/fake-avatar.svg'
import { Link } from 'react-router-dom'

function ReplyModal({onCloseModal, author, onReplyClick, onTextChange, prompts,texts}) {
  const { userData } = useMainFunction();
  const account = userData?.User?.account
  
  //avatar待修正

  return(
    <div className={styles.container}>
      <Cover/>
      <div className={styles.replyModalContainer}>
        <div className={styles.modalHead}>
          <div className={styles.iconX} onClick={onCloseModal}>
             <img src={IconX} />
          </div>
        </div>
         
        <div className={styles.tweetSection}>
          <Link className={styles.avatar} to={`/${account}`}>
            <img src={ author?.User?.avatar ||fakeAvatar} /> 
            <div className={styles.line}></div>
          </Link>
          <div className={styles.infoSection}>
            <div className={styles.nameSection}>
              <div className={styles.nickname}> {author?.User?.name}</div>
              <div className={styles.accountAndPeriod}>
                @{author?.User?.account}．{author?.createdAt}
              </div>
            </div>
          <div className={styles.contentSection}>{author?.description} </div>
          <div className={styles.replyTo}>
            回覆給&nbsp; <span>{author?.User?.account}</span>
          </div>
          </div>
        </div>
          <div className={styles.replySection}>
            <div className={styles.img}>
              <img src={userData?.avatar} />
            </div>
            <TextareaAutosize
              className={styles.inputReply}
              placeholder='推你的回覆'
              value={texts}
              onChange={onTextChange}
              autoFocus
              />
          </div>
          <div className={styles.modalBottom}>
            <span>{prompts}</span>
            <div className={styles.warnning}>內容不可空白</div>
            <button
             className={styles.replyButton} 
             onClick={()=> { onReplyClick(author?.id)}}> 
              回覆
             </button>
          </div>
      </div>
    </div>
  )
}

export function Cover() {
  return <div className={styles.cover}></div>
}

export default ReplyModal;