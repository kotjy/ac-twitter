import axios from 'axios';

const authUrl = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'
//登入
export const login = async({account,password}) =>{
    try{
    const {data} = await axios.post(`${authUrl}/users/signin`, {account,password});
    return data
    }catch(error){
        console.error('[Login Failed]:', error)
    }
}

//註冊
export const signup = async({account,name,email, password,checkPassword}) =>{
try{
 const {data} = await axios.post(`${authUrl}`, 
 {account,name,email, password,checkPassword});
 const { authToken } = data;

 if (authToken) {
    return { success: true, ...data };
  }

}catch(error){
    console.error('[Signup Failed]:', error) 
}
}