// addMonsterService.js

import axios from 'axios';

export function addMonster(campId, monsterSlug){
    const token = localStorage.getItem('token');
    console.log('token', token);

    const monsterUrl = `https://api.open5e.com/monsters/${monsterSlug}`;
    return axios.get(`http://localhost:3000/api/DandD/${campId}`,{
        headers: {
            'Authorization': token,
        }
    }).then(response => {
        const currentMonsterList = response.data.monster_list || [];

        const newMonsterList = [...currentMonsterList, monsterUrl];

        return axios.put(`http://localhost:3000/api/DandD/${campId}`, {
            monster_list: newMonsterList,
        }, {
            headers: {
                'Authorization': token,
            }
        });
    
    }
    );
}
