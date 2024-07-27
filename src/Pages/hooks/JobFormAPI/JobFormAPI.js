import axios from 'axios';

const JobFormAPI = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

JobFormAPI.interceptors.request.use((req) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default JobFormAPI;
