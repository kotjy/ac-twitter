import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import Swal from 'sweetalert2';

const LoginPage = () => {
const [account, setAccount]=useState('')
const [password, setpassWord]=useState('')
const navigate = useNavigate();

const handleClick = async (e)=> {
  e.preventDefault();
if(account.length === 0){
    alert('請輸入帳號！')
    return;
}
if(account.length > 50){
  alert('帳號字數不可超過 50 字!')
    return;
}
if (password === '') {
			alert('請輸入密碼!');
			return;
		}
 
const  {success, token, data } = 
await login({account,password});


if (success) {     
    localStorage.setItem('token', token);
    localStorage.setItem('userId', data.user.id);
    


    Swal.fire({
      position:'top',
      title:'登入成功',
      timer: 1000,
      icon: 'success',
      showConfirmButton: false,
    })
    navigate('/main')
    return;    
}else{
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