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
    console.log(response)
     return response
   }catch(error){
       console.error(`Error fetching ReplyTweets for user ${userId}: ${error}`)
       return { success: false};
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

