// creationService.js

import axios from 'axios';

export function createCampagne(name_of_campagne, name_of_world, difficulty, pitch, number_of_player_recomended, importants_place) {


    const token = localStorage.getItem('token');
    const creator = localStorage.getItem('idUser');

    if (!token) {
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
        creator,
    },
        { headers },
    )
        .then(response => {
            console.log('api response', response);
            localStorage.setItem('name_of_campagne', response.data.campagne.name_of_campagne);
            localStorage.setItem('name_of_world', response.data.campagne.name_of_world);
            localStorage.setItem('difficulty', response.data.campagne.difficulty);
            localStorage.setItem('pitch', response.data.campagne.pitch);
            localStorage.setItem('number_of_player_recomended', response.data.campagne.number_of_player_recomended);
            localStorage.setItem('importants_place', response.data.campagne.importants_place);
            localStorage.setItem('_id', response.data.campagne._id);
            localStorage.setItem('creator', response.data.campagne.creator);
            return {
                name_of_campagne: response.data.campagne.name_of_campagne,
                name_of_world: response.data.campagne.name_of_world,
                difficulty: response.data.campagne.difficulty,
                pitch: response.data.campagne.pitch,
                number_of_player_recomended: response.data.campagne.number_of_player_recomended,
                importants_place: response.data.campagne.importants_place,
                _id: response.data.campagne._id,
                creator: response.data.campagne.creator,
            }


        })
        .catch(error => {
            console.error(error);
        }
        );
}

