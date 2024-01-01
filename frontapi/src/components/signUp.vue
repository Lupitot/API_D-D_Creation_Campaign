<template>
  <div>
    <form class="contentForm" @submit.prevent="submitForm">
      <div class="contentInput">
        <input type="text" v-model="name" placeholder="UserName" />
        <input type="text" v-model="email" placeholder="email" />
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <div class="contentBtn">
        <button class="btnSignUp" type="submit">Sign Up</button>
        <button class="btnSignUp" @click="this.$router.push('/')">Login</button>
      </div>
    </form>
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
      idUser: "",
      isLoggedIn: false,
    };
  },
  methods: {
    submitForm() {
      newUser(this.name, this.email, this.password).then(
        ({ token, name, idUser }) => {
          if (token) {
            this.isLoggedIn = true;
            this.name = name;
            localStorage.setItem("idUser", idUser);
            localStorage.setItem("name", name);
            console.log("Received token:", token);
            console.log("Received name:", name);
            localStorage.removeItem("name_of_campagne", null);
            this.$router.push("/showCamp").catch((err) => {
              console.log(err);
            });
          } else {
            console.log("No token received");
          }
        }
      );
    },
  },
};
</script>

<style>
.contentInput {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: auto;
  padding: 2rem;
}

.contentInput input {
  width: 20rem;
  height: 3.5rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  box-direction: none;
  border: 1px solid rgba(88, 88, 88, 0.901);
  box-shadow: inset 0px 0px 2px 0px var(--var-color2);
}

.contentInput input:focus {
  outline: none;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
}


.contentBtn{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: auto;
}

.btnSignUp {
  width: 10rem;
  height: 3rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  border: none;
  background-color: var(--var-color2);
  color: var(--var-color4);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnSignUp:hover {
  background-color: #4d84ecb3;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  color: var(--var-color4);
}

.contentForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: auto;
  margin-top: 3rem;
}
</style>
