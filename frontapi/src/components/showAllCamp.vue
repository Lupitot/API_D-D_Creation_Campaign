<template>
    <div v-for="camp in camps" :key="camp.id">
        <div>{{camp.name_of_campagne}}</div>
        <div>{{camp.name_of_world}}</div>
        <div>{{camp.difficulty}}</div>
        <div>{{camp.pitch}}</div>
        <div>{{camp.number_of_player_recomended}}</div>
        <div>{{camp.importants_place}}</div>
        <div v-for="(monster, index) in camp.monster_name" :key="monster.id">
            <a :href="camp.monster_list[index]">
                {{ monster }}
            </a>
        </div>
    </div>
</template>
<script>
    import {showCamp as fetchCamps} from "../services/showService";


    export default {
        name: "ShowCamp",
        data() {
            return {
                camps: [],
            };
        },
        methods: {
            loadCamps() {
                fetchCamps().then((camps) => {
                    this.camps = camps.data;
                });
                
            },
            
        },
        created() {
            this.loadCamps();
        },
    };
</script>

<style></style>
