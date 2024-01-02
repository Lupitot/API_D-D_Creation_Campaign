<template>
  <div class="campProf">
    <div v-for="profilCamps in profilCamp" :key="profilCamps.id">
      <div class="cardCamp" v-if="!profilCamps.isVisible">
        <div class="InfoDiv">
          <p class="titleInfo">Name‎:</p>
          <p class="infoImp">{{ profilCamps.name_of_campagne }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">World‎:</p>
          <p class="infoImp">{{ profilCamps.name_of_world }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Difficulty‎:</p>
          <p class="infoImp">{{ profilCamps.difficulty }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Pitch‎:</p>
          <p class="infoImp">{{ profilCamps.pitch }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Player‎:</p>
          <p class="infoImp">{{ profilCamps.number_of_player_recomended }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Place‎:</p>
          <p class="infoImp">
            {{ arrayToString(profilCamps.importants_place) }}
          </p>
        </div>
        <button class="btnSee" @click="toggleVisible(profilCamps)">
          See more
        </button>
      </div>
    </div>
  </div>
  <div v-for="profilCamps in profilCamp" :key="profilCamps.id">
    <div class="cardCampAll" v-if="profilCamps.isVisible">
      <button class="btnClose" @click="toggleVisible(profilCamps)">X</button>
      <div class="InfoDiv">
        <p class="titleInfo">Name‎:</p>
        <p class="infoImpAll">{{ profilCamps.name_of_campagne }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">World‎:</p>
        <p class="infoImpAll">{{ profilCamps.name_of_world }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Difficulty‎:</p>
        <p class="infoImpAll">{{ profilCamps.difficulty }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Pitch‎:</p>
        <p class="infoImpAll">{{ profilCamps.pitch }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Player‎:</p>
        <p class="infoImpAll">{{ profilCamps.number_of_player_recomended }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Place‎:</p>
        <p class="infoImpAll">
          {{ arrayToString(profilCamps.importants_place) }}
        </p>
      </div>
      <div class="contentListMonster">
        <div
          v-for="(monster, index) in profilCamps.monster_name"
          :key="monster.id"
        >
          <a class="linkMonster" :href="profilCamps.monster_list[index]">
            {{ monster }}
          </a>
        </div>
      </div>
      <div class="contentBotBtn">
        <button
          class="btnModif"
          @click.stop="
            loadIdRedirect(profilCamps._id), console.log(profilCamps)
          "
        >
          Modifier la campagne
        </button>

        <btnDelCamp :campId="profilCamps._id" @campDeleted="updateState" />
      </div>
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
      isVisible: false,
    };
  },

  methods: {
    toggleVisible(info) {
      info.isVisible = !info.isVisible;
    },

    arrayToString(array) {
      return array.join(", ");
    },

    updateState() {
      console.log("updateState de showCampProfil");
      this.loadCampUser();
    },

    loadCampUser() {
      const idUser = localStorage.getItem("idUser");
      getCampagneUser(idUser)
        .then((response) => {
          console.log(
            "dans loadCampUser puis dans le then de getCampagneUser de showCampProfil"
          );
          this.profilCamp = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadIdRedirect(campId) {
      console.log("loadIdRedirect");
      console.log("campid dans load redirect de showCampProfil", campId);
      localStorage.setItem("currentCampId", campId);
      this.$router.replace(`/modifCamp`);
    },
  },
  created() {
    this.loadCampUser();
  },
};
</script>

<style scoped>
.cardCamp {
  margin: 7px;
  padding: 17px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  width: 310px;
  height: 310px;
  display: flex;
  align-items: center;
  background-color: var(--var-color4);
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
  gap: 15px;
}

.cardCamp:hover {
  margin: 16px;
  width: 295px;
  height: 295px;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0px 0px 8px 3px rgba(0, 0, 0, 0.75);
}

.InfoDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(115, 115, 115, 0.885);
}

.titleInfo {
  font-weight: bold;
  font-size: 1.2rem;
}
.infoImp {
  padding: 5px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}

.infoImpAll {
  padding: 5px;
  position: relative;
  width: auto;
  margin-left: 1.5rem;
  font-size: 1rem;
}

.cardCampAll {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 10px;
  padding: 20px;
  padding-top: 50px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 800px;
  height: 700px;
  display: flex;
  align-items: center;
  background-color: var(--var-color4);
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
  gap: 15px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.campProf {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  height: 50vh;
  margin-top: 5rem;
  box-shadow: inset 0px 0px 20px 1px rgba(0, 0, 0, 0.75), 0px 0px 6px 3px #4d85ecc8;
  background-color: #4d85ecc8 ;
  overflow-y: scroll;
  border-radius: 20px;
  padding: 10px;
}

.campProf::-webkit-scrollbar {
  width: 10px;
}

.campProf::-webkit-scrollbar-track {
  background: #bfbfbf;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}

.campProf::-webkit-scrollbar-thumb {
  background: #4d85ecc8;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}

.campProf::-webkit-scrollbar-thumb:hover {
  background: #4d85ecc8;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
}



.contentListMonster {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 10px 20px 0px 10px;
  width: 100%;
  height: 5rem;
  overflow-x: scroll;
  overflow-y: hidden;
}

.contentListMonster > * {
  display: flex;
  min-width: max-content;
}

.contentListMonster::-webkit-scrollbar {
  width: 10px;
}

.contentListMonster::-webkit-scrollbar-track {
  background: #bfbfbf;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}

.contentListMonster::-webkit-scrollbar-thumb {
  background: #4d85ecc8;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}

.contentListMonster::-webkit-scrollbar-thumb:hover {
  background: #4d85ecc8;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
}

.btnClose {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: var(--var-color2);
  color: var(--var-color4);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.btnClose:hover {
  background-color: #f05454c4;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  color: var(--var-color4);
}

.btnModif {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  color: var(--var-color4);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--var-color2);
  height: 3rem;
  transform: translateX(-50%);
}

.btnModif:hover {
  background-color: #4d84ecb3;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  color: var(--var-color4);
}

.contentBotBtn{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.linkMonster {
  color: black;
  text-decoration: none;
  font-size: 1rem;
  padding: 0px 10px 0px 10px;
}

.btnSee {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  color: var(--var-color4);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--var-color2);
}

.btnSee:hover {
  background-color: #4d84ecb3;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  color: var(--var-color4);
}

</style>
