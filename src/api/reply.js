import axios from "axios";

const baseURL = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'


// 在推文底下新增回覆
export const postReply = async (token, comment, tweetId) => {
	try {
		const res = await axios.post(
			`${baseURL}/tweets/${tweetId}/replies`,
			{ comment },
			{
				headers: {
					Authorization: 'Bearer ' + token,
				},
			},
		);
		return res.data;
	} catch (error) {
		console.error('[Post Reply failed]: ', error.response.data);
	}
};

// 取得推文中所有回覆
export const getAllReply = async (token, tweetId) => {
	try {
		const res = await axios.get(`${baseURL}/tweets/${tweetId}/replies`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return res.data;
	} catch (error) {
		console.error('[Get All Replies to a Tweet failed]: ', error.response.data);
	}
};