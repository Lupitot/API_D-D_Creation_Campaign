// addMonsterService.js

import axios from 'axios';

export function addMonster(campId, monsterSlug){
    const token = localStorage.getItem('token');
    console.log('token', token);

    const monsterUrl = `https://api.open5e.com/monsters/${monsterSlug}`;
    return axios.get(`https://campaign-creator-dandd-back.onrender.com/api/DandD/${campId}`,{
        headers: {
            'Authorization': token,
        }
    }).then(response => {
        const currentMonsterList = response.data.monster_list || [];
        const currentMonsterName = response.data.monster_name || [];

        const newMonsterList = [...currentMonsterList, monsterUrl];
        const newMonsterName = [...currentMonsterName, monsterSlug];

        return axios.put(`https://campaign-creator-dandd-back.onrender.com/api/DandD/${campId}`, {
            monster_list: newMonsterList,
            monster_name: newMonsterName,
        }, {
            headers: {
                'Authorization': token,
            }
        });
    
    }
    );
}
