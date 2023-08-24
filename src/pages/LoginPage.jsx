import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react';

const LoginPage = () => {
const [userName, setUserName]=useState('')
const [passWord, setpassWord]=useState('')

return (
    <container className={styles.Container}>
        
      <div>
      <AClogo/>
      </div>
      <h1>登入 Alphitter</h1>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="帳號"
         value={userName}
         onChange={(Input)=>setUserName(Input)} 
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
      <u className={styles.LinkText}>註冊 Alphitter</u>
      <span className={styles.LinkText}>.</span>
      <u className={styles.LinkText}>後台登入</u>
      </div>
    </container>
)

}
export default LoginPage