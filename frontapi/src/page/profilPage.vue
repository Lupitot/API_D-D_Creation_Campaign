<template>
  <div class="contentAllPage">
    <h2>Profil</h2>
    <div>
      <showProfil />
    </div>
      <showCampProfil />
  </div>
</template>

<script>
import showProfil from "@/components/showProfil.vue";
import showCampProfil from "@/components/showCampProfil.vue";

export default {
  name: "profilPage",
  components: {
    showProfil,
    showCampProfil,
  },
};
</script>

<style scoped>
.contentAllPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h2 {
  position: absolute;
  top: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 3rem;
}



</style>
