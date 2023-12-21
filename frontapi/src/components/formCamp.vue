<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="name_of_campagne" placeholder="name_of_campagne">
            <input type="text" v-model="name_of_world" placeholder="name_of_world">
            <input type="number" v-model="difficulty" placeholder="difficulty">
            <input type="text" v-model="pitch" placeholder="pitch">
            <input type="number" v-model="number_of_player_recomended" placeholder="number_of_player_recomended">
            <input type="text" v-model="importants_place" placeholder="importants_place">
            <button type="submit">Créé la Campagne</button>
        </form>

    </div>
</template>

<script>
import { createCampagne } from '@/services/creationService';

export default {
    name: 'creationCamp',
    data() {
        return {
            name_of_campagne: '',
            name_of_world: '',
            difficulty: '',
            pitch: '',
            number_of_player_recomended: '',
            importants_place: '',
        };
    

    },
    methods: {
        
        submitForm() {
            const token = localStorage.getItem('token');
            console.log('Received token:', token);
            createCampagne(this.name_of_campagne, this.name_of_world, this.difficulty, this.pitch, this.number_of_player_recomended, this.importants_place)
            .then(({name_of_campagne, name_of_world, difficulty, pitch, number_of_player_recomended, importants_place}) => {
                this.name_of_campagne = name_of_campagne;
                this.name_of_world = name_of_world;
                this.difficulty = difficulty;
                this.pitch = pitch;
                this.number_of_player_recomended = number_of_player_recomended;
                this.importants_place = importants_place;
                console.log('Received name_of_campagne:', name_of_campagne);
                console.log('Received name_of_world:', name_of_world);
                console.log('Received difficulty:', difficulty);
                console.log('Received pitch:', pitch);
                console.log('Received number_of_player_recomended:', number_of_player_recomended);
                console.log('Received importants_place:', importants_place);
            });
        },
    },
};
</script>

<style> 
</style>