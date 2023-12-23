//newUserService.js
import axios from 'axios';

export function newUser(name, email, password) {
  return axios.post('http://localhost:3000/api/users/signup', {
    name,
    email,
    password,
  },
  )
  .then(response => {
    console.log('api response', response); 
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('name', response.data.name);
    return{
      token: response.data.token,
      name: response.data.name,
    } 
  })
  .catch(error => {
    console.error(error);
  });
}