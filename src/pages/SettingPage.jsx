import AuthInput from '../components/AuthlesInput/AuthesInput'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react';
import { setting, setpassword } from '../api/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SettingPage = () => {

   const [account, setaccount]=useState('')
   const [password, setpassWord]=useState('')
   const [name, setname]=useState('')
   const [email, setemail]=useState('')
   const [checkPassword, setcheckPassword]=useState('')
   const navigate = useNavigate();
   
   useEffect(() => {
      
      const getinputData = async () => {
        try {
         const userId = localStorage.getItem('userId');
		   const authToken = localStorage.getItem('token');
          const res = await setting(userId,authToken);
          setaccount(res.data.account);
          setname(res.data.name);
          setemail(res.data.email);
           
        } catch (error) {
          console.error(error);
        }
      };   
      getinputData();
    }, []);

   const userId =  localStorage.getItem('userId');
   const handleSaveClick = async (e) =>{
      e.preventDefault();
      const { success, data } = await setpassword({password, email, name, userId, account, checkPassword})
     
      if (success && password===checkPassword) {
         localStorage.setItem('data', data);
         Swal.fire({
           position: 'top',
           title: '設定成功！',
           timer: 1000,
           icon: 'success',
           showConfirmButton: false,
         });
         navigate('/login')
         return;
       }
       Swal.fire({
         position: 'top',
         title: '設定失敗！',
         timer: 1000,
         icon: 'error',
         showConfirmButton: false,
       });
      
   }

    return(
        <div className={styles.SettingContainer}>
        <div className={styles.SettingDiv}> 
        
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="帳號"
           value={account}
           onChange={(input)=>setaccount(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="名稱"
           value={name}
           onChange={(input) =>setname(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           label="Email"
           value={email}
           onChange={(input)=>setemail(input)} 
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           type = 'password'
           label="密碼"
           value={password}
           onChange={(input)=>setpassWord(input)}  
           />
        </div>
        <div className={styles.SettingInputContainer}>
           <AuthInput
           type = 'password'
           label="確認密碼"
           value={checkPassword}
           onChange={(input)=>setcheckPassword(input)} 
           />
        </div>
        <div className={styles.ButtonContainer}>
        <button className={styles.Authbutton} onClick={handleSaveClick}>儲存</button>
        </div>
        </div>
        </div>
    )
    }
    
    export default SettingPage