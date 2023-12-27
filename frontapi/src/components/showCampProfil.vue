<template>
  <div v-for="profilCamps in profilCamp" :key="profilCamps.id">
    <div>{{ profilCamps.name_of_campagne }}</div>
    <div>{{ profilCamps.name_of_world }}</div>
    <div>{{ profilCamps.difficulty }}</div>
    <div>{{ profilCamps.pitch }}</div>
    <div>{{ profilCamps.number_of_player_recomended }}</div>
    <div>{{ profilCamps.importants_place }}</div>
    <div v-for="(monster, index) in profilCamps.monster_name" :key="monster.id">
      <a :href="profilCamps.monster_list[index]">
        {{ monster }}
      </a>
    </div>
    <button @click.stop="loadIdRedirect(profilCamps._id), console.log(profilCamps)">
        Modifier la campagne
    </button>
    <div>
      <btnDelCamp :campId="profilCamps._id"  @campDeleted="updateState"/>
    </div>
  </div>
</template>

<script>
import getCampagneUser from "@/services/profilCampService.js";
import btnDelCamp from "@/components/btnDelCamp.vue";

export default {
  name: "showCampProfil",
  components: {
    btnDelCamp,
  },
  data() {
    return {
      profilCamp: [],
    };
  },

  methods: {

    updateState() {
      console.log("updateState de showCampProfil");
      this.loadCampUser();
    },
    
    loadCampUser() {
      const idUser = localStorage.getItem("idUser");
      getCampagneUser(idUser)
      
        .then((response) => {
          console.log("dans loadCampUser puis dans le then de getCampagneUser de showCampProfil");
          this.profilCamp = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadIdRedirect(campId) {
      console.log("loadIdRedirect");
      console.log("campid dans load redirect de showCampProfil",campId);
      localStorage.setItem("currentCampId", campId);
      this.$router.replace(`/modifCamp`);
    },
  },
  created() {
    this.loadCampUser();
  },
};
</script>

<style scoped></style>
