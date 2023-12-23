<template>
  <div>
    <div>createCampagne</div>
    <formCamp />


  </div>
</template>

<script>
import formCamp from "../components/formCamp.vue";
export default {
  name: "CreationCamp",
  components: {
    formCamp,
  },
  Headers: {
    Autorisation: localStorage.getItem("token"),
  }
};
</script>

<style></style>
