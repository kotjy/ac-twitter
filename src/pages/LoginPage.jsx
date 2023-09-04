import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
 
const  {success, data, errorMessage } = 
await login({account,password});


if (success) {     
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.user.id);   
    localStorage.setItem('role', data.user.role); 
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
        title:errorMessage || '登入失敗',
        timer: 1000,
        icon: 'error',
        showConfirmButton: false,
      });
}
}



return (
    <div className={styles.container}>
      <AClogo/>
      <h1>登入 Alphitter</h1>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="帳號"
         placeholder= '請輸入帳號'
         value={account}
         onChange={(Input)=>setAccount(Input)} 
         />
      </div>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         type = 'password'
         placeholder= '請輸入密碼'
         label="密碼"
         value={password}
         onChange={(input)=>setpassWord(input)} 
         />
      </div>
     
      <button className={styles.Authbutton} onClick={handleClick}>登入</button>
     
      <div className={styles.LinkContainer}>
      <Link to="/signup">
      <u className={styles.LinkText}>註冊</u>
      </Link>
      <span className={styles.LinkText}>.</span>
      <Link to="/admin">
      <u className={styles.LinkText}>後台登入</u>
      </Link>
      </div>
    </div>
)

}
export default LoginPage