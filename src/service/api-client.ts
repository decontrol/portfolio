import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://portfolio-api-hjk-production.up.railway.app/api/v1',
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		// arrow function doesnt have its own 'this' context
		return axiosInstance.get(this.endpoint, config).then((res) => res.data);
	};
	getSingle = (id: string | number) =>
		axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
}

export default APIClient;
