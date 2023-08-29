import AuthInput from '../components/AuthlesInput/AuthesInput'
import styles from './LoginPage.module.css'
import SideBar from '../components/SideBar/SideBar'
import { useEffect, useState } from 'react';

const SettingPage = () => {
    const [userName, setUserName]=useState('')
    const [passWord, setpassWord]=useState('')
    const [Name, setName]=useState('')
    const [Email, setEmail]=useState('')
    const [Surepassword, setSurepassword]=useState('')

    return(
        <div className={styles.SettingContainer}>
        <div className={styles.SettingSidebar}> 
        <SideBar/>
        </div>
        <div className={styles.SettingDiv}> 
        <div className="">
        <p><b>帳戶設定</b></p>
        <hr></hr>
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="帳號"
           value={userName}
           onChange={(input)=>setUserName(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="名稱"
           value={Name}
           onChange={(input) =>setName(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="Email"
           value={Email}
           onChange={(input)=>setEmail(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="密碼"
           value={passWord}
           onChange={(input)=>setpassWord(input)}  
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="確認密碼"
           value={Surepassword}
           onChange={(input)=>setSurepassword(input)} 
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