import axios from 'axios';

import { getTokenByKey } from './db';

export const api = axios.create({
	baseURL: 'http://localhost:6921', // 'https://auth.leadbox.com.ua',
});

api.interceptors.request.use(
	async (config) => {
		const token = await getTokenByKey('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
