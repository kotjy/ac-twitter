import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'

const AdminPage = () => {
return(
    <container className={styles.Container}>
        
      <div>
      <AClogo/>
      </div>
      <h1>後台登入</h1>
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
      <div className={styles.LinkContainer}>
      <u className={styles.EndLinkText}>前台登入</u>
      </div>
    </container>
)


}

export default AdminPage