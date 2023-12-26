//profilCampService.js

import axios from 'axios';

export default function profilCamp(idUser) {
    const token = localStorage.getItem('token');
    return axios.get(`http://localhost:3000/api/DandD/get`, {
        headers: {
            'Authorization': token,
        }
    })
    .then(response => {
        console.log('avant le if', response.data);
        console.log('idUser', idUser);
        const filteredData = response.data.filter(item => item.creator === idUser);
        return {
            data: filteredData,
        }
    });
} 