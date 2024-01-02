<template>
  <div class="Page">
    <decoButton />
    <div class="ButtonPage">
      <button @click="redirectProfil()">Profil</button>
      <button @click="redirectCreationCamp()">Créer une campagne</button>
    </div>
    <h2 class="titre">Les Campagnes</h2>

    <showAllCamp />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: auto;
}

.ButtonPage {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1rem;
  top: 1rem;
  left: 1.5rem;
}

.titre {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 3rem;
}

.contentPage {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 80%;
  gap: 1.5rem;
}
</style>
