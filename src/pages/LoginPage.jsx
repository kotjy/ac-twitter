import {AuthInput} from '../compoments/AuthesInput'
import { ReactComponent as AClogo} from '..assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'

const LoginPage = () => {

return (
    <container>
      <div>
        <AClogo/>
      </div>
      <h1>登入 Todo</h1>
      <div className={styles.authInputContainer}>
         <AuthInput
         label="帳號"
         placeholder="請輸入帳號"
         value="" 
         />
      </div>
    </container>
)

}
export default LoginPage