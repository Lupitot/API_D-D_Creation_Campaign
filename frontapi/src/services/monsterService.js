//monsterService.js

import axios from 'axios';

export function showMonster(page = 1){
    const token = localStorage.getItem('token');
    console.log('token', token);
    return axios.get(`https://api.open5e.com/v1/monsters/?format=json&page=${page}`)


    .then(response => {
        console.log('api response', response); 
        return{
            data: response.data,
        } 
    })
}