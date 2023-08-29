import axios from "axios";

const baseURL = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'


// 新增推文
export const postTweet = async (description, token) => {
	try {
		const res = await axios.post(
			`${baseURL}/tweets`,
			{ description },
			{
				headers: {
					Authorization: 'Bearer ' + token,
				},
			},
		);
		return res.data;
	} catch (error) {
		console.error('[Post Tweet failed]: ', error.response.data);
	}
};

// 取得所有貼文
export const getTweets = async (token) => {
	try {
		const res = await axios.get(`${baseURL}/tweets`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return res.data;
	} catch (error) {
		console.error('[Get Tweet failed]: ', error.response.data);
	}
};

// 取得個別推文
export const getIdTweets = async (token, tweetId) => {
	try {
		const res = await axios.get(`${baseURL}/tweets/${tweetId}`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return res.data;
	} catch (error) {
		console.error('[Get someone Tweet failed]: ', error.response.data);
	}
};
