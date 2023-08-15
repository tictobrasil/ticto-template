import axios from 'axios';
const token = localStorage.getItem('token:key');

export const httpApi = axios.create({
    baseURL: process.env.APPLICATION_URL,
    headers: {
        Authorization: 'JWT ' + token,
    },
});
