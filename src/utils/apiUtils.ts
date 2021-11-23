import axios from 'axios';
const baseUrl = process.env.BASE_URL;

export const login = (username: string, password: string) =>
  axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
      username,
      password,
    },
});

export const signup = (username: string, password: string) =>
  axios({
    method: 'post',
    url: `${baseUrl}/signup`,
    data: {
      username,
      password, 
    },
});