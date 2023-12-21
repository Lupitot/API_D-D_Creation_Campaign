// authService.js
import axios from 'axios';

export function login(email, password) {
  return axios.post('http://localhost:3000/api/users/login', {
    email,
    password,
  },
  )
  .then(response => {
    console.log('api response', response); 
    localStorage.setItem('token', response.data.token, 'name', response.data.name);
    return{
      token: response.data.token,
      name: response.data.name,
    } 
  })
  .catch(error => {
    console.error(error);
  });
}

