<template>
  <form @submit.prevent="submitForm">
    <input
      type="text"
      placeholder="Nom de la campagne"
      v-model="name_of_campagne"
    />
    <input type="text" placeholder="Nom du monde" v-model="name_of_world" />
    <input type="number" placeholder=" Difficulté" v-model="difficulty" />
    <input type="text" placeholder="Pitch" v-model="pitch" />
    <input
      type="number"
      placeholder="Nombre de joueurs"
      v-model="number_of_player_recomended"
    />
    <input
      type="text"
      placeholder="Lieux importants"
      v-model="importants_place"
    />
    <button type="submit">Modifier la Campagne</button>
  </form>
</template>

<script>
import { modifCamp } from "../services/modifCampService";
import { showOneCamp } from "../services/showOneCampService";

export default {
  data() {
    return {
      name_of_campagne: "",
      name_of_world: "",
      difficulty: "",
      pitch: "",
      number_of_player_recomended: "",
      importants_place: "",
      monster_name: "",
      monster_list: "",
    };
  },

  created() {
    const idCamp = localStorage.getItem("currentCampId");
    console.log("idcampcreated : ", idCamp);
    showOneCamp(idCamp)
      .then((data) => {
        console.log("Received data: ", data); // Add this line
        const camp = data.data;
        console.log("Received camp: ", camp); // Add this line
        this.name_of_campagne = camp.name_of_campagne;
        this.name_of_world = camp.name_of_world;
        this.difficulty = camp.difficulty;
        this.pitch = camp.pitch;
        this.number_of_player_recomended = camp.number_of_player_recomended;
        this.importants_place = camp.importants_place;
        this.monster_name = camp.monster_name;
        this.monster_list = camp.monster_list;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    submitForm(event) {
      event.preventDefault();

      const idCamp = localStorage.getItem("currentCampId");
      let importants_place = Array.isArray(this.importants_place)
        ? this.importants_place
        : this.importants_place.split(",");
      modifCamp(
        idCamp,
        this.name_of_campagne,
        this.name_of_world,
        this.difficulty,
        this.pitch,
        this.number_of_player_recomended,
        importants_place
      ).then(
        ({
          name_of_campagne,
          name_of_world,
          difficulty,
          pitch,
          number_of_player_recomended,
          importants_place,
        }) => {
          this.name_of_campagne = name_of_campagne;
          this.name_of_world = name_of_world;
          this.difficulty = difficulty;
          this.pitch = pitch;
          this.number_of_player_recomended = number_of_player_recomended;
          this.importants_place = importants_place;
          console.log("Received name_of_campagne:", name_of_campagne);
          console.log("Received name_of_world:", name_of_world);
          console.log("Received difficulty:", difficulty);
          console.log("Received pitch:", pitch);
          console.log(
            "Received number_of_player_recomended:",
            number_of_player_recomended
          );
          console.log("Received importants_place:", importants_place);
          localStorage.removeItem("currentCampId");
          this.$router.push(`/profilPage`);
        }
      );
    },
  },
};
</script>

<style scoped></style>
