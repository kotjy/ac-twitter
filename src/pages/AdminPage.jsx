import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [userName, setUserName]=useState('')
    const [passWord, setpassWord]=useState('')
    

return(
    <container className={styles.Container}>
        
      <div>
      <AClogo/>
      </div>
      <h1>後台登入</h1>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="帳號"
         value={userName}
         onChange={(input)=>setUserName(input)} 
         />
      </div>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="密碼"
         value={passWord}
         onChange={(input)=>setpassWord(input)} 
         />
      </div>
      <button className={styles.Authbutton}>登入</button>
      <div className={styles.LinkContainer}>
      <u className={styles.EndLinkText}>前台登入</u>
      </div>
    </container>
)


}

export default AdminPage