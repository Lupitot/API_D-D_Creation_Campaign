//supMonsterService.js

import axios from 'axios';


export function removeMonster(campId, monsterSlug){
    const token = localStorage.getItem('token');
    console.log('token', token);
    console.log('campId', campId);
    console.log('monsterSlug', monsterSlug);
    return axios.get(`http://localhost:3000/api/DandD/${campId}`,{
        headers: {
            'Authorization': token,
        }
    }).then(response => {
        const currentMonsterList = response.data.monster_list || [];
        const currentMonsterName = response.data.monster_name || [];

        const monsterIndex = currentMonsterName.indexOf(monsterSlug);

        if (monsterIndex !== -1) {
            currentMonsterList.splice(monsterIndex, 1);
            currentMonsterName.splice(monsterIndex, 1);
        }

        return axios.put(`http://localhost:3000/api/DandD/${campId}`, {
            monster_list: currentMonsterList,
            monster_name: currentMonsterName,
        }, {
            headers: {
                'Authorization': token,
            }
        });
    });
}