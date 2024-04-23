import axios from 'axios';

export const CustomAxios = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
});
