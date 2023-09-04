import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
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
      const elementsToCheck = [
         { element: account, errorMessage: '帳號不可為空' },
         { element: name, errorMessage: '名稱不可為空' },
         { element: email, errorMessage: '信箱不可為空' },
         { element: password, errorMessage: '密碼不可為空' },
         { element: checkPassword, errorMessage: '密碼不可為空' },
     ];
     
     for (const { element, errorMessage } of elementsToCheck) {
         if (element.length === 0) {
             alert(errorMessage);
             return;
         }
     }

      
         if (account.length > 50) {
			alert('帳號字數不可超過 50 字!');
			return;
		} else if (name.length > 50) {
			alert('名稱字數不可超過 50 字!');
			return;
      } else if (password !== checkPassword) {
			alert('密碼與密碼確認不相同');
			return;
		}
   
      const { success, data ,errorMessage} = await signup({
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
         title:errorMessage || '登入失敗',
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
           placeholder= '請輸入帳號'
           value={account}
           onChange={(input)=>setaccount(input)} 
           />
           {account.length > 50 && (
                    <span className={styles.ErrorMessage}>帳號字數不可超過 50 字!</span>
                )}
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="名稱"
           placeholder= '請輸入名稱'
           value={name}
           onChange={(input) =>setname(input)} 
           />
           {name.length > 50 && (
                    <span className={styles.ErrorMessage}>名稱字數不可超過 50 字!</span>
                )}
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           label="Email"
           placeholder= '請輸入Email'
           value={email}
           onChange={(input)=>setemail(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           type = 'password'
           label="密碼"
           placeholder= '請輸入密碼'
           value={password}
           onChange={(input)=>setpassWord(input)} 
           />
        </div>
        <div className={styles.AuthInputContainer}>
           <AuthInput
           type = 'password'
           label="密碼確認"
           placeholder= '請再次輸入密碼'
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