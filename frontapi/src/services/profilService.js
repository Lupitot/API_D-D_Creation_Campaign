//profilService.js

import axios from 'axios';

export function getProfil(idUser) {
    return axios.get(`http://localhost:3000/api/users/${idUser}`)
        .then(response => {
            return {
                name: response.data.name,
                email: response.data.email
            }
        })
        .catch(error => {
            console.error(error);
        });
}