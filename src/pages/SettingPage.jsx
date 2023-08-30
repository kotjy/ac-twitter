import AuthInput from '../components/AuthlesInput/AuthesInput'
import styles from './LoginPage.module.css'
import SideBar from '../components/SideBar/SideBar'
import { useEffect, useState } from 'react';
import { setting } from '../api/auth';

const SettingPage = () => {


   const [account, setaccount]=useState('')
   const [password, setpassWord]=useState('')
   const [name, setname]=useState('')
   const [email, setemail]=useState('')
   const [checkPassword, setcheckPassword]=useState('')
   
   


    return(
        <div className={styles.SettingContainer}>
        <div className={styles.SettingSidebar}> 
        <SideBar
        
        />
        </div>
        <div className={styles.SettingDiv}> 
        <div className="">
        <p><b>帳戶設定</b></p>
        <hr></hr>
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="帳號"
           value={account}
           onChange={(input)=>setaccount(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="名稱"
           value={name}
           onChange={(input) =>setname(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="Email"
           value={email}
           onChange={(input)=>setemail(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           type = 'password'
           label="密碼"
           value={password}
           onChange={(input)=>setpassWord(input)}  
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           type = 'password'
           label="確認密碼"
           value={checkPassword}
           onChange={(input)=>setcheckPassword(input)} 
           />
        </div>
        <div className={styles.ButtonContainer}>
        <button className={styles.Authbutton}>儲存</button>
        </div>
        </div>
        </div>
    )
    }
    
    export default SettingPage