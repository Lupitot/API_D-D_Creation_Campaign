//newUserService.js
import axios from 'axios';

export function newUser(name, email, password) {
  return axios.post('https://campaign-creator-dandd-back.onrender.com/api/users/signup', {
    name,
    email,
    password,
  },
  )
  .then(response => {
    console.log('api response', response); 
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('idUser', response.data.idUser);
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