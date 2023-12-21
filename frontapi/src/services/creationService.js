// creationService.js

import axios from 'axios';

export function createCampagne(name_of_campagne, name_of_world, difficulty, pitch, number_of_player_recomended, importants_place) {
    
    
    const token = localStorage.getItem('token');

    if(!token) {
        console.error('no token');
        return Promise.reject('no token');
    }

    const headers = { Authorization: token };
    
    return axios.post('http://localhost:3000/api/DandD/post', {
        name_of_campagne,
        name_of_world,
        difficulty,
        pitch,
        number_of_player_recomended,
        importants_place,
    }, 
        { headers },
    )
        .then(response => {
            console.log('api response', response);
            localStorage.setItem('name_of_campagne', response.data.name_of_campagne, 'name_of_world', response.data.name_of_world, 'difficulty', response.data.difficulty, 'pitch', response.data.pitch, 'number_of_player_recomended', response.data.number_of_player_recomended, 'importants_place', response.data.importants_place);
            return {
                name_of_campagne: response.data.name_of_campagne,
                name_of_world: response.data.name_of_world,
                difficulty: response.data.difficulty,
                pitch: response.data.pitch,
                number_of_player_recomended: response.data.number_of_player_recomended,
                importants_place: response.data.importants_place,
            }


        })
        .catch(error => {
            console.error(error);
        }
        );
}

