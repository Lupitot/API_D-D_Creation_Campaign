<template>
  <div v-if="monster && monster.length">
    <div v-for="newMonster in monster" :key="newMonster.slug">
      <div>{{ newMonster.name }}</div>
      <div>{{ newMonster.size }}</div>
      <div>{{ newMonster.type }}</div>
      <div>{{ newMonster.alignement }}</div>
      <div>{{ newMonster.hit_points }}</div>
      <div>{{ newMonster.strength }}</div>
      <div>{{ newMonster.dexterity }}</div>
      <div>{{ newMonster.constitution }}</div>
      <div>{{ newMonster.intelligence }}</div>
      <div>{{ newMonster.wisdom }}</div>
      <div>{{ newMonster.charisma }}</div>
      <div>{{ newMonster.perception }}</div>
      <div>{{ newMonster.actions }}</div>
      <div>{{ newMonster.environments }}</div>

      <button @click="addMonster(newMonster.slug)">Ajouter</button>
    </div>
  </div>

  <button @click="previousPage" :disabled="page === 1">Previous</button>
  <button @click="nextPage">Next</button>
</template>

<script>
import { showMonster } from "@/services/monsterService";
import { addMonster as addMonsterToCamp } from "@/services/addMonsterService";

export default {
  name: "addMonster",
  data() {
    return {
      monster: [],
      page: 1,
    };
  },
  methods: {
    loadMonster() {
      showMonster(this.page).then((monster) => {
        console.log(monster);
        this.monster = monster.data.results;
      });
    },
    addMonster(monsterSlug) {
  const campId = localStorage.getItem("currentCampId");
  addMonsterToCamp(campId, monsterSlug).then((monster) => {
    this.monster = monster.data;
    this.loadMonster();
  }
    
  );
},

    nextPage() {
      this.page++;
      this.loadMonster();
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        this.loadMonster();
      }
    },
  },
  created() {
    this.loadMonster();
  },
};
</script>

<style></style>
