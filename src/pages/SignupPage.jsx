import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import Swal from 'sweetalert2';


const SignupPage = () => {
    const [account, setaccount]=useState('')
    const [password, setpassWord]=useState('')
    const [name, setname]=useState('')
    const [email, setemail]=useState('')
    const [checkPassword, setcheckPassword]=useState('')
    const navigate = useNavigate();


   const handleClick = async (e) =>{
      e.preventDefault();
      const signupElement = [account, name, email, password, checkPassword]

      for(const element of signupElement){
         if(element.length===0){
            return
         }
      }

      const { success, data } = await signup({
      account, name, email, password, checkPassword});

      if (success && password===checkPassword) {
         localStorage.setItem('data', data);
         Swal.fire({
           position: 'top',
           title: '註冊成功！',
           timer: 1000,
           icon: 'success',
           showConfirmButton: false,
         });
         navigate('/login')
         return;
       }
       Swal.fire({
         position: 'top',
         title: '註冊失敗！',
         timer: 1000,
         icon: 'error',
         showConfirmButton: false,
       });
   }
   

    return(
        <div className={styles.container}>
        
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
           value={name}
           onChange={(input) =>setname(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="Email"
           value={email}
           onChange={(input)=>setemail(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           type = 'password'
           label="密碼"
           value={password}
           onChange={(input)=>setpassWord(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           type = 'password'
           label="密碼確認"
           value={checkPassword}
           onChange={(input)=>setcheckPassword(input)} 
           />
        </div>
        <button className={styles.Authbutton} onClick={handleClick}>註冊</button>
  
        <div>
        <Link to="/login">
        <u className={styles.LinkText}>取消</u>
        </Link>
        </div>
      </div>
    )
    
    
    }
    
    export default SignupPage