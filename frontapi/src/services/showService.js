//showService.js
import axios from 'axios';

export function showCamp(){
    const token = localStorage.getItem('token');
    console.log('token', token);
    return axios.get('https://campaign-creator-dandd-back.onrender.com/api/DandD/get', {
        headers: {
            'Authorization': token,
        }
    })
    .then(response => {
        console.log('api response', response); 
        return{
            data: response.data,
        } 
    })
}