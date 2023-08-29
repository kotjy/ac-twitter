import axios from "axios";
const authURL = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com'

//獲取當前登入使用者資料，需要帶入使用者 ID
export const getUserData = async (userId, authToken) => {
  try{
    const response = await axios.get(`${authURL}/api/users/${userId}`, {
			headers: {
				Authorization: 'Bearer ' + authToken,
			},
		});

		return response.data;
  }catch (error) {
		console.error('[Get User Data Failed]: ', error);
}
}