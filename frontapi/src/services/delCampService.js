//delCampService.js

import axios from 'axios';

export default function delCamp(id) {
    const token = localStorage.getItem('token');
    return axios.delete(`https://campaign-creator-dandd-back.onrender.com/api/DandD/${id}`, {
        headers: {
            'Authorization': token,
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    });
}