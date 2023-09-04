import axios from "axios";
const authURL = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'

//獲取當前登入使用者資料，需要帶入使用者 ID
export const getUserData = async (userId, token) => {
  try{
    const response = await axios.get(`${authURL}/users/${userId}`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
  }catch (error) {
		console.error('[Get User Data Failed]: ', error);
}
}

// 獲取使用者個人推文，需要帶入使用者 ID
export const getUserTweets = async (userId, token) => {
	try {
		const response = await axios.get(`${authURL}/users/${userId}/tweets`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
	} catch (error) {
		console.error(`Error fetching tweets for user ${userId}: ${error}`);
	}
};

// 獲取使用者正在回覆的貼文
export const getUserReplyTweets = async (userId, token) => {
	try {
		const response = await axios.get(`${authURL}/users/${userId}/replied_tweets`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
	} catch (error) {
		console.error(`Error fetching ReplyTweets for user ${userId}: ${error}`);
	}
};

//獲取使用者喜歡的推文
export const getUserLikeTweets = async (userId, token) => {
	try {
		const response = await axios.get(`${authURL}/users/${userId}/likes`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
	} catch (error) {
		console.error(`Error fetching LikeTweets for user ${userId}: ${error}`);
	}
};

// 獲取使用者追隨中清單 userId可能要改成id
export const getFollowingList = async (userId, token) => {
	try {
		const response = await axios.get(`${authURL}/users/${userId}/followings`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
	} catch (error) {
		console.error(`Error fetching followingList for user ${userId}: ${error}`);
	}
};

// 獲取使用者被追隨清單 userId可能要改成id
export const getFollowedList = async (userId, token) => {
	try {
		const response = await axios.get(`${authURL}/users/${userId}/followers`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
	} catch (error) {
		console.error(`Error fetching followedList for user ${userId}: ${error}`);
	}
};

// 編輯個人資料
export const getEditPersonal = async (userId, token, name, avatar, banner, introduction) => {
	try {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('avatar', avatar);
		formData.append('banner', banner);
		formData.append('introduction', introduction);
    console.log(banner);
		const response = await axios.put(`${authURL}/users/${userId}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: 'Bearer ' + token,
			},
		});
		return response.data;
	} catch (error) {
		console.error(`Error fetching edit personal for user ${userId}: ${error}`);
	}
};
