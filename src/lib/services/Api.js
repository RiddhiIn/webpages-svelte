import { constants } from "$lib/constants";
import axios from "axios";

const axiosAPI = axios.create({
	baseURL: constants.basePath
});

const apiRequest = (method, url, request) => {
	const headers = {};
	let jwt = localStorage.getItem("jwt");
	if (jwt) {
		headers["Authorization"] = `Bearer ${jwt}`
	}
	return axiosAPI({
		method,
		url,
		data: request,
		headers
	}).then(res => {
		return Promise.resolve(res.data);
	})
	.catch(err => {
		return Promise.reject(err);
	});
};

const getRequest = (url, request) => apiRequest("get", url, request);

const deleteRequest = (url, request) => apiRequest("delete", url, request);

const postRequest = (url, request) => apiRequest("post", url, request);

const putRequest = (url, request) => apiRequest("put", url, request);

const patchRequest = (url, request) => apiRequest("patch", url, request);

const API = {
	get: getRequest,
	delete: deleteRequest,
	post: postRequest,
	put: putRequest,
	patch: patchRequest
};

export default API;