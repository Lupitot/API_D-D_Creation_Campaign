//showService.js
import axios from 'axios';

export function showCamp(){
    const token = localStorage.getItem('token');
    console.log('token', token);
    return axios.get('http://localhost:3000/api/DandD/get', {
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