//modifUserService.js

import axios from 'axios';

export default function modifUser(id, data, value) {
    const token = localStorage.getItem('token');
    
    let updateData = {};
    if (data === 'name') {
        console.log('le name dans le servicen', value);
        updateData.name = value;
    } else if (data === 'email') {
        updateData.email = value;
    }
    console.log('updateData', updateData);
    return axios.put(`http://localhost:3000/api/users/${id}`, updateData, {
        headers: {
            'Authorization': token,
        }
    }).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.error(error);
    });
}