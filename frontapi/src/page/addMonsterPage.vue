<template>
    <div class="contentAddMonster">
        <add-monster />
    </div>
    <button class="validBtn" @click="validateMonsters">Valider</button>
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
            localStorage.removeItem('createCamp');
        }
    }
}
</script>

<style scoped>

.contentAddMonster{
    position : absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: auto;
    width: 100vw;
}

.validBtn{
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--var-color2);
    box-shadow: inset 0 0 1rem var(--var-color1);
    border: none;
    color: var(--var-color4);
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
}

.validBtn:hover{
    box-shadow:  0 0 4px 0 var(--var-color1);;
}

</style>