import axios from 'axios';

import baseURL from './baseUrl';

// Whenever we call apis,
// we will export from here all the different endpoints.

// 1. Create instance of axios.
const axiosInstance = axios.create({
	baseURL,
	timeout: 1000, // timeout for 1 second
});

type ApiOptions = {
	data?: object | string;
	method?: 'get' | 'put' | 'post' | 'delete';
	params?: object;
};

export const api = async (url: string, options: ApiOptions = {}) => {
	// 1) destructure our params
	const { data, method = 'get', params } = options; // could move below 'headers' to here.

	// hardcode for now, but can use JWT to secure api endpoints
	const accessToken = 'ACCESS_TOKEN';

	try {
		const response = await axiosInstance.request({
			data,
			headers: {
				// important for authorization
				Authorization: `Bearer ${accessToken}`, // assuming we're using JWT
				'Content-Type': 'application/json',
			},
			method,
			params,
			responseType: 'json',
			url,
		});

		return response.data;
	} catch (error: any) {
		throw new Error(error.response?.data?.errors);
	}
};

export default api;

// next, set up a router file (ex: .user.getUsers)
