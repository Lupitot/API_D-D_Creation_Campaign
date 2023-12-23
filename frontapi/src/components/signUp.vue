<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="UserName" />
      <input type="text" v-model="email" placeholder="email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
    <div v-if="isLoggedIn">
      <h2>Welcome, {{ name }}!</h2>
    </div>
  </div>
</template>

<script>
import { newUser } from "@/services/newUserService";

export default {
  name: "UserSingUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      isLoggedIn: false,
    };
  },
  methods: {
    submitForm() {
      newUser(this.name, this.email, this.password).then(({ token, name }) => {
        if (token) {
          this.isLoggedIn = true;
          this.name = name;
          console.log("Received token:", token);
          console.log("Received name:", name);
          this.$router.push("/creationCamp").catch((err) => {
            console.log(err);
          });
        } else {
          console.log("No token received");
        }
      });
    },
  },
};
</script>

<style></style>
