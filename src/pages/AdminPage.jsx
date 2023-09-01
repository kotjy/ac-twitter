import AuthInput from '../components/AuthlesInput/AuthesInput'
import { ReactComponent as AClogo} from '../assets/alphacamp-logo.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { admin } from '../api/auth';
import Swal from 'sweetalert2';

const AdminPage = () => {
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
     
    const  {success, data } = 
    await admin({account,password});
    console.log(data)
    console.log(success)
    
    if (success) {     
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user.id);    
    
        Swal.fire({
          position:'top',
          title:'登入成功',
          timer: 1000,
          icon: 'success',
          showConfirmButton: false,
        })
        navigate('/admin_main')
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


return(
    <div className={styles.container}>
        
      <div>
      <AClogo/>
      </div>
      <h1>後台登入</h1>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="帳號"
         value={account}
         onChange={(input)=>setAccount(input)} 
         />
      </div>
      <div className={styles.AuthInputContainer}>
         <AuthInput
         label="密碼"
         value={password}
         onChange={(input)=>setpassWord(input)} 
         />
      </div>
      <button className={styles.Authbutton} onClick={handleClick}>登入</button>
      <div className={styles.LinkContainer}>
      <Link to='/login'>  
      <u className={styles.EndLinkText}>前台登入</u>
      </Link>
      </div>
    </div>
)


}

export default AdminPage