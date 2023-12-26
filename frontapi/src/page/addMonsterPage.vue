<template>
    <div>
        <add-monster />
    </div>
    <button @click="validateMonsters">Valider</button>
</template>

<script>
import addMonster from '@/components/addMonster.vue';

export default {
    name: 'addMonsterPage',
    components: {
        'add-monster': addMonster,
    },
    methods:{
        validateMonsters(){
            this.$router.push('/showCamp');
            localStorage.removeItem('currentCampId');
            localStorage.removeItem('name_of_campagne');
            localStorage.removeItem('name_of_world');
            localStorage.removeItem('difficulty');
            localStorage.removeItem('pitch');
            localStorage.removeItem('number_of_player_recomended');
            localStorage.removeItem('importants_place');
            localStorage.removeItem('creator');
            localStorage.removeItem('monsters');
            localStorage.removeItem('campagnes');
        }
    }
}
</script>

<style>
</style>