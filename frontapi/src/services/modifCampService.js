//modifCampService.js


import axios from 'axios';

export function modifCamp( campId ,campName, campWorldName, campDifficulty,campPitch, campNumPlayerReco, campImportantPlace ){
    const token = localStorage.getItem('token');
    

    return axios.put(`http://localhost:3000/api/DandD/${campId}`, {
        name_of_campagne: campName,
        name_of_world: campWorldName,
        difficulty: campDifficulty,
        pitch: campPitch,
        number_of_player_recomended: campNumPlayerReco,
        importants_place: campImportantPlace,
    }, {
        headers: {
            'Authorization': token,
        }
    });
}