import axios from "axios";

const baseURL = 'https://quiet-brook-57490-c9dd61813879.herokuapp.com/api'

// 新增追蹤
export const postFollow = async (token) => {
	try {
		const res = await axios.post(`${baseURL}/followships`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return res.data;
	} catch (error) {
		console.error('[Post Follow failed]: ', error);
	}
};

// 取消追蹤
export const deleteFollow = async (token, followingId) => {
	try {
		const res = await axios.delete(`${baseURL}/followships/${followingId}`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return res.data;
	} catch (error) {
		console.error('[Delete Follow failed]: ', error.response.data);
	}
};