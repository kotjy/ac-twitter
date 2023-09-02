import axios from 'axios';

const authUrl = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'
//登入
export const login = async({account,password}) =>{
     try{
     
    const {data} = await axios.post(`${authUrl}/users/signin`, {account,password});
      return { success: true, ...data }
    }catch(error){
        console.error(error)
        return { success: false};
    }
}

//註冊
export const signup = async({account, name, email, password, checkPassword}) =>{
try{
 const {data} = await axios.post(`${authUrl}/users`, 
 {account,name,email, password,checkPassword});
  return { success: true, data };
}catch(error){
    console.error('[Signup Failed]:', error)
    return { success: false}; 
}
}

//設定

export const setting = async(userId, token) =>{
    try{ 
   const response = await axios.get(`${authUrl}/users/${userId}/setting`,{
    headers: {
        Authorization: 'Bearer ' + token,
    },
});

     return response
   }catch(error){
       console.error(`Error setting for user ${userId}: ${error}`)
       return { success: false};
   }
}

export const setpassword = async({userId, password, email, name, account, checkPassword}) =>{
    
    try {
        const obj = {
            password, email, name, account, checkPassword
        };
        const { data } = await axios.put(`${authUrl}/users/${userId}/setting`, obj, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
        });
        return { success: true, data };
    } catch (error) {
        console.error('[PasswordChange Failed]:', error);
        return { success: false };
    }
   

}



//admin 登入

export const admin = async({account,password}) =>{
    try{
    
   const {data} = await axios.post(`${authUrl}/admin/signin`, {account,password});

   return { success: true, ...data }
   }catch(error){
       console.error(error)
       return { success: false};
   }
}

