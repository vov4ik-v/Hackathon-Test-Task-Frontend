import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '@/constants';

export async function signup(body) {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, body);
    return response.data;
}

export async function login(body) {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, body);
    return response.data;
}