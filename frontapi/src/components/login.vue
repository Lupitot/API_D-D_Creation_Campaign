<template>
  <div class="contentForm">
    <h1>Connexion</h1>
    <form @submit.prevent="submitForm">
      <div class="contentInput">
        <input
          class="inputLog"
          type="text"
          v-model="email"
          placeholder="email"
        />
        <input
          class="inputLog"
          type="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <div class="contentButton">
        <button type="submit">Login</button>
        <button @click="this.$router.push('/signupPage')">Sign Up</button>
      </div>
    </form>
    <div v-if="isLoggedIn">
      <h2>Welcome, {{ name }}!</h2>
    </div>
  </div>
</template>

<script>
import { login } from "@/services/authService";

export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      idUser: "",
      isLoggedIn: false,
    };
  },

  methods: {
    submitForm() {
      login(this.email, this.password).then(({ token, name, idUser }) => {
        if (!token) {
          console.log("No token received");
          return;
        } else {
          this.isLoggedIn = true;
          this.name = name;
          localStorage.setItem("idUser", idUser);
          localStorage.setItem("name", name);
          console.log("Received idUser:", idUser);
          console.log("Received token:", token);
          console.log("Received name:", name);
          localStorage.removeItem("name_of_campagne", null);
          console.log("avant redirect");
          this.$router.push(`/showCamp`);
        }
      });
    },
  },
};
</script>

<style scoped>
.contentForm {
  overflow-y: hidden;
  width: auto;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--var-color2);
  border-radius: 20px;
  position: relative;
}

h1{
  color: var(--var-color4);
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  position: absolute;
  top: 3rem;
}


.contentInput{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
}

.inputLog {
  width: 20rem;
  height: 3.5rem;
  margin: 1rem;
  padding: 1rem;
  
  border-radius: 20px;
  box-direction: none;
  border: 1px solid rgba(88, 88, 88, 0.901);
  box-shadow: inset 0px 0px 2px 0px var(--var-color2);
}

input:focus {
  outline: none;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
}
</style>
