<template>
    <div v-for = "profilCamps in profilCamp" :key="profilCamps.id" >
        <div>{{profilCamps.name_of_campagne}}</div>
        <div>{{profilCamps.name_of_world}}</div>
        <div>{{profilCamps.difficulty}}</div>
        <div>{{profilCamps.pitch}}</div>
        <div>{{profilCamps.number_of_player_recomended}}</div>
        <div>{{profilCamps.importants_place}}</div>
        <div v-for="(monster, index) in profilCamps.monster_name" :key="monster.id">
            <a :href="profilCamps.monster_list[index]">
                {{ monster }}
            </a>
        </div>

    </div>
</template>

<script>
import getCampagneUser from "@/services/profilCampService.js";

export default {
    name: "showCampProfil",
    data() {
        return {
            profilCamp: [],
        };
    },
    
    methods: {
        
       loadCampUser() {
        const idUser = localStorage.getItem("idUser");
            getCampagneUser(idUser) 
                .then((response) => {
                    console.log('dans l appel de getcampage user',response.data);
                    this.profilCamp = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
    this.loadCampUser();
},
};


</script>

<style scoped>
</style>