import axios from 'axios';
const BASE_URL = 'https://webla-api.uc.r.appspot.com/api/v1';


export const registerUserAPI = async (data) => {
	const response = await axios({
		method: 'POST',
		url: `${BASE_URL}/users/register`,
		data: {
			name: data.name,
			email: data.email,
			password: data.password
		},
		params: {},
		headers: {}
	})

	return response;
}


export const loginUserApi = async (data) => {
	const response = await axios({
		method: 'POST',
		url: `${BASE_URL}/users/login`,
		data: {
			email: data.email,
			password: data.password
		}
	})

	return response;
}


export const getAllProducts = async () => {
	const token = localStorage.getItem("ECOM_TOKEN");

	const response = await axios({
		method: "GET",
		url: `${BASE_URL}/products`,
		headers: {
			"X-Authorization": `Bearer ${token}`
		}
	})

	return response;
}