<template>
  <div class="contentAllMonster">
    <div class="allInfoMonster" v-if="monster && monster.length">
      <div v-for="newMonster in monster" :key="newMonster.slug">
        <div class="visibleDeb" v-if="!newMonster.isVisible">
          <button class="openBtn" @click="toggleVisible(newMonster)">
            see more
          </button>
          <div><p>Name : </p>{{ newMonster.name }}</div>
          <div><p>Size : </p>{{ newMonster.size }}</div>
          <div><p>Type : </p>{{ newMonster.type }}</div>
          <div><p>PV : </p>{{ newMonster.hit_points }}</div>
          <button @click="addMonster(newMonster.slug)">Ajouter</button>
        </div>
      </div>
      <div v-for="newMonster in monster" :key="newMonster.slug">
        <div class="visibleLat" v-if="newMonster.isVisible">
          <button class="closeBtn" @click="toggleVisible(newMonster)">
            close
          </button>
          <div>
            <div class="nor">
              <p>Name : ‎</p>
              {{ newMonster.name }}
            </div>
            <div class="nor">
              <p>Size : ‎</p>
              {{ newMonster.size }}
            </div>
            <div class="nor">
              <p>Type : ‎</p>
              {{ newMonster.type }}
            </div>
            <br />
            <div class="stat">
              <div class="nor">
                <p>PV : ‎</p>
                {{ newMonster.hit_points }} |
              </div>
              <div class="nor">
                <p>Strength : ‎</p>
                {{ newMonster.strength }} |
              </div>
              <div class="nor">
                <p>Dexterity : ‎</p>
                {{ newMonster.dexterity }} |
              </div>
              <div class="nor">
                <p>Constitution : ‎</p>
                {{ newMonster.constitution }} |
              </div>
              <div class="nor">
                <p>Intelligence : ‎</p>
                {{ newMonster.intelligence }} |
              </div>
              <div class="nor">
                <p>Wisdom : ‎</p>
                {{ newMonster.wisdom }} |
              </div>
              <div class="nor">
                <p>Charisma : ‎</p>
                {{ newMonster.charisma }} |
              </div>
              <div class="nor">
                <p>Perception : ‎</p>
                {{ newMonster.perception }}
              </div>
            </div>
            <div>
              <h3>Action :</h3>
              <br />
              <div
                class="action-text"
                v-html="formatActions(newMonster.actions)"
              ></div>
            </div>
            <br />
            <div class="nor">
              <p>Environments : ‎</p>
              {{ newMonster.environments }}
            </div>
          </div>
          <button class="addBtn" @click="addMonster(newMonster.slug)">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  </div>

  <button class="previousBtn" @click="previousPage" :disabled="page === 1">
    Previous
  </button>
  <button class="nextBtn" @click="nextPage">Next</button>
</template>

<script>
import { showMonster } from "@/services/monsterService";
import { addMonster as addMonsterToCamp } from "@/services/addMonsterService";

export default {
  name: "addMonster",
  data() {
    return {
      monster: [],
      monsterSlug: [],
      page: 1,
      isVisible: false,
    };
  },
  methods: {
    formatActions(actions) {
      return actions
        .map((action) => `<strong>${action.name}:</strong> ${action.desc}`)
        .join("\n\n");
    },

    toggleVisible(monster) {
      monster.isVisible = !monster.isVisible;
    },

    loadMonster() {
      showMonster(this.page).then((monster) => {
        this.monster = monster.data.results.map((m) => ({
          ...m,
          isVisible: false,
        }));
      });
    },
    addMonster(monsterSlug) {
      const campId = localStorage.getItem("currentCampId");
      addMonsterToCamp(campId, monsterSlug).then((monster) => {
        this.monster = monster.data;
        this.monsterSlug = monsterSlug;

        this.loadMonster();
      });
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

<style>
.action-text {
  white-space: pre-wrap;
}

.contentAllMonster {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 50vw;
}

.allInfoMonster {
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.visibleDeb div p{
  font-weight: bold;
}

.visibleDeb {
  margin: 10px;
  padding: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 300px;
  height: 300px;
  display: flex;
  align-items: flex-start;
  background-color: var(--var-color4);
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
}

.visibleDeb:hover {
  transform: translateY(-15px);
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
}

.visibleLat p {
  font-size: medium;
  font-weight: bold;
}

.visibleLat .nor {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: medium;

  flex-wrap: wrap;
}


.visibleLat {
  border-radius: 20px;
  margin: 10px;
  width: 50rem;
  min-height: 30rem;
  height: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  background-color: var(--var-color4);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border: var(--var-color2) solid 2px;
}

.stat {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.previousBtn {
  position: fixed;
  width: 10rem;
  top: 50%;
  left: 1.5rem;
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

.previousBtn:hover {
  background-color: #4d84ecb3;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  color: var(--var-color4);
}

.addBtn {
  width: 40%;
  height: auto;
  padding: 1rem;
  background-color: var(--var-color3);
  border: none;
  border-radius: 15px;
  color: var(--var-color4);
  margin-top: 1rem;
}

.nextBtn {
  width: 10rem;
  position: fixed;
  top: 50%;
  right: 1.5rem;
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

.nextBtn:hover {
  background-color: #4d84ecb3;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  color: var(--var-color4);
}

.closeBtn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  color: var(--var-color3);
  font-size: 1.5rem;
}
</style>
