<template>
  <div class="containerSignUp">
    <h1>Sign Up</h1>
    <signUp />
  </div>
</template>

<script>
import signUp from "../components/signUp.vue";

export default {
  name: "SignUpPage",
  components: {
    signUp,
  },
};
</script>

<style>
.containerSignUp {
  overflow-y: hidden;
  width: auto;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--var-color3);
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

h1 {
  color: var(--var-color4);
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  position: absolute;
  top: 2rem;
}
</style>
