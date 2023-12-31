<template>
  <div class="Page">
    <decoButton />
    <div class="ButtonPage">
      <button @click="redirectProfil()">Profil</button>
      <button @click="redirectCreationCamp()">Créer une campagne</button>
    </div>
    <div class="contentPage">
      <div>les campagnes</div>
      <div class="showAllCamp">
        <showAllCamp />
      </div>
    </div>
  </div>
</template>

<script>
import showAllCamp from "@/components/showAllCamp.vue";
import decoButton from "@/components/decoButton.vue";

export default {
  name: "ShowCamp",
  components: {
    showAllCamp,
    decoButton,
  },

  methods: {
    redirectProfil() {
      this.$router.push("/profilPage");
    },
    redirectCreationCamp() {
      localStorage.setItem("createCamp", true),
        this.$router.push("/creationCamp");
    },
  },
};
</script>

<style scoped>
.Page {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
}

.ButtonPage {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 13rem;
  height: 2rem;
  padding: 1rem;
  top: 1rem;
  left: 1.5rem;
}

.contentPage {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 40vw;
  top: 10%;
  left: 5%;
}   

.showAllCamp {
  width: 90%;
  height: 20vw;
  overflow-y: scroll;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
