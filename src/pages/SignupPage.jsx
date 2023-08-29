import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react';
import { signup } from '../api/auth';

const SignupPage = () => {
    const [account, setaccount]=useState('')
    const [passWord, setpassWord]=useState('')
    const [Name, setName]=useState('')
    const [Email, setEmail]=useState('')
    const [Surepassword, setSurepassword]=useState('')

   const handleClick = async () =>{
      const signupElement = [account, Name, Email, passWord, Surepassword]

      for(const element of signupElement){
         if(element.length===0){
            return
         }
      }

      const { success, token } = await signup({
      account, Name, Email, passWord, Surepassword});
      console.log(success)
      console.log(token)
   }

    return(
        <div className={styles.Container}>
        
        <AClogo/>
        <h1>建立你的帳號</h1>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="帳號"
           value={account}
           onChange={(input)=>setaccount(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="名稱"
           value={Name}
           onChange={(input) =>setName(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="Email"
           value={Email}
           onChange={(input)=>setEmail(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="密碼"
           value={passWord}
           onChange={(input)=>setpassWord(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="密碼確認"
           value={Surepassword}
           onChange={(input)=>setSurepassword(input)} 
           />
        </div>
        <button className={styles.Authbutton} onClick={handleClick}>註冊</button>
  
        <div>
        <u className={styles.LinkText}>取消</u>
        </div>
      </div>
    )
    
    
    }
    
    export default SignupPage