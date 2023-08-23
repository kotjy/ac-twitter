import AuthInput from '../compoments/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'

const LoginPage = () => {

return (
    <container className={styles.Container}>
        
      <div>
      <AClogo/>
      </div>
      <h1>登入 Alphitter</h1>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="帳號"
         value="" 
         />
      </div>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="密碼"
         value="" 
         />
      </div>
      <button className={styles.Authbutton}>登入</button>

      <div>
      <u className={styles.LinkText}>註冊 Alphitter</u>
      <span className={styles.LinkText}>.</span>
      <u className={styles.LinkText}>後台登入</u>
      </div>
    </container>
)

}
export default LoginPage