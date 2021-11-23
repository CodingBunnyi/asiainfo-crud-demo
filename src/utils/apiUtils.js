import axios from 'axios';
const baseUrl = "http://localhost:3000";

export const login = (username, password) =>
  axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
      username,
      password,
    },
});

export const signup = (username, password, nickyName) =>
  axios({
    method: 'post',
    url: `${baseUrl}/signup`,
    data: {
      username,
      password, 
      nickyName,
    },
});