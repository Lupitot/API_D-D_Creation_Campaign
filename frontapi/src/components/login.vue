<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="email" placeholder="email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
      <button @click="this.$router.push('/signupPage')">Sign Up</button>
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
          this.$router.push("/showCamp");
        }
      });
    },
  },
};
</script>
