<template>
    <div v-for="(monster, index) in monster_name" :key="index">
      <a :href="monster_list[index]">
        {{ monster }}
      </a>
      <button @click="storeMonsterSlug(monster)">supprimer le monstre</button>
    </div>
  </template>
  
  <script>
  import { showCamp } from "@/services/showService";
  import { removeMonster } from "@/services/supMonsterService";
  
  export default {
    name: "modifMonsterCamp",
    data() {
      return {
        monster_name: [],
        monster_list: [],
      };
    },
    created() {
      const idCamp = localStorage.getItem("currentCampId");
      showCamp(idCamp)
        .then((data) => {
          console.log("data : ", data);
          const camp = data.data[0];
          this.monster_name = camp.monster_name;
          this.monster_list = camp.monster_list;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  
    methods: {
      storeMonsterSlug(monster) {
        localStorage.setItem("currentMonsterSlug", monster);
        this.funcRemoveMonster();
      },
  
      funcRemoveMonster() {
        const idCamp = localStorage.getItem("currentCampId");
        const slug = localStorage.getItem("currentMonsterSlug");
        removeMonster(idCamp, slug)
        .then(() => {
        
        const index = this.monster_name.indexOf(slug); // cherche l'index du monstre en utilisant le slug et le retourne la valeur en 1 ou -1 si ca correspond
        if (index !== -1) { // si l'index n'est pas -1 alors on passe pas
          this.monster_name.splice(index, 1); // si l'index rst 1 alors on supprime grace au splice qui modifie le contenue de la liste 
          this.monster_list.splice(index, 1);
        }
      });
      },
    },
  };
  </script>
  
  <style></style>