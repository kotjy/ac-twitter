import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/auth';
import Swal from 'sweetalert2';

const LoginPage = () => {
const [account, setAccount]=useState('')
const [password, setpassWord]=useState('')

const handleClick = async ()=> {
if(account.length === 0){
    return;
}
if(password.length === 0){
    return;
}
 
const res = await login({account,password});
console.log(res.data)
console.log(res.status)
if (res.status==='success') {
    localStorage.setItem('token',res.data.token);
    Swal.fire({
      position:'top',
      title:'登入成功',
      timer: 1000,
      icon: 'success',
      showConfirmButton: false,
    })
    return;    
}else if(res.status!=='success'){
    Swal.fire({
        position:'top',
        title:'登入失敗',
        timer: 1000,
        icon: 'error',
        showConfirmButton: false,
      });
}
}



return (
    <div className={styles.Container}>
      <AClogo/>
      <h1>登入 Alphitter</h1>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="帳號"
         value={account}
         onChange={(Input)=>setAccount(Input)} 
         />
      </div>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="密碼"
         value={password}
         onChange={(input)=>setpassWord(input)} 
         />
      </div>
      {/* <Link to='/main' className={styles.LinkStyle}> */}
      <button className={styles.Authbutton} onClick={handleClick}>登入</button>
      {/* </Link> */}
      <div className={styles.LinkContainer}>
      <u className={styles.LinkText}>註冊 Alphitter</u>
      <span className={styles.LinkText}>.</span>
      <u className={styles.LinkText}>後台登入</u>
      </div>
    </div>
)

}
export default LoginPage