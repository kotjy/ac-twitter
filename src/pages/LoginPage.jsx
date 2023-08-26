import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
const [userName, setUserName]=useState('')
const [passWord, setpassWord]=useState('')

const handleClick = async ()=> {
if(userName.length = 0){
    return;
}
if(passWord.length = 0){
    return;
}
}
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
      <Link to='/main' className={styles.LinkStyle}>
      <button className={styles.Authbutton} onClick={handleClick}>登入</button>
      </Link>
      <div className={styles.LinkContainer}>
      <u className={styles.LinkText}>註冊 Alphitter</u>
      <span className={styles.LinkText}>.</span>
      <u className={styles.LinkText}>後台登入</u>
      </div>
    </container>
)

}
export default LoginPage