import styles from './PopularList.module.scss'

import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'

function PopularList({onOtherClick}) {
const [populars, setPopulars] = useState([]);
const navigate = useNavigate();

//追蹤功能


  const listItems = populars.map((popular) => (
   <div className={styles.otherCard} key={popular.id}>
     <div 
      className={styles.avatar}
      onClick ={ () => {
       onOtherClick(popular?.id)
      }}>
      <img src ={popular.avatar} />
     </div>
     <div className={styles.other}>
      <div
      className={styles.nickname}
      onClick = { () => {
          onOtherClick(popular?.id)
      }}>
        {popular.name}
      </div>
      <div 
      className={styles.accountName}
      onClick ={ () => {
         onOtherClick(popular?.id)
      }}>
        {popular.account}
      </div>
     </div>
     <button 
     //api
     className= {`${styles.btnFollow} ${popular.isfollowed ? styles.following : styles.notFollowing}`}> 
      {popular.isfollowed ? '正在跟隨' : '跟隨'}
     </button>
   </div>
  ))

  //useEffect 串api 


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