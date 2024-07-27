import axios from 'axios';

const JobFormAPI = axios.create({
  baseURL: 'https://kormo-bazar-server1.vercel.app/api/v1',
});

JobFormAPI.interceptors.request.use((req) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default JobFormAPI;
