//delCampService.js

import axios from 'axios';

export default function delCamp(id) {
    const token = localStorage.getItem('token');
    return axios.delete(`http://localhost:3000/api/DandD/${id}`, {
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