import AuthInput from '../compoments/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'

const RegisterPage = () => {
    return(
        <container className={styles.Container}>
        
        <div>
        <AClogo/>
        </div>
        <h1>建立你的帳號</h1>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="帳號"
           value="" 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="名稱"
           value="" 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="Email"
           value="" 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="密碼"
           value="" 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="密碼確認"
           value="" 
           />
        </div>
        <button className={styles.Authbutton}>註冊</button>
  
        <div>
        <u className={styles.LinkText}>取消</u>
        </div>
      </container>
    )
    
    
    }
    
    export default RegisterPage