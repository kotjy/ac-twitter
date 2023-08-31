import axios from "axios";

const baseURL = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'

// 將推文加入喜歡
export const postLike = async (token, itemID) => {
	try {
		const res = await fetch(`${baseURL}/tweets/${itemID}/like`, {method: 'POST',
	   headers: {
			  ContentType:'application/json',
				Authorization: 'Bearer ' + token,
			},
			
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.error('[Post Like failed]: ', error.response.data);
	}
};

// 將推文移除喜歡
export const postUnlike = async (token, id) => {
	try {
		const res = await axios.post(`${baseURL}/tweets/${id}/unlike`, null, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return res.data;
	} catch (error) {
		console.error('[Post Unlike failed]: ', error.response.data);
		console.log(error);
	}
};