import axios from 'axios'

const authURL = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'

// 取得所有推文
export const getAllTweets = async (token) => {
	try {
		const response = await axios.get(`${authURL}/admin/tweets`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
	} catch (error) {
		console.error(`Error fetching all tweets: ${error}`);
	}
};

// 刪除推文，需要帶入推文 ID
export const deleteTweets = async (tweetId, token) => {
	try {
		const response = await axios.delete(`${authURL}/admin/tweets/${tweetId}`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});

		return response.data;
	} catch (error) {
		console.error(`Error fetching delete tweets: ${error}`);
	}
};

// 取得所有使用者資料
export const getAllUsers = async (token) => {
	try {
		const response = await axios.get(`${authURL}/admin/users`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return response.data;
	} catch (error) {
		console.error(`Error fetching delete tweets: ${error}`);
	}
};
