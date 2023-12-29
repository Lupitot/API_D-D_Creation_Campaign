// authService.js
import axios from 'axios';

export function login(email, password) {
  return axios.post('https://campaign-creator-dandd-back.onrender.com/api/users/login', {
    email,
    password,
  })
  .then(response => {
    console.log('api response', response); 
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('idUser', response.data.idUser);
    console.log('Iduser', localStorage.getItem('idUser'));
    return{
      token: response.data.token,
      name: response.data.name,
      idUser: response.data.idUser
    } 
  })
  .catch(error => {
    console.error(error);
  });
}