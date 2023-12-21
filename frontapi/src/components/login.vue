<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="email" placeholder="email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
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
      isLoggedIn: false,
    };
  },
  methods: {
  submitForm() {
    login(this.email, this.password)
      .then(({ token, name }) => {
        this.isLoggedIn = true;
        this.name = name;
        console.log("Received token:", token);
        console.log("Received name:", name);
        this.$router.push('/creationCamp');
      });
  },
},
};
</script>
