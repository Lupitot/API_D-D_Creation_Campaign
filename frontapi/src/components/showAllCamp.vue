<template>
  <div class="contentCard">
    <div v-for="camp in camps" :key="camp.id">
      <div class="cardCamp" v-if="!camp.isVisible">
        <div class="InfoDiv">
          <p class="titleInfo">Name‎:</p>
          <p class="infoImp">{{ camp.name_of_campagne }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">World‎:</p>
          <p class="infoImp">{{ camp.name_of_world }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Difficulty‎:</p>
          <p class="infoImp">{{ camp.difficulty }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Pitch‎:</p>
          <p class="infoImp">{{ camp.pitch }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Player‎:</p>
          <p class="infoImp">{{ camp.number_of_player_recomended }}</p>
        </div>
        <div class="InfoDiv">
          <p class="titleInfo">Place‎:</p>
          <p class="infoImp">
            {{ arrayToString(camp.importants_place) }}
          </p>
        </div>
        <button class="btnSee" @click="toggleVisible(camp)">See more</button>
      </div>
    </div>
  </div>
  <div v-for="camp in camps" :key="camp.id">
    <div class="cardCampAll" v-if="camp.isVisible">
      <button class="btnClose" @click="toggleVisible(camp)">X</button>
      <div class="InfoDiv">
        <p class="titleInfo">Name‎:</p>
        <p class="infoImpAll">{{ camp.name_of_campagne }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">World‎:</p>
        <p class="infoImpAll">{{ camp.name_of_world }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Difficulty‎:</p>
        <p class="infoImpAll">{{ camp.difficulty }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Pitch‎:</p>
        <p class="infoImpAll">{{ camp.pitch }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Player‎:</p>
        <p class="infoImpAll">{{ camp.number_of_player_recomended }}</p>
      </div>
      <div class="InfoDiv">
        <p class="titleInfo">Place‎:</p>
        <p class="infoImpAll">
          {{ arrayToString(camp.importants_place) }}
        </p>
      </div>
      <div class="contentListMonster">
        <div v-for="(monster, index) in camp.monster_name" :key="monster.id">
          <a class="linkMonster" :href="camp.monster_list[index]">
            {{ monster }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showCamp as fetchCamps } from "../services/showService";

export default {
  name: "ShowCamp",
  data() {
    return {
      camps: [],
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

<style>
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

.contentCard {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  height: 60vh;
  margin-top: 5rem;
  box-shadow: inset 0px 0px 20px 1px rgba(0, 0, 0, 0.75),
    0px 0px 6px 3px #4d85ecc8;
  background-color: #4d85ecc8;
  overflow-y: scroll;
  border-radius: 20px;
  padding: 10px;
}

.contentCard::-webkit-scrollbar {
  width: 10px;
}

.contentCard::-webkit-scrollbar-track {
  background: #bfbfbf;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}

.contentCard::-webkit-scrollbar-thumb {
  background: #4d85ecc8;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}

.contentCard::-webkit-scrollbar-thumb:hover {
  background: #4d85ecc8;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
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
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
  gap: 15px;
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

.linkMonster {
  color: black;
  text-decoration: none;
  font-size: 1rem;
  padding: 0px 10px 0px 10px;
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
