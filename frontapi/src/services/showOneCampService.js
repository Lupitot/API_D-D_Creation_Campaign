//showOneCampService.js
import axios from 'axios';

export function showOneCamp(campId){
    const token = localStorage.getItem('token');
    console.log('token', token);
    return axios.get(`https://campaign-creator-dandd-back.onrender.com/api/DandD/${campId}`, {
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