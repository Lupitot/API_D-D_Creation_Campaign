<template>
  <div>
    {{ name }}
    <button @click="nameModif = true">modiName</button>
    <input v-if="nameModif" type="text" v-model="newName" />
    <button v-if="nameModif" @click="modifyProfil('name', newName)">
      Submit
    </button>

    {{ email }}
    <button @click="emailModif = true">modiEmail</button>
    <input v-if="emailModif" type="text" v-model="newEmail" />
    <button v-if="emailModif" @click="modifyProfil('email', newEmail)">
      Submit
    </button>
  </div>

  <button @click="this.$router.push('/showCamp')">
    Voir toutes les campagnes
  </button>
</template>

<script>
import { getProfil } from "../services/profilService";
import modifUser from "../services/modifUserService";

export default {
  name: "showProfil",
  data() {
    return {
      name: "",
      email: "",
      newName: "",
      newEmail: "",
      nameModif: false,
      emailModif: false,
    };
  },
  methods: {
    loadProfil() {
      const idUser = localStorage.getItem("idUser");
      getProfil(idUser).then((user) => {
        this.name = user.name;
        this.email = user.email;
      });
    },
    modifyProfil(data, value) {
      console.log("Modifying user:", data, value);
      modifUser(localStorage.getItem("idUser"), data, value).then(
        (response) => {
          if (response) {
            console.log("API response", response);
            if (data === "name") {
              console.log("Setting name in localStorage:", response.user.name);
              this.name = response.user.name;
              localStorage.setItem("name", response.user.name);
              this.nameModif = false;
              this.newName = "";
              this.loadProfil();
            } else {
              this.email = response.user.email;
              localStorage.setItem("email", response.user.email);
              this.emailModif = false;
              this.newEmail = "";
              this.loadProfil();
            }
          } else {
            console.log("invalid response", response);
          }
        }
      );
    },
  },
  created() {
    this.loadProfil();
  },
};
</script>

<style scoped></style>
